import { describe, expect, test } from "bun:test";
import {
  DEFAULT_REQUEST_RETENTION,
  HESITATION_THRESHOLD_MS,
  createFsrsParameters,
  effectiveGrade,
  forgettingCurve,
  nextInterval,
  reviewCard,
  wasDowngradedForHesitation,
} from "../src/scheduler";
import type { MemoryModelState } from "../src/types/fsrs";

const params = createFsrsParameters();
const now = new Date("2026-05-22T08:00:00Z");

function firstGood(): MemoryModelState {
  return reviewCard(null, "good", 0, now, params).state;
}

describe("FSRS-6 forgetting curve", () => {
  test("retrievability is 1.0 at zero elapsed days", () => {
    expect(forgettingCurve(0, 10, params)).toBeCloseTo(1, 10);
  });

  test("retrievability decreases strictly as time passes", () => {
    const stability = 10;
    let previous = forgettingCurve(0, stability, params);
    for (const day of [1, 5, 10, 30, 100]) {
      const current = forgettingCurve(day, stability, params);
      expect(current).toBeLessThan(previous);
      previous = current;
    }
  });

  test("default request retention is 0.88", () => {
    expect(DEFAULT_REQUEST_RETENTION).toBe(0.88);
    expect(params.requestRetention).toBe(0.88);
  });

  test("next interval round-trips to the target retention", () => {
    for (const stability of [1, 7, 30, 365]) {
      const interval = nextInterval(stability, params);
      // Retrievability at the scheduled interval should sit at the 0.88 target (within rounding).
      expect(forgettingCurve(interval, stability, params)).toBeCloseTo(0.88, 1);
    }
  });
});

describe("FSRS-6 state update", () => {
  test("a good review increases stability", () => {
    const prev = firstGood();
    const outcome = reviewCard(prev, "good", 3, now, params);
    expect(outcome.state.stability).toBeGreaterThan(prev.stability);
  });

  test("an again review yields lower stability than a good review", () => {
    const prev = firstGood();
    const lapsed = reviewCard(prev, "again", 3, now, params);
    const recalled = reviewCard(prev, "good", 3, now, params);
    expect(lapsed.isLapse).toBe(true);
    expect(lapsed.state.stability).toBeLessThan(recalled.state.stability);
  });

  test("difficulty stays within [1, 10] and stability stays positive across all grades", () => {
    let state: MemoryModelState | null = null;
    for (const grade of ["again", "hard", "good", "easy", "again", "easy"] as const) {
      const outcome = reviewCard(state, grade, 2, now, params);
      expect(outcome.state.difficulty).toBeGreaterThanOrEqual(1);
      expect(outcome.state.difficulty).toBeLessThanOrEqual(10);
      expect(outcome.state.stability).toBeGreaterThan(0);
      state = outcome.state;
    }
  });
});

describe("latency-aware grading", () => {
  test("a fast Good stays Good", () => {
    expect(effectiveGrade({ rating: "good", responseLatencyMs: 1200 })).toBe("good");
  });

  test("a slow Good is downgraded to Hard", () => {
    expect(effectiveGrade({ rating: "good", responseLatencyMs: 5000 })).toBe("hard");
    expect(wasDowngradedForHesitation({ rating: "good", responseLatencyMs: 5000 })).toBe(true);
  });

  test("the hesitation threshold is 4000ms", () => {
    expect(HESITATION_THRESHOLD_MS).toBe(4000);
    expect(effectiveGrade({ rating: "good", responseLatencyMs: 4000 })).toBe("good");
    expect(effectiveGrade({ rating: "good", responseLatencyMs: 4001 })).toBe("hard");
  });

  test("latency never alters Again, Hard, or Easy", () => {
    for (const rating of ["again", "hard", "easy"] as const) {
      expect(effectiveGrade({ rating, responseLatencyMs: 10_000 })).toBe(rating);
    }
  });

  test("a distraction-length delay (>60s) is ignored, not treated as hesitation", () => {
    expect(effectiveGrade({ rating: "good", responseLatencyMs: 70_000 })).toBe("good");
  });

  test("a hesitant Good produces a strictly shorter interval than a confident Good", () => {
    const prev = firstGood();
    const confident = reviewCard(prev, effectiveGrade({ rating: "good", responseLatencyMs: 1000 }), 3, now, params);
    const hesitant = reviewCard(prev, effectiveGrade({ rating: "good", responseLatencyMs: 6000 }), 3, now, params);
    expect(hesitant.intervalDays).toBeLessThan(confident.intervalDays);
  });
});
