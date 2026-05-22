import { describe, expect, test } from "bun:test";
import type { LexiconEntry } from "@vocbay/core";
import {
  generateValidatedClozes,
  type ClozeCandidate,
  type ClozeRequest,
  type LlmClozeProvider,
} from "../src/cloze";

const target: LexiconEntry = { displayText: "حَيُّ", chapterNumber: 3 };
const unlockedChapters = [1, 2, 3];
const approvedFunctionWords = ["مَعَ"];
const lexicon: LexiconEntry[] = [
  { displayText: "أَسْكُنُ", chapterNumber: 3 },
  { displayText: "حَيُّ", chapterNumber: 3 },
  { displayText: "الْجَامِعَةِ", chapterNumber: 3 },
  { displayText: "شَقَّةٍ", chapterNumber: 3 },
  { displayText: "جَمِيلَةٍ", chapterNumber: 3 },
  { displayText: "طَعَامٌ", chapterNumber: 5 },
];

const cleanCandidate: ClozeCandidate = {
  sentence: "أَسْكُنُ فِي حَيِّ الْجَامِعَةِ",
  translation: "I live in the university district.",
  explanation: "Target word appears as the only unknown.",
};

const lockedCandidate: ClozeCandidate = {
  sentence: "أَسْكُنُ فِي حَيِّ الْجَامِعَةِ مَعَ طَعَامٍ",
  translation: "I live in the university district with food.",
  explanation: "Includes a locked chapter noun.",
};

function buildParams(overrides?: Partial<Parameters<typeof generateValidatedClozes>[1]>) {
  return {
    target,
    unlockedChapters,
    lexicon,
    approvedFunctionWords,
    desiredCount: 1,
    maxAttempts: 3,
    model: "fake-model",
    ...overrides,
  };
}

class RecordingProvider implements LlmClozeProvider {
  readonly requests: ClozeRequest[] = [];

  constructor(private readonly responses: Array<ClozeCandidate[] | (() => Promise<ClozeCandidate[]>)>) {}

  async generateClozes(req: ClozeRequest): Promise<ClozeCandidate[]> {
    this.requests.push(req);
    const response = this.responses[this.requests.length - 1];

    if (!response) {
      return [];
    }

    if (typeof response === "function") {
      return response();
    }

    return response;
  }
}

describe("generateValidatedClozes", () => {
  test("discards a locked-word candidate, retries, and returns a pending draft", async () => {
    const provider = new RecordingProvider([[lockedCandidate], [cleanCandidate]]);

    const result = await generateValidatedClozes(provider, buildParams({ maxAttempts: 2 }));

    expect(provider.requests).toHaveLength(2);
    expect(result.attemptsUsed).toBe(2);
    expect(result.shortfall).toBe(0);
    expect(result.rejectedAttempts).toHaveLength(1);
    expect(result.rejectedAttempts[0]?.rejectionReasons).toContain(
      "LOCKED_CHAPTER_WORD:word=طَعَامٍ:chapter=5",
    );
    expect(result.drafts).toHaveLength(1);
    expect(result.drafts[0]?.status).toBe("pending");
    expect(result.drafts[0]?.cardType).toBe("context_cloze");
    expect(result.drafts[0]?.sentence).toBe(cleanCandidate.sentence);
    expect(result.drafts[0]?.model).toBe("fake-model");
  });

  test("passes a refinement hint that names the offending locked word and constraint", async () => {
    const provider = new RecordingProvider([[lockedCandidate], [cleanCandidate]]);

    await generateValidatedClozes(provider, buildParams({ maxAttempts: 2 }));

    const retryRequest = provider.requests[1];

    expect(retryRequest).toBeDefined();
    expect(retryRequest?.refinementHint).toContain("طَعَامٍ");
    expect(retryRequest?.refinementHint).toContain("outside the unlocked chapters");
    expect(retryRequest?.refinementHint).toContain("1, 2, 3");
  });

  test("honors maxAttempts when the provider always returns locked words", async () => {
    const provider = new RecordingProvider([
      [lockedCandidate],
      [lockedCandidate],
      [lockedCandidate],
      [lockedCandidate],
    ]);

    const result = await generateValidatedClozes(
      provider,
      buildParams({ desiredCount: 3, maxAttempts: 4 }),
    );

    expect(provider.requests).toHaveLength(4);
    expect(result.attemptsUsed).toBe(4);
    expect(result.drafts).toHaveLength(0);
    expect(result.shortfall).toBe(3);
    expect(result.rejectedAttempts).toHaveLength(4);
    expect(result.rejectedAttempts.every((attempt) => attempt.triggeredRetry)).toBe(true);
  });

  test("records non-locked validator rejections without forcing a retry", async () => {
    const provider = new RecordingProvider([
      [
        { sentence: "أَسْكُنُ فِي الْجَامِعَةِ" },
        cleanCandidate,
      ],
    ]);

    const result = await generateValidatedClozes(provider, buildParams({ maxAttempts: 1 }));

    expect(provider.requests).toHaveLength(1);
    expect(result.attemptsUsed).toBe(1);
    expect(result.rejectedAttempts).toHaveLength(1);
    expect(result.rejectedAttempts[0]?.triggeredRetry).toBe(false);
    expect(result.rejectedAttempts[0]?.rejectionReasons).toContain("MISSING_TARGET:word=حَيُّ");
    expect(result.drafts).toHaveLength(1);
    expect(result.drafts[0]?.sentence).toBe(cleanCandidate.sentence);
  });

  test("continues after an empty provider response and can still satisfy the request", async () => {
    const provider = new RecordingProvider([[], [cleanCandidate]]);

    const result = await generateValidatedClozes(provider, buildParams({ maxAttempts: 2 }));

    expect(provider.requests).toHaveLength(2);
    expect(result.attemptsUsed).toBe(2);
    expect(result.rejectedAttempts).toHaveLength(0);
    expect(result.drafts).toHaveLength(1);
    expect(result.shortfall).toBe(0);
  });

  test("rejects malformed provider candidates before validation and continues", async () => {
    const provider = new RecordingProvider([
      [{ translation: "missing sentence" } as unknown as ClozeCandidate, cleanCandidate],
    ]);

    const result = await generateValidatedClozes(provider, buildParams({ maxAttempts: 1 }));

    expect(result.rejectedAttempts).toHaveLength(1);
    expect(result.rejectedAttempts[0]?.rejectionReasons).toContain(
      "INVALID_PROVIDER_CANDIDATE: missing sentence",
    );
    expect(result.drafts).toHaveLength(1);
  });

  test("propagates provider errors", async () => {
    const provider = new RecordingProvider([
      async () => {
        throw new Error("provider boom");
      },
    ]);

    await expect(generateValidatedClozes(provider, buildParams())).rejects.toThrow("provider boom");
  });
});
