import { describe, expect, test } from "bun:test";
import { parseVerbDisplayAndPreposition } from "../src/ingestion/verbPreposition";

describe("verb preposition parsing", () => {
  test("isolates required preposition from past-tense verb display text", () => {
    const parsed = parseVerbDisplayAndPreposition("نَظَرَ (إِلَى)");

    expect(parsed.displayText).toBe("نَظَرَ");
    expect(parsed.requiredPreposition).toBe("إِلَى");
    expect(parsed.normalizedKey).toBe("نظر");
  });

  test("removes tatweel from extracted prepositions", () => {
    const parsed = parseVerbDisplayAndPreposition("مَرَّ (بـــ)");

    expect(parsed.displayText).toBe("مَرَّ");
    expect(parsed.requiredPreposition).toBe("ب");
  });
});
