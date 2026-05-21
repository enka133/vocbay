export type FsrsRating = "again" | "hard" | "good" | "easy";

export interface MemorySignal {
  cardId: string;
  rating: FsrsRating;
  responseLatencyMs: number;
  usedHint: boolean;
  reviewedAt: Date;
}

export interface MemoryModelState {
  stability: number;
  difficulty: number;
  retrievability: number;
  dueAt: Date;
}
