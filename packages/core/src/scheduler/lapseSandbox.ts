// A failed ("Again") card is withheld for at least this long so it leaves short-term/echo memory
// before it is re-presented, forcing genuine long-term recall instead of a one-minute parrot loop.
export const LAPSE_SANDBOX_MS = 15 * 60 * 1000;

interface SandboxEntry {
  cardId: string;
  readyAt: number;
}

/**
 * Holds lapsed cards until a sandbox lockout (default 15 minutes) has elapsed. Re-failing a card
 * resets its timer. `ready` returns eligible cards in earliest-ready order; `release` returns and
 * removes them. Time is injected via `now` so the queue is fully deterministic in tests.
 */
export class LapseSandbox {
  private readonly entries = new Map<string, SandboxEntry>();

  constructor(private readonly lockoutMs: number = LAPSE_SANDBOX_MS) {}

  push(cardId: string, now: number): void {
    this.entries.set(cardId, { cardId, readyAt: now + this.lockoutMs });
  }

  has(cardId: string): boolean {
    return this.entries.has(cardId);
  }

  isReady(cardId: string, now: number): boolean {
    const entry = this.entries.get(cardId);
    return entry !== undefined && entry.readyAt <= now;
  }

  ready(now: number): string[] {
    return [...this.entries.values()]
      .filter((entry) => entry.readyAt <= now)
      .sort((left, right) => left.readyAt - right.readyAt)
      .map((entry) => entry.cardId);
  }

  pending(now: number): string[] {
    return [...this.entries.values()]
      .filter((entry) => entry.readyAt > now)
      .sort((left, right) => left.readyAt - right.readyAt)
      .map((entry) => entry.cardId);
  }

  release(now: number): string[] {
    const released = this.ready(now);
    for (const cardId of released) {
      this.entries.delete(cardId);
    }
    return released;
  }

  get size(): number {
    return this.entries.size;
  }
}
