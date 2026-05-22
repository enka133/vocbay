---
task: Implement FSRS-6 core engine, latency grading, lapse sandbox, interference lock, and API one-unknown cloze pipeline
project: vocbay
effort: E3
phase: build
progress: 33/50
mode: algorithm
started: 2026-05-22T00:00:00Z
updated: 2026-05-22T00:40:00Z
---

## Problem

VocBay's scheduling is a hand-rolled SM-2 variant living only in `apps/web/src/scheduler.ts` (easeFactor + fixed interval multipliers). The `packages/core` package already defines the *shape* of a real spaced-repetition model — `memory_states` (stability/difficulty/retrievability), `review_events` (response latency), `interference_edges` (sibling-lock with `locked_until_retrievability = 0.75`), and a working `validateOneUnknown` validator — but none of it is wired to an actual algorithm. There is no FSRS engine, no latency-aware grading, no lapse sandbox, no interference gating, and the validator is unit-tested but never invoked by any generation workflow.

## Vision

A learner rates a card "Good" but hesitates four seconds — the system quietly treats that hesitation as a near-miss and the interval grows more slowly, because real recall, not button-honesty, drives the schedule. A failed card disappears for a real fifteen minutes instead of bouncing back in sixty seconds. New vocabulary that would collide with a not-yet-solid sibling (عَمّ / عَمَّةٌ) stays locked until the first word is genuinely stable. Every AI-generated example sentence is provably bounded to words the learner already knows. The euphoric surprise: the schedule feels like it can read whether you *actually* remembered, not just which button you pressed.

## Out of Scope

Not rewriting the 271KB generated `apps/web/src/vocabulary.ts` data file. Not training FSRS weights from history (published defaults). Not building a live LLM integration with real keys (injectable interface only). Not a breaking migration of localStorage state. Not a DB persistence layer on the API route. Not a study-UI redesign.

## Principles

- Recall truth over button truth: latency is signal, a slow "Good" is a "Hard".
- Active recall requires real spacing: a lapse must leave short-term memory before re-test.
- Do not teach collisions: interfering lexemes are introduced sequentially.
- Generated content must be provably chapter-bounded — one unknown, the target, nothing else.
- Implement the canonical algorithm, not a garbled transcription of it.

## Constraints

- Bun + TypeScript only. Strict tsc across all three workspaces.
- FSRS engine lives in `packages/core` (system of record); web and API consume it.
- The existing 5 Playwright E2E tests must stay green — they pin the `CardReviewState` shape (`intervalDays` + `lastRating` drive the hidden mastery step) and mastery-color stability on reveal.
- LLM provider must be injectable; no test may make a real network/LLM call.
- Target retention R = 0.88. Interference unlock from edge's `lockedUntilRetrievability` (default 0.75).
- "Good" slower than 4000ms graded "Hard" internally. Lapse withheld ≥15 minutes.

## Goal

Replace the primitive web scheduler math with a canonical, unit-tested FSRS-6 engine in `packages/core/src/scheduler/` that updates S/D/R and computes next interval at R=0.88; layer in a latency modifier (slow Good → Hard), a 15-minute lapse sandbox, and an interference-lock selector driven by `interference_edges`; and wire `validateOneUnknown` into a retrying API cloze-generation pipeline. Done when all new logic is tested, `bun test` + 3-workspace `typecheck` pass, and the existing E2E suite stays green.

## Criteria

### FSRS-6 engine
- [x] ISC-1: `packages/core/src/scheduler/fsrs.ts` exists and exports a forgetting-curve function
- [x] ISC-2: exports a next-interval function
- [x] ISC-3: exports a memory-state update function (S/D/R)
- [x] ISC-4: forgetting curve at elapsed=0 returns R=1.0
- [x] ISC-5: forgetting curve is strictly decreasing as elapsed days increase
- [x] ISC-6: next-interval round-trips: forgettingCurve(nextInterval(S), S) ≈ 0.88
- [x] ISC-7: default target retention constant equals 0.88
- [x] ISC-8: a "good" review increases stability relative to prior stability
- [x] ISC-9: an "again" review produces lapse stability lower than a "good" review
- [x] ISC-10: difficulty stays clamped within [1, 10] across all grades
- [x] ISC-11: stability stays strictly positive across all grades
- [x] ISC-12: canonical FACTOR = 0.9^(1/DECAY)−1 used; deviation from prompt's garbled denominator logged in Decisions

### Latency modifier
- [x] ISC-13: exports a latency-aware effective-grade function
- [x] ISC-14: "good" with latency ≤4000ms stays "good"
- [x] ISC-15: "good" with latency >4000ms becomes effective "hard"
- [x] ISC-16: latency threshold constant equals 4000 (ms)
- [x] ISC-17: high-latency "good" yields a strictly shorter next interval than fast "good" (headline test)
- [x] ISC-18: Anti: latency modifier never alters "again", "hard", or "easy"

### Lapse sandbox
- [x] ISC-19: `packages/core/src/scheduler/lapseSandbox.ts` exists and exports the queue API
- [x] ISC-20: a card pushed on "again" is NOT due before 15 minutes elapse
- [x] ISC-21: the same card IS due once ≥15 minutes elapse
- [x] ISC-22: sandbox lockout constant equals 15 minutes
- [x] ISC-23: multiple lapsed cards return in earliest-ready order

### Interference lock
- [x] ISC-24: `packages/core/src/arabic/interferenceLock.ts` exists and exports the lock selector
- [x] ISC-25: for edge A→B, B is locked while A's retrievability < threshold
- [x] ISC-26: B unlocks once A's retrievability ≥ the edge threshold (0.75)
- [x] ISC-27: B stays locked if A has an acute fail (recent "again") even at R≥0.75
- [x] ISC-28: a locked target is excluded from new-card selection
- [x] ISC-29: edges with active=false are ignored
- [x] ISC-30: threshold read from edge.lockedUntilRetrievability, not a hardcoded literal

### API cloze pipeline (Forge)
- [x] ISC-31: `apps/api/src/cloze/pipeline.ts` exists exporting the validated-cloze generator
- [x] ISC-32: every candidate runs through `validateOneUnknown`
- [x] ISC-33: LOCKED_CHAPTER_WORD rejection discards the draft and re-triggers provider with a refined hint
- [x] ISC-34: provider is an injectable interface; tests use a fake, no real keys
- [x] ISC-35: maxAttempts honored — always-locked provider terminates without infinite loop
- [x] ISC-36: `POST /api/cards/generate` mounted; existing API routes intact
- [ ] ISC-37: live LLM provider call [DEFERRED-VERIFY — no keys at execution time; follow-up: wire real provider]

### Integration & build
- [x] ISC-38: new core modules re-exported from `packages/core/src/index.ts`
- [x] ISC-39: `apps/web/src/scheduler.ts` consumes the core FSRS-6 engine for interval math
- [x] ISC-40: web `CardReviewState` retains `intervalDays` + `lastRating` (mastery-step derivation preserved)
- [x] ISC-41: web "again" uses a ≥15-minute sandbox interval, not 1 minute
- [ ] ISC-42: `bun test packages/core/tests` all green
- [ ] ISC-43: `bun --filter @vocbay/api typecheck` clean
- [ ] ISC-44: `bun --filter @vocbay/web typecheck` clean
- [ ] ISC-45: `bun --filter @vocbay/core typecheck` clean
- [ ] ISC-46: existing Playwright E2E suite passes (mastery color stable, answer meanings, XP/streak)

### Anti-criteria
- [ ] ISC-47: Anti: no duplicate role/preposition answer boxes reintroduced for verb-form cards
- [ ] ISC-48: Anti: target mastery background color does NOT change on "Show answer"
- [x] ISC-49: Anti: the generated `vocabulary.ts` data file is NOT rewritten
- [x] ISC-50: Anti: no real network/LLM call exists in any test

## Test Strategy

| isc | type | check | threshold | tool |
|-----|------|-------|-----------|------|
| 1-3 | static | symbol exported | present | grep |
| 4-12 | unit | FSRS math invariants | exact/approx | bun test |
| 13-18 | unit | latency grade mapping + interval effect | exact | bun test |
| 19-23 | unit | sandbox timing with injected clock | exact | bun test |
| 24-30 | unit | interference lock state machine | exact | bun test |
| 31-36 | unit/static | pipeline retry + route mount | exact | bun test + grep |
| 37 | deferred | live provider | n/a | follow-up task |
| 38-41 | static | exports + web wiring | present | grep |
| 42-45 | build | test + typecheck | exit 0 | bash |
| 46 | e2e | playwright suite | 5 pass | bash |
| 47-50 | anti | regression guards | absent | grep + e2e + git diff |

## Features

| name | satisfies | depends_on | parallelizable |
|------|-----------|------------|----------------|
| fsrs-engine | ISC-1..12 | — | core |
| latency-modifier | ISC-13..18 | fsrs-engine | core |
| lapse-sandbox | ISC-19..23 | — | core |
| interference-lock | ISC-24..30 | fsrs-engine | core |
| core-exports | ISC-38 | all core | core |
| web-rewire | ISC-39..41, 46..48 | fsrs-engine | web |
| api-cloze-pipeline | ISC-31..37 | validateOneUnknown | apps/api (Forge) |
| verification | ISC-42..50 | all | — |

## Decisions

- 2026-05-22: Classifier returned E3; honored. Multi-file monorepo build across core/web/api.
- 2026-05-22: The prompt's interval formula `I = S × ((R^(−1/α) − 1)/(e^· − 1))` is a garbled transcription of the canonical FSRS interval equation. Numerator `R^(−1/α) − 1` matches standard `R^(1/DECAY) − 1` with DECAY = −α; denominator `(e^· − 1)` is a corrupted rendering of the FSRS FACTOR `0.9^(1/DECAY) − 1`. Implemented the canonical FACTOR. Truth over flattery.
- 2026-05-22: Task claims hardcoded intervals live in `vocabulary.ts` — false; that file is 271KB of generated card data. Scheduling math is only in `scheduler.ts`. Web rewire targets `scheduler.ts` only.
- 2026-05-22: Web `CardReviewState` kept backward-compatible (retain intervalDays/lastRating/easeFactor, add stability/difficulty) so the 5 existing E2E tests and hidden-mastery derivation survive the FSRS swap.
- 2026-05-22 INCIDENT: Forge was spawned with `isolation: "worktree"` but no separate worktree was created (`git worktree list` showed only main). Forge ran in the shared tree, misidentified the in-flight FSRS files as out-of-scope Codex output, and `git checkout`+deleted core/index.ts, package.json, scheduler/, interferenceLock.ts, the core tests, and ISA.md. Recovered by re-writing all files from conversation context. LEARNING: do not rely on `isolation:"worktree"` for write-agents in a repo with concurrent uncommitted main-tree work; commit-before-spawn or give the agent a hard "do not touch or revert files outside your manifest, do not run git checkout/clean" instruction.

## Changelog

(pending LEARN)

## Verification

- ISC-1..30 (core): `bun test packages/core/tests` — fsrs/latency/lapseSandbox/interferenceLock suites. (re-run pending after rebuild)
- ISC-31..36 (API): Forge report — `bun test apps/api/tests` → 7 pass / 0 fail; `bun --filter @vocbay/api typecheck` exit 0. Refinement hint contains offending word طَعَامٍ + unlocked chapters; maxAttempts terminates (4 calls, 0 drafts, no loop).
- ISC-37: DEFERRED-VERIFY — live provider, no keys.
- ISC-38..41: exports + web rewire re-applied after incident.
- ISC-42..50: full suite + E2E re-run pending.
