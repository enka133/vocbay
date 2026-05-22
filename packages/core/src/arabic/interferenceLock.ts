import { currentRetrievability, createFsrsParameters, type FsrsParameters } from "../scheduler/fsrs";

export interface InterferenceEdgeInput {
  sourceLexemeId: string;
  targetLexemeId: string;
  lockedUntilRetrievability: number;
  active: boolean;
}

export interface SourceLexemeSignal {
  /** Whether the source lexeme has been studied at all. Unstudied sources keep their target locked. */
  introduced: boolean;
  /** Current aggregate recall probability of the source lexeme (0..1). */
  retrievability: number;
  /** True if the source has a recent failure ("Again") and is not currently trustworthy. */
  acuteFail: boolean;
}

export interface LockDecision {
  targetLexemeId: string;
  locked: boolean;
  reason: "source_not_introduced" | "source_acute_fail" | "below_retrievability" | "unlocked";
  blockingSourceLexemeId?: string;
}

function decideForEdge(edge: InterferenceEdgeInput, signal: SourceLexemeSignal | undefined): LockDecision {
  const base = { targetLexemeId: edge.targetLexemeId, blockingSourceLexemeId: edge.sourceLexemeId };

  if (!signal || !signal.introduced) {
    return { ...base, locked: true, reason: "source_not_introduced" };
  }
  if (signal.acuteFail) {
    return { ...base, locked: true, reason: "source_acute_fail" };
  }
  if (signal.retrievability < edge.lockedUntilRetrievability) {
    return { ...base, locked: true, reason: "below_retrievability" };
  }
  return { targetLexemeId: edge.targetLexemeId, locked: false, reason: "unlocked" };
}

/**
 * Resolve which target lexemes are locked by interference. A target is locked if ANY active edge
 * pointing at it has a source that is not yet introduced, has an acute fail, or sits below the
 * edge's `lockedUntilRetrievability` threshold. Inactive edges are ignored.
 */
export function lockedTargetLexemes(
  edges: InterferenceEdgeInput[],
  sourceSignals: Map<string, SourceLexemeSignal>,
): Set<string> {
  const locked = new Set<string>();
  for (const edge of edges) {
    if (!edge.active) {
      continue;
    }
    const decision = decideForEdge(edge, sourceSignals.get(edge.sourceLexemeId));
    if (decision.locked) {
      locked.add(edge.targetLexemeId);
    }
  }
  return locked;
}

export function explainLocks(
  edges: InterferenceEdgeInput[],
  sourceSignals: Map<string, SourceLexemeSignal>,
): LockDecision[] {
  return edges
    .filter((edge) => edge.active)
    .map((edge) => decideForEdge(edge, sourceSignals.get(edge.sourceLexemeId)));
}

/**
 * Filter a set of candidate new-card lexeme IDs, removing any that are currently interference-locked.
 */
export function selectUnlockedNewLexemes(
  candidateLexemeIds: string[],
  edges: InterferenceEdgeInput[],
  sourceSignals: Map<string, SourceLexemeSignal>,
): string[] {
  const locked = lockedTargetLexemes(edges, sourceSignals);
  return candidateLexemeIds.filter((lexemeId) => !locked.has(lexemeId));
}

export interface SourceCardMemory {
  stability: number;
  lastReviewedAt: Date | null;
  /** Most recent grade for this card, if known — an "again" marks an acute fail. */
  lastRating?: "again" | "hard" | "good" | "easy";
}

/**
 * Build a {@link SourceLexemeSignal} from the source lexeme's card memory states. Aggregate
 * retrievability is the weakest card (min), because a lexeme is only as solid as its shakiest form.
 */
export function buildSourceSignal(
  cards: SourceCardMemory[],
  now: Date,
  params: FsrsParameters = createFsrsParameters(),
): SourceLexemeSignal {
  const reviewed = cards.filter((card) => card.lastReviewedAt !== null);
  if (reviewed.length === 0) {
    return { introduced: false, retrievability: 0, acuteFail: false };
  }
  const retrievabilities = reviewed.map((card) =>
    currentRetrievability(card.stability, card.lastReviewedAt, now, params),
  );
  const acuteFail = cards.some((card) => card.lastRating === "again");
  return {
    introduced: true,
    retrievability: Math.min(...retrievabilities),
    acuteFail,
  };
}
