import type { LexiconEntry } from "@vocbay/core";

export interface ClozeRequest {
  /**
   * Target vocabulary entry that should remain the single unknown in generated context.
   */
  target: LexiconEntry;
  /**
   * Unlocked chapters the provider must stay within for non-target content words.
   */
  unlockedChapters: number[];
  /**
   * Known lexicon entries available to the learner.
   */
  lexicon: LexiconEntry[];
  /**
   * Additional function words that the validator will allow.
   */
  approvedFunctionWords?: string[];
  /**
   * Number of validated drafts still needed from the provider.
   */
  desiredCount: number;
  /**
   * Retry guidance derived from previous locked-word rejections.
   */
  refinementHint?: string;
}

export interface ClozeCandidate {
  sentence: string;
  translation?: string;
  explanation?: string;
}

export interface LlmClozeProvider {
  generateClozes(req: ClozeRequest): Promise<ClozeCandidate[]>;
}

export class StubClozeProvider implements LlmClozeProvider {
  async generateClozes(_req: ClozeRequest): Promise<ClozeCandidate[]> {
    return [];
  }
}

export function getDefaultClozeProvider(): LlmClozeProvider {
  const configuredProvider = Bun.env.CLOZE_LLM_PROVIDER;

  if (!configuredProvider || configuredProvider === "stub") {
    return new StubClozeProvider();
  }

  return new StubClozeProvider();
}
