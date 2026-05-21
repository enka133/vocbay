import { writeFileSync } from "node:fs";
import { normalizeArabicForKey } from "../packages/core/src/arabic/normalize";

type SectionKind = "Verbs" | "Nouns";
type CardKind = "verb" | "noun";

interface VocabularyCard {
  id: string;
  chapter: number;
  kind: CardKind;
  prompt: string;
  arabic: string;
  target: string;
  answer: string;
  detail: string;
  translation?: string;
  singular?: string;
  plural?: string;
  forms?: {
    past?: string;
    present?: string;
    command?: string;
    masdar?: string;
  };
  requiredPreposition?: string;
}

interface ParserState {
  chapter: number;
  section: SectionKind | null;
}

const DEFAULT_SOURCE_TEXT = "/tmp/vocbay-pdf/pymupdf.txt";
const OUTPUT_PATH = new URL("../apps/web/src/vocabulary.ts", import.meta.url);
const SECTION_RE = /^Chapter\s+(One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve|Thirteen|Fourteen|Fifteen|Sixteen)\s+-\s+(Verbs|Nouns)\s*$/u;
const ARABIC_LETTER_RE = /[\u0621-\u064A\u066E-\u06D3]/u;
const ARABIC_MARKS_RE = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/gu;
const LEADING_ARABIC_MARKS_RE = /^((?:[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]\s*)+)(.+)$/u;
const ZERO_WIDTH_AND_BIDI_RE = /[\u061C\u200B-\u200F\u202A-\u202E\u2060\u2066-\u2069\uFEFF]/gu;

const chapterNumbers: Record<string, number> = {
  One: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Eleven: 11,
  Twelve: 12,
  Thirteen: 13,
  Fourteen: 14,
  Fifteen: 15,
  Sixteen: 16,
};

const sourcePath = process.env.BAYNA_TEXT_PATH ?? DEFAULT_SOURCE_TEXT;
const sourceText = await Bun.file(sourcePath).text();
const cards = dedupeCards(parseBaynaText(sourceText));

writeFileSync(OUTPUT_PATH, renderVocabularyModule(cards));

const chapters = new Set(cards.map((card) => card.chapter));
const verbs = cards.filter((card) => card.kind === "verb").length;
const nouns = cards.filter((card) => card.kind === "noun").length;

console.log(`Imported ${cards.length} cards from ${chapters.size} chapters (${verbs} verbs, ${nouns} nouns).`);
console.log(`Wrote ${OUTPUT_PATH.pathname}`);

function parseBaynaText(text: string): VocabularyCard[] {
  const lines = text.split(/\r?\n/u);
  const cards: VocabularyCard[] = [];
  const state: ParserState = { chapter: 0, section: null };

  let index = 0;
  while (index < lines.length) {
    const rawLine = lines[index] ?? "";
    const line = cleanPdfLine(rawLine);
    const section = parseSectionHeader(line);

    if (section) {
      state.chapter = section.chapter;
      state.section = section.kind;
      index += 1;
      continue;
    }

    if (!state.section || isSkippableLine(line)) {
      index += 1;
      continue;
    }

    if (state.section === "Verbs") {
      if (isEnglishLine(rawLine)) {
        const result = parseVerbEntry(lines, index, state.chapter);
        if (result.card) {
          cards.push(result.card);
        }
        index = result.nextIndex;
        continue;
      }
    }

    if (state.section === "Nouns") {
      if (isEnglishLine(rawLine)) {
        const result = parseNounEntry(lines, index, state.chapter);
        cards.push(...result.cards);
        index = result.nextIndex;
        continue;
      }
    }

    index += 1;
  }

  return cards;
}

function parseVerbEntry(lines: string[], startIndex: number, chapter: number): { card?: VocabularyCard; nextIndex: number } {
  let index = startIndex;
  const translationLines: string[] = [];

  while (index < lines.length) {
    const rawLine = lines[index] ?? "";
    const line = cleanPdfLine(rawLine);

    if (parseSectionHeader(line)) {
      break;
    }

    if (isSkippableLine(line)) {
      index += 1;
      if (translationLines.length > 0) {
        continue;
      }
      continue;
    }

    if (!isEnglishLine(rawLine)) {
      break;
    }

    translationLines.push(cleanEnglishLine(rawLine));
    index += 1;
  }

  const fields: string[] = [];
  while (index < lines.length) {
    const rawLine = lines[index] ?? "";
    const line = cleanPdfLine(rawLine);

    if (parseSectionHeader(line) || isEnglishLine(rawLine)) {
      break;
    }

    index += 1;

    if (isSkippableLine(line)) {
      continue;
    }

    if (hasArabicLetter(line) || line.includes("(")) {
      fields.push(line);
    }
  }

  const forms = parseVerbForms(fields);
  const answer = joinEnglishLines(translationLines);

  if (!answer || !forms.present || !forms.past) {
    return { nextIndex: index };
  }

  const target = forms.present;
  const detailParts = [`Past: ${forms.past}`];
  if (forms.masdar) {
    detailParts.push(`Masdar: ${forms.masdar}`);
  }
  if (forms.requiredPreposition) {
    detailParts.push(`Preposition: ${forms.requiredPreposition}`);
  }

  return {
    card: {
      id: buildCardId(chapter, "verb", target, answer),
      chapter,
      kind: "verb",
      prompt: "What does this verb mean?",
      arabic: target,
      target,
      answer,
      detail: detailParts.join(" · "),
      forms: {
        past: forms.past,
        present: forms.present,
        command: forms.command,
        masdar: forms.masdar,
      },
      requiredPreposition: forms.requiredPreposition,
    },
    nextIndex: index,
  };
}

function parseNounEntry(lines: string[], startIndex: number, chapter: number): { cards: VocabularyCard[]; nextIndex: number } {
  let index = startIndex;
  const leftTranslation: string[] = [];

  while (index < lines.length) {
    const rawLine = lines[index] ?? "";
    const line = cleanPdfLine(rawLine);

    if (parseSectionHeader(line)) {
      break;
    }

    if (isSkippableLine(line)) {
      index += 1;
      if (leftTranslation.length > 0) {
        continue;
      }
      continue;
    }

    if (!isEnglishLine(rawLine)) {
      break;
    }

    leftTranslation.push(cleanEnglishLine(rawLine));
    index += 1;
  }

  const fields: string[] = [];
  while (index < lines.length) {
    const rawLine = lines[index] ?? "";
    const line = cleanPdfLine(rawLine);

    if (parseSectionHeader(line) || isEnglishLine(rawLine)) {
      break;
    }

    index += 1;

    if (isSkippableLine(line)) {
      continue;
    }

    if (hasArabicLetter(line)) {
      fields.push(line);
    }
  }

  const rightTranslation: string[] = [];
  while (index < lines.length) {
    const rawLine = lines[index] ?? "";
    const line = cleanPdfLine(rawLine);

    if (parseSectionHeader(line)) {
      break;
    }

    if (isSkippableLine(line)) {
      index += 1;
      if (rightTranslation.length > 0) {
        break;
      }
      continue;
    }

    if (!isEnglishLine(rawLine)) {
      break;
    }

    if (
      rightTranslation.length > 0 &&
      nextMeaningfulLineIsArabic(lines, index + 1) &&
      !shouldContinueTranslationLine(rightTranslation.at(-1) ?? "")
    ) {
      break;
    }

    rightTranslation.push(cleanEnglishLine(rawLine));
    index += 1;
  }

  const nounForms = parseNounForms(fields);
  const cards: VocabularyCard[] = [];
  const leftAnswer = joinEnglishLines(leftTranslation);
  const rightAnswer = joinEnglishLines(rightTranslation);

  if (leftAnswer && nounForms.leftSingular) {
    cards.push(buildNounCard(chapter, nounForms.leftSingular, leftAnswer, nounForms.leftPlural));
  }

  if (rightAnswer && nounForms.rightSingular) {
    cards.push(buildNounCard(chapter, nounForms.rightSingular, rightAnswer, nounForms.rightPlural));
  }

  return { cards, nextIndex: index };
}

function parseVerbForms(fields: string[]) {
  let requiredPreposition: string | undefined;
  const contentFields: string[] = [];

  for (const field of fields) {
    const embeddedPreposition = extractPreposition(field);
    if (embeddedPreposition) {
      requiredPreposition = embeddedPreposition;
    }

    const withoutPreposition = removeParentheticalContent(field);
    const cleanedCell = cleanArabicCell(withoutPreposition);

    if (isPrepositionOnly(cleanedCell)) {
      requiredPreposition = requiredPreposition ?? normalizePreposition(cleanedCell);
      continue;
    }

    if (cleanedCell) {
      contentFields.push(withoutPreposition);
    }
  }

  let cleanedChunks = contentFields.map(cleanArabicCell).filter(Boolean);

  if (cleanedChunks.length < 4) {
    cleanedChunks = contentFields.flatMap(splitCombinedArabicCells).filter(Boolean);
  }

  return {
    masdar: cleanedChunks.slice(0, -3).join(" / ") || undefined,
    command: cleanedChunks.at(-3),
    present: cleanedChunks.at(-2),
    past: cleanedChunks.at(-1),
    requiredPreposition,
  };
}

function parseNounForms(fields: string[]) {
  const chunks = fields.map(cleanArabicCell).filter(Boolean);
  const slashIndexes = fields
    .map((field, index) => (field.includes("/") ? index : -1))
    .filter((index) => index >= 0);

  if (chunks.length === 5 && slashIndexes.includes(0)) {
    return {
      leftPlural: chunks.slice(0, 2).join(" / "),
      leftSingular: chunks[2],
      rightPlural: chunks[3],
      rightSingular: chunks[4],
    };
  }

  if (chunks.length === 5 && slashIndexes.some((index) => index >= 2)) {
    return {
      leftPlural: chunks[0],
      leftSingular: chunks[1],
      rightPlural: chunks.slice(2, 4).join(" / "),
      rightSingular: chunks[4],
    };
  }

  return {
    leftPlural: chunks[0],
    leftSingular: chunks[1],
    rightPlural: chunks.slice(2, -1).join(" / ") || undefined,
    rightSingular: chunks.at(-1),
  };
}

function buildNounCard(chapter: number, singular: string, answer: string, plural?: string): VocabularyCard {
  return {
    id: buildCardId(chapter, "noun", singular, answer),
    chapter,
    kind: "noun",
    prompt: "What does this word mean?",
    arabic: singular,
    target: singular,
    answer,
    detail: plural ? `Plural: ${plural}` : "Singular form from the textbook list.",
    singular,
    plural,
  };
}

function parseSectionHeader(line: string): { chapter: number; kind: SectionKind } | null {
  const match = line.match(SECTION_RE);
  if (!match) {
    return null;
  }

  return {
    chapter: chapterNumbers[match[1]!]!,
    kind: match[2] as SectionKind,
  };
}

function cleanPdfLine(value: string): string {
  return value.replace(ZERO_WIDTH_AND_BIDI_RE, "").replace(/ـ/gu, "").normalize("NFC").replace(/\s+/gu, " ").trim();
}

function extractLeadingArabicMarks(value: string): { marks: string; rest: string } {
  const match = value.match(LEADING_ARABIC_MARKS_RE);
  if (!match) {
    return { marks: "", rest: value };
  }

  let marks = match[1]!.replace(/\s+/gu, "");
  const rest = match[2]!.trim();

  if (marks.length > 1 && marks.startsWith("\u064C")) {
    marks = marks.slice(1);
  }

  return { marks, rest };
}

function appendMarksToFirstToken(value: string, marks: string): string {
  const parts = value.split(/(\s+)/u);
  parts[0] = appendMarksBeforeTrailingSlash(parts[0] ?? "", marks);
  return parts.join("");
}

function appendMarksBeforeTrailingSlash(value: string, marks: string): string {
  const match = value.match(/^(.*?)(\/+)$/u);
  if (!match) {
    return `${value}${marks}`;
  }

  return `${match[1]}${marks}${match[2]}`;
}

function cleanEnglishLine(value: string): string {
  return value
    .replace(ZERO_WIDTH_AND_BIDI_RE, "")
    .replace(ARABIC_MARKS_RE, " ")
    .replace(/\)([^()]+)\(/gu, "($1)")
    .replace(/\s+/gu, " ")
    .trim();
}

function joinEnglishLines(lines: string[]): string {
  return lines.join(" ").replace(/\s+/gu, " ").replace(/\s+([,.;:])/gu, "$1").trim();
}

function shouldContinueTranslationLine(value: string): boolean {
  return /[,;:/(-]\s*$/u.test(value.trim());
}

function nextMeaningfulLineIsArabic(lines: string[], startIndex: number): boolean {
  for (let index = startIndex; index < lines.length; index += 1) {
    const line = cleanPdfLine(lines[index] ?? "");

    if (parseSectionHeader(line)) {
      return false;
    }

    if (isSkippableLine(line)) {
      continue;
    }

    return hasArabicLetter(line);
  }

  return false;
}

function splitCombinedArabicCells(value: string): string[] {
  const { marks, rest } = extractLeadingArabicMarks(stripToArabicParts(value));
  const tokens = rest.split(/\s+/u).map(cleanArabicToken).filter(Boolean);
  const mergedTokens = mergeMarkOnlyTokens(tokens);

  if (marks && mergedTokens[0]) {
    mergedTokens[0] = appendMarksBeforeTrailingSlash(mergedTokens[0], marks);
  }

  if (mergedTokens.length <= 3) {
    return mergedTokens;
  }

  return [mergedTokens[0]!, mergedTokens[1]!, mergedTokens.slice(2).join("")];
}

function cleanArabicCell(value: string): string {
  const { marks, rest } = extractLeadingArabicMarks(stripToArabicParts(value));
  const merged = marks && marks !== "\u064C" ? mergeArabicCellPieces(rest).replace(/\u064C$/u, "") : mergeArabicCellPieces(rest);
  return marks ? appendMarksBeforeTrailingSlash(merged, marks) : merged;
}

function stripToArabicParts(value: string): string {
  return value
    .replace(ZERO_WIDTH_AND_BIDI_RE, "")
    .replace(/ـ/gu, "")
    .replace(/[()]/gu, " ")
    .replace(/[^\p{Script=Arabic}\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED/\s]/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
}

function mergeArabicCellPieces(value: string): string {
  return mergeMarkOnlyTokens(value.split(/\s+/u).map(cleanArabicToken).filter(Boolean)).join("");
}

function mergeMarkOnlyTokens(tokens: string[]): string[] {
  const merged: string[] = [];

  for (const token of tokens) {
    if (!token) {
      continue;
    }

    const previous = merged.at(-1);
    if (previous && !hasArabicLetter(token)) {
      merged[merged.length - 1] = `${previous}${token}`;
      continue;
    }

    if (previous && token.startsWith("/") && !previous.endsWith("/")) {
      merged[merged.length - 1] = `${previous}${token}`;
      continue;
    }

    merged.push(token);
  }

  return merged;
}

function cleanArabicToken(value: string): string {
  return value
    .replace(ZERO_WIDTH_AND_BIDI_RE, "")
    .replace(/ـ/gu, "")
    .replace(/[^\p{Script=Arabic}\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED/]/gu, "")
    .replace(/^\/+|\/+$/gu, "")
    .trim();
}

function hasArabicLetter(value: string): boolean {
  return ARABIC_LETTER_RE.test(value);
}

function isEnglishLine(value: string): boolean {
  return /[A-Za-z]/u.test(value);
}

function isSkippableLine(line: string): boolean {
  if (!line || /^\d+$/u.test(line)) {
    return true;
  }

  const normalized = normalizeArabicForKey(line).replace(/\s+/gu, "");
  return ["ترجمة", "مصدر", "امر", "مضارع", "ماض", "جمع", "مفرد", "مفردترجمة"].includes(normalized);
}

function removeParentheticalContent(value: string): string {
  return value.replace(/\([^)]*\)?/gu, " ").replace(/[()]/gu, " ").replace(/إِلَى|إلى|الى/gu, " ");
}

function extractPreposition(value: string): string | undefined {
  const normalized = normalizeArabicForKey(value).replace(/\s+/gu, "");
  if (normalized.includes("الي") || normalized.includes("الى")) {
    return "إِلَى";
  }

  const match = value.match(/\(([^)]*)\)/u);
  if (!match) {
    return undefined;
  }

  return normalizePreposition(match[1] ?? "");
}

function isPrepositionOnly(value: string): boolean {
  const normalized = normalizeArabicForKey(value).replace(/\s+/gu, "");
  return normalized === "الي" || normalized === "الى" || normalized === "ب";
}

function normalizePreposition(value: string): string | undefined {
  const normalized = normalizeArabicForKey(value).replace(/\s+/gu, "");

  if (normalized === "الي" || normalized === "الى") {
    return "إِلَى";
  }

  if (normalized === "ب") {
    return "بـ";
  }

  const cleaned = cleanArabicToken(value);
  return cleaned || undefined;
}

function buildCardId(chapter: number, kind: CardKind, target: string, answer: string): string {
  const key = normalizeArabicForKey(target)
    .replace(/[^\p{Script=Arabic}\d]+/gu, "-")
    .replace(/^-+|-+$/gu, "");
  const english = answer
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-+|-+$/gu, "")
    .slice(0, 36);

  return `ch${chapter}-${kind}-${key}-${english}`;
}

function dedupeCards(cards: VocabularyCard[]): VocabularyCard[] {
  const seen = new Set<string>();
  const deduped: VocabularyCard[] = [];

  for (const card of cards) {
    const key = [card.chapter, card.kind, normalizeArabicForKey(card.target), card.answer.toLowerCase()].join(":");
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    deduped.push(card);
  }

  return deduped;
}

function renderVocabularyModule(cards: VocabularyCard[]): string {
  const renderedCards = JSON.stringify(cards, null, 2)
    .replace(/"kind": "verb"/gu, '"kind": "verb"')
    .replace(/"kind": "noun"/gu, '"kind": "noun"');

  return `export interface VocabularyCard {
  id: string;
  chapter: number;
  kind: "verb" | "noun";
  prompt: string;
  arabic: string;
  target: string;
  answer: string;
  detail: string;
  translation?: string;
  singular?: string;
  plural?: string;
  forms?: {
    past?: string;
    present?: string;
    command?: string;
    masdar?: string;
  };
  requiredPreposition?: string;
}

export const vocabularyCards: VocabularyCard[] = ${renderedCards};
`;
}
