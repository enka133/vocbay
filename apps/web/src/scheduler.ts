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

export function createInitialCardState(now = Date.now()): CardReviewState {
  return {
    phase: "new",
    dueAt: now,
    easeFactor: 2.5,
    intervalDays: 0,
    repetitions: 0,
    lapses: 0,
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

export function gradeCardReview(reviewState: ReviewState, cardId: string, rating: Rating, now = Date.now()): ReviewState {
  const previous = getCardReviewState(reviewState, cardId, now);
  const next = scheduleRating(previous, rating, now);

  return {
    ...reviewState,
    [cardId]: next,
  };
}

export function previewRating(previous: CardReviewState, rating: Rating, now = Date.now()) {
  return scheduleRating(previous, rating, now);
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

function scheduleRating(previous: CardReviewState, rating: Rating, now: number): CardReviewState {
  const easeFactor = clampEase(previous.easeFactor);
  const currentInterval = Math.max(previous.intervalDays, previous.phase === "review" ? 1 : 0);
  const reviewBase = {
    lastReviewedAt: now,
    lastRating: rating,
    repetitions: previous.repetitions + 1,
    lapses: previous.lapses,
  };

  if (rating === "again") {
    return {
      ...previous,
      ...reviewBase,
      phase: previous.phase === "review" ? "relearning" : "learning",
      dueAt: now + minuteMs,
      easeFactor: clampEase(easeFactor - 0.2),
      intervalDays: 0,
      lapses: previous.lapses + (previous.phase === "review" ? 1 : 0),
    };
  }

  if (rating === "hard") {
    if (previous.phase === "new" || previous.phase === "learning" || previous.phase === "relearning") {
      return {
        ...previous,
        ...reviewBase,
        phase: "learning",
        dueAt: now + 10 * minuteMs,
        easeFactor: clampEase(easeFactor - 0.15),
        intervalDays: 0,
      };
    }

    const intervalDays = Math.max(1, Math.ceil(currentInterval * 1.2));
    return {
      ...previous,
      ...reviewBase,
      phase: "review",
      dueAt: now + intervalDays * dayMs,
      easeFactor: clampEase(easeFactor - 0.15),
      intervalDays,
    };
  }

  if (rating === "good") {
    const intervalDays =
      previous.phase === "new" || previous.phase === "learning" || previous.phase === "relearning"
        ? 1
        : Math.max(currentInterval + 1, Math.ceil(currentInterval * easeFactor));

    return {
      ...previous,
      ...reviewBase,
      phase: "review",
      dueAt: now + intervalDays * dayMs,
      easeFactor,
      intervalDays,
    };
  }

  const intervalDays =
    previous.phase === "new" || previous.phase === "learning" || previous.phase === "relearning"
      ? 4
      : Math.max(currentInterval + 2, Math.ceil(currentInterval * easeFactor * 1.3));

  return {
    ...previous,
    ...reviewBase,
    phase: "review",
    dueAt: now + intervalDays * dayMs,
    easeFactor: clampEase(easeFactor + 0.15),
    intervalDays,
  };
}

function clampEase(easeFactor: number) {
  return Math.min(3.3, Math.max(1.3, easeFactor));
}
