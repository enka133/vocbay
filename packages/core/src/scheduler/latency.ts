import type { FsrsRating } from "../types/fsrs";

// A "Good" answered slower than this is treated as unconscious hesitation and graded down to "Hard".
export const HESITATION_THRESHOLD_MS = 4000;
// Above this the delay is assumed to be a distraction (tab-switch, interruption), not recall
// hesitation, so the latency signal is discarded and the raw grade the learner pressed is trusted.
export const DISTRACTION_CEILING_MS = 60_000;

export interface LatencySignal {
  rating: FsrsRating;
  responseLatencyMs: number;
}

/**
 * Map a learner's button press plus their answer latency to the grade the scheduler should act on.
 * A confident "Good" (≤4000ms) stays "Good"; a hesitant "Good" (4000ms..60s) is downgraded to "Hard"
 * so interval growth slows. Beyond 60s the delay is treated as distraction and ignored. "Again",
 * "Hard" and "Easy" are never altered by latency.
 */
export function effectiveGrade(signal: LatencySignal): FsrsRating {
  if (
    signal.rating === "good" &&
    signal.responseLatencyMs > HESITATION_THRESHOLD_MS &&
    signal.responseLatencyMs <= DISTRACTION_CEILING_MS
  ) {
    return "hard";
  }
  return signal.rating;
}

export function wasDowngradedForHesitation(signal: LatencySignal): boolean {
  return signal.rating === "good" && effectiveGrade(signal) === "hard";
}
