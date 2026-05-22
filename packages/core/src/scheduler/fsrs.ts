import type { FsrsRating, MemoryModelState } from "../types/fsrs";

export const gradeValue: Record<FsrsRating, 1 | 2 | 3 | 4> = {
  again: 1,
  hard: 2,
  good: 3,
  easy: 4,
};

// Published FSRS-6 default parameters (21 weights). w[20] is the learnable decay term.
export const FSRS6_DEFAULT_WEIGHTS = [
  0.2172, 1.1771, 3.2602, 16.1507, 7.0114, 0.57, 2.0966, 0.0069, 1.5261, 0.112, 1.0178, 1.849,
  0.1133, 0.3127, 2.2934, 0.2191, 3.0004, 0.7536, 0.3332, 0.1437, 0.2,
] as const;

export const DEFAULT_REQUEST_RETENTION = 0.88;
export const DEFAULT_MAXIMUM_INTERVAL_DAYS = 36500;
const MIN_STABILITY = 0.01;
const MIN_DIFFICULTY = 1;
const MAX_DIFFICULTY = 10;

export interface FsrsParameters {
  weights: number[];
  requestRetention: number;
  maximumIntervalDays: number;
}

export function createFsrsParameters(overrides: Partial<FsrsParameters> = {}): FsrsParameters {
  return {
    weights: overrides.weights ?? [...FSRS6_DEFAULT_WEIGHTS],
    requestRetention: overrides.requestRetention ?? DEFAULT_REQUEST_RETENTION,
    maximumIntervalDays: overrides.maximumIntervalDays ?? DEFAULT_MAXIMUM_INTERVAL_DAYS,
  };
}

function decayOf(params: FsrsParameters): number {
  return -params.weights[20]!;
}

// Canonical FSRS factor. The task prompt rendered this denominator as "(e^· − 1)" which is a
// garbled transcription of the standard 0.9^(1/decay) − 1 term. We implement the canonical form.
function factorOf(params: FsrsParameters): number {
  const decay = decayOf(params);
  return Math.pow(0.9, 1 / decay) - 1;
}

export function forgettingCurve(elapsedDays: number, stability: number, params = createFsrsParameters()): number {
  const decay = decayOf(params);
  const factor = factorOf(params);
  const days = Math.max(0, elapsedDays);
  return Math.pow(1 + (factor * days) / stability, decay);
}

export function nextInterval(stability: number, params = createFsrsParameters()): number {
  const decay = decayOf(params);
  const factor = factorOf(params);
  const raw = (stability / factor) * (Math.pow(params.requestRetention, 1 / decay) - 1);
  return clamp(Math.round(raw), 1, params.maximumIntervalDays);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function initialStability(grade: 1 | 2 | 3 | 4, params: FsrsParameters): number {
  return Math.max(MIN_STABILITY, params.weights[grade - 1]!);
}

function initialDifficulty(grade: 1 | 2 | 3 | 4, params: FsrsParameters): number {
  const w = params.weights;
  const d = w[4]! - Math.exp(w[5]! * (grade - 1)) + 1;
  return clamp(d, MIN_DIFFICULTY, MAX_DIFFICULTY);
}

function nextDifficulty(difficulty: number, grade: 1 | 2 | 3 | 4, params: FsrsParameters): number {
  const w = params.weights;
  const deltaD = -w[6]! * (grade - 3);
  const damped = difficulty + deltaD * ((10 - difficulty) / 9);
  const easyInit = initialDifficulty(4, params);
  const reverted = w[7]! * easyInit + (1 - w[7]!) * damped;
  return clamp(reverted, MIN_DIFFICULTY, MAX_DIFFICULTY);
}

function stabilityAfterRecall(
  stability: number,
  difficulty: number,
  retrievability: number,
  grade: 2 | 3 | 4,
  params: FsrsParameters,
): number {
  const w = params.weights;
  const hardPenalty = grade === 2 ? w[15]! : 1;
  const easyBonus = grade === 4 ? w[16]! : 1;
  const increase =
    Math.exp(w[8]!) *
    (11 - difficulty) *
    Math.pow(stability, -w[9]!) *
    (Math.exp(w[10]! * (1 - retrievability)) - 1) *
    hardPenalty *
    easyBonus;
  return Math.max(MIN_STABILITY, stability * (1 + increase));
}

function stabilityAfterLapse(
  stability: number,
  difficulty: number,
  retrievability: number,
  params: FsrsParameters,
): number {
  const w = params.weights;
  const postLapse =
    w[11]! *
    Math.pow(difficulty, -w[12]!) *
    (Math.pow(stability + 1, w[13]!) - 1) *
    Math.exp(w[14]! * (1 - retrievability));
  // A lapse can never increase stability beyond the pre-lapse value.
  return Math.max(MIN_STABILITY, Math.min(postLapse, stability));
}

export interface ReviewOutcome {
  state: MemoryModelState;
  intervalDays: number;
  isLapse: boolean;
}

/**
 * Apply one review to a card's memory state. `prev` is null for a never-reviewed card.
 * `elapsedDays` is the real time since the last review; ignored for the first review.
 */
export function reviewCard(
  prev: MemoryModelState | null,
  grade: FsrsRating,
  elapsedDays: number,
  now: Date,
  params = createFsrsParameters(),
): ReviewOutcome {
  const g = gradeValue[grade];

  if (!prev) {
    const stability = initialStability(g, params);
    const difficulty = initialDifficulty(g, params);
    const intervalDays = nextInterval(stability, params);
    return {
      state: {
        stability,
        difficulty,
        retrievability: 1,
        dueAt: addDays(now, intervalDays),
      },
      intervalDays,
      isLapse: false,
    };
  }

  const retrievability = forgettingCurve(elapsedDays, prev.stability, params);
  const difficulty = nextDifficulty(prev.difficulty, g, params);
  const isLapse = g === 1;
  const stability = isLapse
    ? stabilityAfterLapse(prev.stability, prev.difficulty, retrievability, params)
    : stabilityAfterRecall(prev.stability, prev.difficulty, retrievability, g as 2 | 3 | 4, params);
  const intervalDays = nextInterval(stability, params);

  return {
    state: {
      stability,
      difficulty,
      retrievability,
      dueAt: addDays(now, intervalDays),
    },
    intervalDays,
    isLapse,
  };
}

/**
 * Current recall probability for a card as of `now`, derived from stored stability and the
 * elapsed time since it was last reviewed. Used by the interference lock to decide when a
 * sibling lexeme is stable enough to unlock its partner.
 */
export function currentRetrievability(
  stability: number,
  lastReviewedAt: Date | null,
  now: Date,
  params = createFsrsParameters(),
): number {
  if (!lastReviewedAt) {
    return 0;
  }
  const elapsedDays = (now.getTime() - lastReviewedAt.getTime()) / 86_400_000;
  return forgettingCurve(elapsedDays, stability, params);
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * 86_400_000);
}
