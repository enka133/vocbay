import { describe, expect, test } from "bun:test";
import { lexemes } from "../src/db/schema";

describe("schema", () => {
  test("lexemes include ism al-masdar and required preposition columns", () => {
    expect(lexemes.isIsmAlMasdar.name).toBe("is_ism_al_masdar");
    expect(lexemes.requiredPreposition.name).toBe("required_preposition");
  });
});
