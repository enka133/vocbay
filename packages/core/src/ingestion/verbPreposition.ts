import { normalizeArabicForKey, stripTatweelAndZeroWidth } from "../arabic/normalize";

const PARENTHETICAL_PATTERN = /[\(\[\{]\s*([^\)\]\}]+?)\s*[\)\]\}]/u;
const REVERSED_PARENTHETICAL_PATTERN = /[\)\]\}]\s*([^\(\[\{]+?)\s*[\(\[\{]/u;
const STANDALONE_TRAILING_HARAKAT_PATTERN = /\s+[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]+$/u;

export interface ParsedVerbDisplay {
  displayText: string;
  normalizedKey: string;
  requiredPreposition: string | null;
}

export function parseVerbDisplayAndPreposition(rawPastVerb: string): ParsedVerbDisplay {
  const cleaned = stripTatweelAndZeroWidth(rawPastVerb).replace(/\s+/gu, " ").trim();
  const parentheticalMatch =
    cleaned.match(PARENTHETICAL_PATTERN) ?? cleaned.match(REVERSED_PARENTHETICAL_PATTERN);
  const requiredPreposition = parentheticalMatch?.[1]?.trim() ?? null;
  const withoutPreposition = parentheticalMatch
    ? cleaned.replace(parentheticalMatch[0], "")
    : cleaned;
  const displayText = withoutPreposition
    .replace(STANDALONE_TRAILING_HARAKAT_PATTERN, "")
    .replace(/\s+/gu, " ")
    .trim();

  return {
    displayText,
    normalizedKey: normalizeArabicForKey(displayText),
    requiredPreposition,
  };
}
