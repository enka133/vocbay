# VocBay

VocBay is a mobile-first vocabulary learning app for Al-Arabiyyah Bayna Yadayk Book 1.

V1 scaffolds a Bun/TypeScript monorepo:

- `apps/web`: React + Vite PWA shell.
- `apps/api`: Hono API on Bun.
- `packages/core`: SQLite/Drizzle schemas, Arabic normalization, ingestion helpers, AI validation, and shared domain types.
- `scripts`: import and maintenance utilities.

## Commands

```bash
bun install
bun test
bun run typecheck
bun run dev
```

## V1 Constraints

- Arabic display text keeps diacritics.
- Search keys strip harakat, tatweel, zero-width, and bidi artifacts.
- Verb prepositions such as `إِلَى` are stored separately from the verb display text.
- AI-generated cards must pass a one-unknown validator before approval.
