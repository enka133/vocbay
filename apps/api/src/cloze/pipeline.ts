import { validateOneUnknown } from "@vocbay/core";
import type {
  GeneratedCardDraft,
  ValidationRejection,
  ValidationToken,
  LexiconEntry,
} from "@vocbay/core";
import type { ClozeCandidate, ClozeRequest, LlmClozeProvider } from "./provider";

const DEFAULT_MAX_ATTEMPTS = 6;
const DEFAULT_DESIRED_COUNT = 3;
const INVALID_PROVIDER_CANDIDATE = "INVALID_PROVIDER_CANDIDATE: missing sentence";

type PendingDraft = Pick<
  GeneratedCardDraft,
  | "id"
  | "lexemeId"
  | "cardType"
  | "sentence"
  | "translation"
  | "explanation"
  | "unknownWords"
  | "rejectionReasons"
  | "status"
  | "model"
  | "createdAt"
  | "reviewedAt"
>;

export interface GenerateValidatedClozesParams {
  target: LexiconEntry;
  unlockedChapters: number[];
  lexicon: LexiconEntry[];
  approvedFunctionWords?: string[];
  maxAttempts?: number;
  desiredCount?: number;
  model?: string;
}

export interface RejectedClozeAttempt {
  attemptNumber: number;
  sentence: string | null;
  translation: string | null;
  explanation: string | null;
  rejectionReasons: string[];
  lockedWords: string[];
  triggeredRetry: boolean;
}

export interface GenerateValidatedClozesResult {
  drafts: PendingDraft[];
  rejectedAttempts: RejectedClozeAttempt[];
  shortfall: number;
  attemptsUsed: number;
}

export async function generateValidatedClozes(
  provider: LlmClozeProvider,
  params: GenerateValidatedClozesParams,
): Promise<GenerateValidatedClozesResult> {
  const desiredCount = normalizeBoundedInteger(params.desiredCount, DEFAULT_DESIRED_COUNT, "desiredCount");
  const maxAttempts = normalizeBoundedInteger(params.maxAttempts, DEFAULT_MAX_ATTEMPTS, "maxAttempts");
  const drafts: PendingDraft[] = [];
  const rejectedAttempts: RejectedClozeAttempt[] = [];
  let refinementHint: string | undefined;
  let attemptsUsed = 0;

  for (let attemptNumber = 1; attemptNumber <= maxAttempts; attemptNumber += 1) {
    if (drafts.length >= desiredCount) {
      break;
    }

    attemptsUsed = attemptNumber;

    const request: ClozeRequest = {
      target: params.target,
      unlockedChapters: params.unlockedChapters,
      lexicon: params.lexicon,
      approvedFunctionWords: params.approvedFunctionWords,
      desiredCount: desiredCount - drafts.length,
      refinementHint,
    };

    const candidates = await provider.generateClozes(request);

    if (candidates.length === 0) {
      continue;
    }

    let nextRefinementHint = refinementHint;
    let shouldRetryImmediately = false;

    for (const candidate of candidates) {
      if (drafts.length >= desiredCount) {
        break;
      }

      if (!isClozeCandidate(candidate)) {
        rejectedAttempts.push({
          attemptNumber,
          sentence: null,
          translation: null,
          explanation: null,
          rejectionReasons: [INVALID_PROVIDER_CANDIDATE],
          lockedWords: [],
          triggeredRetry: false,
        });
        continue;
      }

      const validation = validateOneUnknown({
        sentence: candidate.sentence,
        target: params.target,
        unlockedChapters: params.unlockedChapters,
        lexicon: params.lexicon,
        approvedFunctionWords: params.approvedFunctionWords,
      });

      if (validation.ok) {
        drafts.push(buildPendingDraft(candidate, validation.tokens, params.target, params.model));
        continue;
      }

      const lockedWords = collectLockedWords(validation.reasons);
      const triggeredRetry = lockedWords.length > 0;

      rejectedAttempts.push({
        attemptNumber,
        sentence: candidate.sentence,
        translation: candidate.translation ?? null,
        explanation: candidate.explanation ?? null,
        rejectionReasons: serializeRejectionReasons(validation.reasons),
        lockedWords,
        triggeredRetry,
      });

      if (triggeredRetry) {
        nextRefinementHint = buildLockedWordRefinementHint(lockedWords, params.unlockedChapters);
        shouldRetryImmediately = true;
        break;
      }
    }

    refinementHint = nextRefinementHint;

    if (shouldRetryImmediately) {
      continue;
    }
  }

  return {
    drafts,
    rejectedAttempts,
    shortfall: Math.max(desiredCount - drafts.length, 0),
    attemptsUsed,
  };
}

function normalizeBoundedInteger(
  value: number | undefined,
  fallback: number,
  fieldName: string,
): number {
  if (value === undefined) {
    return fallback;
  }

  if (!Number.isInteger(value) || value < 0) {
    throw new RangeError(`${fieldName} must be a non-negative integer`);
  }

  return value;
}

function isClozeCandidate(candidate: unknown): candidate is ClozeCandidate {
  if (!candidate || typeof candidate !== "object") {
    return false;
  }

  const sentence = Reflect.get(candidate, "sentence");
  const translation = Reflect.get(candidate, "translation");
  const explanation = Reflect.get(candidate, "explanation");

  if (typeof sentence !== "string" || sentence.trim().length === 0) {
    return false;
  }

  if (translation !== undefined && typeof translation !== "string") {
    return false;
  }

  if (explanation !== undefined && typeof explanation !== "string") {
    return false;
  }

  return true;
}

function buildPendingDraft(
  candidate: ClozeCandidate,
  tokens: ValidationToken[],
  target: LexiconEntry,
  model: string | undefined,
): PendingDraft {
  return {
    id: crypto.randomUUID(),
    lexemeId: null,
    cardType: "context_cloze",
    sentence: candidate.sentence,
    translation: candidate.translation ?? null,
    explanation: candidate.explanation ?? null,
    unknownWords: collectUnknownWords(tokens, target),
    rejectionReasons: [],
    status: "pending",
    model: model ?? null,
    createdAt: new Date().toISOString(),
    reviewedAt: null,
  };
}

function collectUnknownWords(tokens: ValidationToken[], target: LexiconEntry): string[] {
  const words = new Set<string>();

  for (const token of tokens) {
    if (token.isTarget) {
      words.add(token.displayText);
    }
  }

  if (words.size === 0) {
    words.add(target.displayText);
  }

  return [...words];
}

function collectLockedWords(reasons: ValidationRejection[]): string[] {
  const lockedWords = new Set<string>();

  for (const reason of reasons) {
    if (reason.code !== "LOCKED_CHAPTER_WORD" || !reason.word) {
      continue;
    }

    lockedWords.add(reason.word);
  }

  return [...lockedWords];
}

function serializeRejectionReasons(reasons: ValidationRejection[]): string[] {
  return reasons.map((reason) => {
    const parts: string[] = [reason.code];

    if (reason.word) {
      parts.push(`word=${reason.word}`);
    }

    if (reason.chapterNumber !== undefined) {
      parts.push(`chapter=${reason.chapterNumber}`);
    }

    if (reason.details) {
      parts.push(`details=${reason.details}`);
    }

    return parts.join(":");
  });
}

function buildLockedWordRefinementHint(
  lockedWords: string[],
  unlockedChapters: number[],
): string {
  const chapterList = unlockedChapters.join(", ");
  const wordList = lockedWords.join(", ");

  return `Avoid the locked word(s): ${wordList}. Use only vocabulary from unlocked chapters ${chapterList}, and avoid words outside the unlocked chapters while keeping the target as the only unknown word.`;
}
