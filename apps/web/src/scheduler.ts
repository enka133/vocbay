import {
  LAPSE_SANDBOX_MS,
  createFsrsParameters,
  effectiveGrade,
  reviewCard,
  type MemoryModelState,
} from "@vocbay/core/scheduler";
import type { VocabularyCard } from "./vocabulary";

export type Rating = "again" | "hard" | "good" | "easy";
export type CardPhase = "new" | "learning" | "review" | "relearning";

export interface CardReviewState {
  phase: CardPhase;
  dueAt: number;
  easeFactor: number;
  intervalDays: number;
  repetitions: number;
  lapses: number;
  stability: number;
  difficulty: number;
  lastReviewedAt?: number;
  lastRating?: Rating;
}

export type ReviewState = Record<string, CardReviewState>;

export interface DeckStats {
  due: number;
  newCards: number;
  learning: number;
  review: number;
  mature: number;
  total: number;
}

export const minuteMs = 60_000;
export const dayMs = 86_400_000;

export const ratingLabels: Record<Rating, string> = {
  again: "Again",
  hard: "Hard",
  good: "Good",
  easy: "Easy",
};

const fsrsParams = createFsrsParameters();

export function createInitialCardState(now = Date.now()): CardReviewState {
  return {
    phase: "new",
    dueAt: now,
    easeFactor: 2.5,
    intervalDays: 0,
    repetitions: 0,
    lapses: 0,
    stability: 0,
    difficulty: 0,
  };
}

export function getCardReviewState(reviewState: ReviewState, cardId: string, now = Date.now()) {
  return reviewState[cardId] ?? createInitialCardState(now);
}

export function buildStudyQueue(cards: VocabularyCard[], reviewState: ReviewState, now = Date.now()) {
  const dueCards = cards
    .filter((card) => {
      const state = reviewState[card.id];
      return Boolean(state && state.phase !== "new" && state.dueAt <= now);
    })
    .sort((left, right) => getCardReviewState(reviewState, left.id, now).dueAt - getCardReviewState(reviewState, right.id, now).dueAt);

  const newCards = cards.filter((card) => {
    const state = reviewState[card.id];
    return !state || state.phase === "new";
  });

  return [...dueCards, ...newCards];
}

export function getDeckStats(cards: VocabularyCard[], reviewState: ReviewState, now = Date.now()): DeckStats {
  return cards.reduce<DeckStats>(
    (stats, card) => {
      const state = reviewState[card.id];

      if (!state || state.phase === "new") {
        stats.newCards += 1;
        return stats;
      }

      if (state.dueAt <= now) {
        stats.due += 1;
      } else if (state.phase === "learning" || state.phase === "relearning") {
        stats.learning += 1;
      } else {
        stats.review += 1;
      }

      if (state.intervalDays >= 21) {
        stats.mature += 1;
      }

      return stats;
    },
    { due: 0, newCards: 0, learning: 0, review: 0, mature: 0, total: cards.length },
  );
}

export function gradeCardReview(
  reviewState: ReviewState,
  cardId: string,
  rating: Rating,
  now = Date.now(),
  responseLatencyMs = 0,
): ReviewState {
  const previous = getCardReviewState(reviewState, cardId, now);
  const next = scheduleRating(previous, rating, now, responseLatencyMs);

  return {
    ...reviewState,
    [cardId]: next,
  };
}

export function previewRating(previous: CardReviewState, rating: Rating, now = Date.now()) {
  return scheduleRating(previous, rating, now, 0);
}

export function getCardStatus(state: CardReviewState | undefined, now = Date.now()) {
  if (!state || state.phase === "new") {
    return "New";
  }

  if (state.dueAt <= now) {
    return "Due";
  }

  if (state.phase === "learning" || state.phase === "relearning") {
    return "Learning";
  }

  return "Review";
}

export function formatDueDistance(dueAt: number, now = Date.now()) {
  const distance = dueAt - now;

  if (distance <= 0) {
    return "now";
  }

  if (distance < 60 * minuteMs) {
    return `${Math.ceil(distance / minuteMs)}m`;
  }

  if (distance < dayMs) {
    return `${Math.ceil(distance / (60 * minuteMs))}h`;
  }

  return `${Math.ceil(distance / dayMs)}d`;
}

function isUnreviewed(state: CardReviewState): boolean {
  return state.phase === "new" || state.repetitions === 0 || state.stability <= 0;
}

function scheduleRating(previous: CardReviewState, rating: Rating, now: number, responseLatencyMs: number): CardReviewState {
  // Latency is signal: a slow "Good" is treated as a "Hard" for scheduling. The raw rating is
  // still stored so rewards and the hidden mastery color reflect the button the learner pressed.
  const graded = effectiveGrade({ rating, responseLatencyMs });

  const priorState: MemoryModelState | null = isUnreviewed(previous)
    ? null
    : {
        stability: previous.stability,
        difficulty: previous.difficulty,
        retrievability: 1,
        dueAt: new Date(previous.dueAt),
      };

  const elapsedDays = previous.lastReviewedAt ? (now - previous.lastReviewedAt) / dayMs : 0;
  const outcome = reviewCard(priorState, graded, elapsedDays, new Date(now), fsrsParams);

  const isLapse = rating === "again";
  const wasReview = previous.phase === "review";

  if (isLapse) {
    // 15-minute sandbox: a failed card leaves short-term memory before it can be re-presented.
    return {
      phase: wasReview ? "relearning" : "learning",
      dueAt: now + LAPSE_SANDBOX_MS,
      easeFactor: previous.easeFactor,
      intervalDays: 0,
      repetitions: previous.repetitions + 1,
      lapses: previous.lapses + (wasReview ? 1 : 0),
      stability: outcome.state.stability,
      difficulty: outcome.state.difficulty,
      lastReviewedAt: now,
      lastRating: rating,
    };
  }

  return {
    phase: outcome.intervalDays >= 1 ? "review" : "learning",
    dueAt: now + outcome.intervalDays * dayMs,
    easeFactor: previous.easeFactor,
    intervalDays: outcome.intervalDays,
    repetitions: previous.repetitions + 1,
    lapses: previous.lapses,
    stability: outcome.state.stability,
    difficulty: outcome.state.difficulty,
    lastReviewedAt: now,
    lastRating: rating,
  };
}
