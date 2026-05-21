const HARAKAT_PATTERN =
  /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/gu;
const TATWEEL_AND_ZERO_WIDTH_PATTERN =
  /[\u0640\u061C\u200B-\u200F\u202A-\u202E\u2060\u2066-\u2069\uFEFF]/gu;
const ARABIC_WORD_PATTERN =
  /[\p{Script=Arabic}\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u0640]+/gu;

export interface ArabicToken {
  displayText: string;
  normalizedKey: string;
  index: number;
}

export function stripTatweelAndZeroWidth(value: string): string {
  return value.replace(TATWEEL_AND_ZERO_WIDTH_PATTERN, "");
}

export function stripHarakatForKey(value: string): string {
  return value.replace(HARAKAT_PATTERN, "");
}

export function normalizeArabicForKey(value: string): string {
  return stripHarakatForKey(stripTatweelAndZeroWidth(value).normalize("NFKC"))
    .replace(/[أإآٱ]/gu, "ا")
    .replace(/ى/gu, "ي")
    .replace(/\s+/gu, " ")
    .trim();
}

export function tokenizeArabicWords(value: string): ArabicToken[] {
  const cleaned = stripTatweelAndZeroWidth(value);
  const matches = Array.from(cleaned.matchAll(ARABIC_WORD_PATTERN));

  return matches
    .map((match) => {
      const displayText = match[0];
      const normalizedKey = normalizeArabicForKey(displayText);

      return {
        displayText,
        normalizedKey,
        index: match.index ?? 0,
      };
    })
    .filter((token) => token.normalizedKey.length > 0);
}
