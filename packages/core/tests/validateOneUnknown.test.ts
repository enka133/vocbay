import { describe, expect, test } from "bun:test";
import { validateOneUnknown } from "../src/ai/validateOneUnknown";

const lexicon = [
  { displayText: "أَسْكُنُ", chapterNumber: 3 },
  { displayText: "حَيُّ", chapterNumber: 3 },
  { displayText: "الْجَامِعَةِ", chapterNumber: 3 },
  { displayText: "شَقَّةٍ", chapterNumber: 3 },
  { displayText: "جَمِيلَةٍ", chapterNumber: 3 },
  { displayText: "طَعَامٌ", chapterNumber: 5 },
];

describe("one unknown AI validator", () => {
  test("accepts a chapter-bounded sentence with only the target as unknown", () => {
    const result = validateOneUnknown({
      sentence: "أَسْكُنُ فِي حَيِّ الْجَامِعَةِ",
      target: { displayText: "حَيُّ", chapterNumber: 3 },
      unlockedChapters: [1, 2, 3],
      lexicon,
    });

    expect(result.ok).toBe(true);
  });

  test("rejects content words from locked chapters", () => {
    const result = validateOneUnknown({
      sentence: "أَسْكُنُ فِي حَيِّ الْجَامِعَةِ مَعَ طَعَامٍ",
      target: { displayText: "حَيُّ", chapterNumber: 3 },
      unlockedChapters: [1, 2, 3],
      lexicon,
      approvedFunctionWords: ["مَعَ"],
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reasons).toContainEqual({
        code: "LOCKED_CHAPTER_WORD",
        word: "طَعَامٍ",
        chapterNumber: 5,
      });
    }
  });

  test("rejects sentences that omit the target", () => {
    const result = validateOneUnknown({
      sentence: "أَسْكُنُ فِي الْجَامِعَةِ",
      target: { displayText: "حَيُّ", chapterNumber: 3 },
      unlockedChapters: [1, 2, 3],
      lexicon,
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reasons.some((reason) => reason.code === "MISSING_TARGET")).toBe(true);
    }
  });
});
