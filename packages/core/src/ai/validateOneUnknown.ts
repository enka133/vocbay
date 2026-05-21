import { normalizeArabicForKey, tokenizeArabicWords } from "../arabic/normalize";

export const oneUnknownRejectionCodes = [
  "LOCKED_CHAPTER_WORD",
  "MULTIPLE_UNKNOWNS",
  "MISSING_TARGET",
  "UNPARSEABLE_ARABIC",
] as const;

export type OneUnknownRejectionCode = (typeof oneUnknownRejectionCodes)[number];

export interface LexiconEntry {
  displayText: string;
  normalizedKey?: string;
  chapterNumber: number;
  isContentWord?: boolean;
}

export interface ValidateOneUnknownInput {
  sentence: string;
  target: LexiconEntry;
  unlockedChapters: number[];
  lexicon: LexiconEntry[];
  approvedFunctionWords?: string[];
}

export interface ValidationToken {
  displayText: string;
  normalizedKey: string;
  chapterNumbers: number[];
  isTarget: boolean;
  isFunctionWord: boolean;
}

export interface ValidationRejection {
  code: OneUnknownRejectionCode;
  word?: string;
  chapterNumber?: number;
  details?: string;
}

export type OneUnknownValidationResult =
  | {
      ok: true;
      tokens: ValidationToken[];
      targetKey: string;
    }
  | {
      ok: false;
      tokens: ValidationToken[];
      targetKey: string;
      reasons: ValidationRejection[];
    };

const DEFAULT_FUNCTION_WORDS = [
  "أنا",
  "أنت",
  "أنتِ",
  "هو",
  "هي",
  "نحن",
  "في",
  "من",
  "إلى",
  "على",
  "عن",
  "مع",
  "و",
  "يا",
  "لا",
  "هل",
  "هذا",
  "هذه",
  "ذلك",
  "تلك",
  "ال",
];

export function validateOneUnknown(input: ValidateOneUnknownInput): OneUnknownValidationResult {
  const targetKey = normalizeEntryKey(input.target);
  const sentenceTokens = tokenizeArabicWords(input.sentence);
  const functionWordKeys = new Set(
    [...DEFAULT_FUNCTION_WORDS, ...(input.approvedFunctionWords ?? [])].map(normalizeArabicForKey),
  );
  const unlockedChapterSet = new Set(input.unlockedChapters);
  const lexiconByKey = buildLexiconMap(input.lexicon);

  if (sentenceTokens.length === 0) {
    return {
      ok: false,
      tokens: [],
      targetKey,
      reasons: [{ code: "UNPARSEABLE_ARABIC", details: "No Arabic tokens were found." }],
    };
  }

  const validationTokens: ValidationToken[] = [];
  const reasons: ValidationRejection[] = [];
  const extraUnknownWords = new Set<string>();
  let targetSeen = false;

  for (const token of sentenceTokens) {
    const isTarget = token.normalizedKey === targetKey;
    const isFunctionWord = functionWordKeys.has(token.normalizedKey);
    const lexiconMatches = lexiconByKey.get(token.normalizedKey) ?? [];
    const contentMatches = lexiconMatches.filter((entry) => entry.isContentWord !== false);
    const unlockedMatches = contentMatches.filter((entry) =>
      unlockedChapterSet.has(entry.chapterNumber),
    );
    const lockedMatches = contentMatches.filter(
      (entry) => !unlockedChapterSet.has(entry.chapterNumber),
    );

    if (isTarget) {
      targetSeen = true;
    }

    validationTokens.push({
      displayText: token.displayText,
      normalizedKey: token.normalizedKey,
      chapterNumbers: contentMatches.map((entry) => entry.chapterNumber),
      isTarget,
      isFunctionWord,
    });

    if (isTarget || isFunctionWord || unlockedMatches.length > 0) {
      continue;
    }

    if (lockedMatches.length > 0) {
      for (const lockedMatch of lockedMatches) {
        reasons.push({
          code: "LOCKED_CHAPTER_WORD",
          word: token.displayText,
          chapterNumber: lockedMatch.chapterNumber,
        });
      }
      continue;
    }

    extraUnknownWords.add(token.displayText);
  }

  if (!targetSeen) {
    reasons.push({
      code: "MISSING_TARGET",
      word: input.target.displayText,
    });
  }

  for (const word of extraUnknownWords) {
    reasons.push({
      code: "MULTIPLE_UNKNOWNS",
      word,
    });
  }

  if (reasons.length > 0) {
    return {
      ok: false,
      tokens: validationTokens,
      targetKey,
      reasons,
    };
  }

  return {
    ok: true,
    tokens: validationTokens,
    targetKey,
  };
}

function normalizeEntryKey(entry: LexiconEntry): string {
  return entry.normalizedKey ?? normalizeArabicForKey(entry.displayText);
}

function buildLexiconMap(entries: LexiconEntry[]): Map<string, LexiconEntry[]> {
  const map = new Map<string, LexiconEntry[]>();

  for (const entry of entries) {
    const key = normalizeEntryKey(entry);
    const current = map.get(key) ?? [];
    current.push(entry);
    map.set(key, current);
  }

  return map;
}
