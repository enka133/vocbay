import { describe, expect, test } from "bun:test";
import {
  buildSourceSignal,
  createFsrsParameters,
  lockedTargetLexemes,
  selectUnlockedNewLexemes,
  type InterferenceEdgeInput,
  type SourceLexemeSignal,
} from "../src/index";

const params = createFsrsParameters();
const now = new Date("2026-05-22T08:00:00Z");

// عَمّ (uncle) is the source; عَمَّةٌ (aunt) is the interfering target locked behind it.
const uncle = "lex-amm";
const aunt = "lex-ammah";

const edge: InterferenceEdgeInput = {
  sourceLexemeId: uncle,
  targetLexemeId: aunt,
  lockedUntilRetrievability: 0.75,
  active: true,
};

function signals(entries: Array<[string, SourceLexemeSignal]>): Map<string, SourceLexemeSignal> {
  return new Map(entries);
}

describe("interference lock", () => {
  test("target is locked while the source sits below the retrievability threshold", () => {
    const locked = lockedTargetLexemes(
      [edge],
      signals([[uncle, { introduced: true, retrievability: 0.6, acuteFail: false }]]),
    );
    expect(locked.has(aunt)).toBe(true);
  });

  test("target is locked while the source has not been introduced", () => {
    const locked = lockedTargetLexemes([edge], signals([]));
    expect(locked.has(aunt)).toBe(true);
  });

  test("target unlocks once the source reaches the threshold with no acute fail", () => {
    const locked = lockedTargetLexemes(
      [edge],
      signals([[uncle, { introduced: true, retrievability: 0.8, acuteFail: false }]]),
    );
    expect(locked.has(aunt)).toBe(false);
  });

  test("target stays locked when the source has an acute fail even at high retrievability", () => {
    const locked = lockedTargetLexemes(
      [edge],
      signals([[uncle, { introduced: true, retrievability: 0.95, acuteFail: true }]]),
    );
    expect(locked.has(aunt)).toBe(true);
  });

  test("a locked target is excluded from the new-card selection", () => {
    const selected = selectUnlockedNewLexemes(
      [aunt, "lex-unrelated"],
      [edge],
      signals([[uncle, { introduced: true, retrievability: 0.5, acuteFail: false }]]),
    );
    expect(selected).toEqual(["lex-unrelated"]);
  });

  test("inactive edges are ignored", () => {
    const locked = lockedTargetLexemes(
      [{ ...edge, active: false }],
      signals([[uncle, { introduced: true, retrievability: 0.1, acuteFail: false }]]),
    );
    expect(locked.has(aunt)).toBe(false);
  });

  test("threshold comes from the edge, not a hardcoded 0.75", () => {
    const strictEdge: InterferenceEdgeInput = { ...edge, lockedUntilRetrievability: 0.9 };
    const locked = lockedTargetLexemes(
      [strictEdge],
      signals([[uncle, { introduced: true, retrievability: 0.8, acuteFail: false }]]),
    );
    // At the default 0.75 threshold this source (0.8) would unlock; the stricter edge keeps it locked.
    expect(locked.has(aunt)).toBe(true);
  });

  test("transitive chains lock independently (A->B->C)", () => {
    const a = "lex-a";
    const b = "lex-b";
    const c = "lex-c";
    const edges: InterferenceEdgeInput[] = [
      { sourceLexemeId: a, targetLexemeId: b, lockedUntilRetrievability: 0.75, active: true },
      { sourceLexemeId: b, targetLexemeId: c, lockedUntilRetrievability: 0.75, active: true },
    ];
    // A solid unlocks B; C stays locked because B has not been introduced yet.
    const locked = lockedTargetLexemes(
      edges,
      signals([[a, { introduced: true, retrievability: 0.9, acuteFail: false }]]),
    );
    expect(locked.has(b)).toBe(false);
    expect(locked.has(c)).toBe(true);
  });

  test("bidirectional edges resolve deterministically without deadlock crash", () => {
    const x = "lex-x";
    const y = "lex-y";
    const edges: InterferenceEdgeInput[] = [
      { sourceLexemeId: x, targetLexemeId: y, lockedUntilRetrievability: 0.75, active: true },
      { sourceLexemeId: y, targetLexemeId: x, lockedUntilRetrievability: 0.75, active: true },
    ];
    // Neither introduced: both locked (a bidirectional pair needs one side seeded to ever open).
    const bothNew = lockedTargetLexemes(edges, signals([]));
    expect(bothNew.has(x)).toBe(true);
    expect(bothNew.has(y)).toBe(true);
    // Seed x solid: y opens, x stays locked behind the not-yet-solid y. Deterministic, no loop.
    const xSolid = lockedTargetLexemes(
      edges,
      signals([[x, { introduced: true, retrievability: 0.9, acuteFail: false }]]),
    );
    expect(xSolid.has(y)).toBe(false);
    expect(xSolid.has(x)).toBe(true);
  });

  test("buildSourceSignal derives introduced/retrievability/acuteFail from card memory", () => {
    const fresh = buildSourceSignal(
      [{ stability: 200, lastReviewedAt: new Date(now.getTime() - 86_400_000), lastRating: "good" }],
      now,
      params,
    );
    expect(fresh.introduced).toBe(true);
    expect(fresh.retrievability).toBeGreaterThan(0.75);
    expect(fresh.acuteFail).toBe(false);

    const failed = buildSourceSignal(
      [{ stability: 200, lastReviewedAt: new Date(now.getTime() - 86_400_000), lastRating: "again" }],
      now,
      params,
    );
    expect(failed.acuteFail).toBe(true);

    const unstudied = buildSourceSignal([{ stability: 0.1, lastReviewedAt: null }], now, params);
    expect(unstudied.introduced).toBe(false);
  });
});
