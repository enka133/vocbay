import { describe, expect, test } from "bun:test";
import { normalizeArabicForKey } from "../src/arabic/normalize";
import { parseVerbDisplayAndPreposition } from "../src/ingestion/verbPreposition";

const fixtureLexemes = [
  {
    chapterNumber: 1,
    type: "verb",
    rawPast: "نَظَرَ (إِلَى)",
    translation: "To look",
  },
  {
    chapterNumber: 2,
    type: "noun",
    displayText: "عَمّ",
    plural: "أَعْمَامٌ",
    translation: "Paternal uncle",
    interferenceGroup: "paternal-family-pair",
  },
  {
    chapterNumber: 2,
    type: "noun",
    displayText: "عَمَّةٌ",
    plural: "عَمَّاتٌ",
    translation: "Paternal aunt",
    interferenceGroup: "paternal-family-pair",
  },
  {
    chapterNumber: 3,
    type: "noun",
    displayText: "حَيّ",
    plural: "أَحْيَاءُ",
    translation: "Area, district",
  },
  {
    chapterNumber: 5,
    type: "noun",
    displayText: "طَعَامٌ",
    plural: "أَطْعِمَةٌ",
    translation: "Food",
  },
] as const;

describe("Bayna Yadayk ingestion fixtures", () => {
  test("covers Chapter 1 verb preposition extraction", () => {
    const verb = fixtureLexemes[0];
    const parsed = parseVerbDisplayAndPreposition(verb.rawPast);

    expect(parsed.displayText).toBe("نَظَرَ");
    expect(parsed.requiredPreposition).toBe("إِلَى");
  });

  test("covers Chapter 2 semantic interference pairs", () => {
    const familyPair = fixtureLexemes.filter(
      (lexeme) => "interferenceGroup" in lexeme && lexeme.interferenceGroup === "paternal-family-pair",
    );

    expect(familyPair.map((lexeme) => lexeme.translation)).toEqual([
      "Paternal uncle",
      "Paternal aunt",
    ]);
  });

  test("covers Chapter 3 contextual district noun", () => {
    const district = fixtureLexemes.find((lexeme) => lexeme.translation === "Area, district");

    expect(district?.displayText).toBe("حَيّ");
    expect(normalizeArabicForKey(district?.displayText ?? "")).toBe("حي");
  });

  test("covers Chapter 5 food and drink sprint vocabulary", () => {
    const food = fixtureLexemes.find((lexeme) => lexeme.translation === "Food");

    expect(food?.chapterNumber).toBe(5);
    expect(food?.plural).toBe("أَطْعِمَةٌ");
  });
});
