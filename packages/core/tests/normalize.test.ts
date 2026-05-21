import { describe, expect, test } from "bun:test";
import {
  normalizeArabicForKey,
  stripHarakatForKey,
  stripTatweelAndZeroWidth,
  tokenizeArabicWords,
} from "../src/arabic/normalize";

describe("Arabic normalization", () => {
  test("keeps display text separate from normalized keys", () => {
    const displayText = "حَيِّ";

    expect(displayText).toBe("حَيِّ");
    expect(stripHarakatForKey(displayText)).toBe("حي");
    expect(normalizeArabicForKey(displayText)).toBe("حي");
  });

  test("strips tatweel, zero-width, bidi marks, and harakat for keys", () => {
    const noisy = "\u200Fإِلَــى\u200B";

    expect(stripTatweelAndZeroWidth(noisy)).toBe("إِلَى");
    expect(normalizeArabicForKey(noisy)).toBe("الي");
  });

  test("tokenizes Arabic words with normalized keys", () => {
    const tokens = tokenizeArabicWords("أَسْكُنُ فِي حَيِّ الْجَامِعَةِ");

    expect(tokens.map((token) => token.displayText)).toEqual([
      "أَسْكُنُ",
      "فِي",
      "حَيِّ",
      "الْجَامِعَةِ",
    ]);
    expect(tokens.map((token) => token.normalizedKey)).toEqual([
      "اسكن",
      "في",
      "حي",
      "الجامعة",
    ]);
  });
});
