import { sql } from "drizzle-orm";
import { index, integer, real, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const lexemeTypes = ["verb", "noun", "particle", "phrase"] as const;
export type LexemeType = (typeof lexemeTypes)[number];

export const surfaceFormTypes = [
  "past",
  "present",
  "command",
  "masdar",
  "ism_al_masdar",
  "singular",
  "plural",
  "root",
] as const;
export type SurfaceFormType = (typeof surfaceFormTypes)[number];

export const surfaceFormRoles = [
  "past",
  "present",
  "command",
  "masdar",
  "singular",
  "plural",
] as const;
export type SurfaceFormRole = (typeof surfaceFormRoles)[number];

export const cardTypes = [
  "recognition",
  "production",
  "plural_recall",
  "verb_form_recall",
  "preposition_cloze",
  "context_cloze",
] as const;
export type CardType = (typeof cardTypes)[number];

export const corpora = sqliteTable("corpora", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  sourcePath: text("source_path"),
  sourceSha256: text("source_sha256"),
  edition: text("edition"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const chapters = sqliteTable(
  "chapters",
  {
    id: text("id").primaryKey(),
    corpusId: text("corpus_id")
      .notNull()
      .references(() => corpora.id, { onDelete: "cascade" }),
    chapterNumber: integer("chapter_number").notNull(),
    title: text("title").notNull(),
    verbCount: integer("verb_count").notNull().default(0),
    nounCount: integer("noun_count").notNull().default(0),
    unlocked: integer("unlocked", { mode: "boolean" }).notNull().default(false),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    corpusChapterUnique: uniqueIndex("chapters_corpus_chapter_unique").on(
      table.corpusId,
      table.chapterNumber,
    ),
  }),
);

export const lexemes = sqliteTable(
  "lexemes",
  {
    id: text("id").primaryKey(),
    chapterId: text("chapter_id")
      .notNull()
      .references(() => chapters.id, { onDelete: "cascade" }),
    type: text("type").$type<LexemeType>().notNull(),
    displayText: text("display_text").notNull(),
    normalizedKey: text("normalized_key").notNull(),
    translation: text("translation").notNull(),
    root: text("root"),
    sourcePage: integer("source_page"),
    sourceRow: integer("source_row"),
    isIsmAlMasdar: integer("is_ism_al_masdar", { mode: "boolean" })
      .notNull()
      .default(false),
    requiredPreposition: text("required_preposition"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    chapterKeyIdx: index("lexemes_chapter_key_idx").on(table.chapterId, table.normalizedKey),
    chapterKeyTypeUnique: uniqueIndex("lexemes_chapter_key_type_unique").on(
      table.chapterId,
      table.normalizedKey,
      table.type,
    ),
    typeIdx: index("lexemes_type_idx").on(table.type),
  }),
);

export const surfaceForms = sqliteTable(
  "surface_forms",
  {
    id: text("id").primaryKey(),
    lexemeId: text("lexeme_id")
      .notNull()
      .references(() => lexemes.id, { onDelete: "cascade" }),
    role: text("role", { enum: surfaceFormRoles }).$type<SurfaceFormRole>().notNull(),
    formType: text("form_type").$type<SurfaceFormType>().notNull(),
    displayText: text("display_text").notNull(),
    normalizedKey: text("normalized_key").notNull(),
    isPrimary: integer("is_primary", { mode: "boolean" }).notNull().default(false),
    sourceColumn: text("source_column"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    lexemeRoleIdx: index("surface_forms_lexeme_role_idx").on(table.lexemeId, table.role),
    lexemeFormIdx: index("surface_forms_lexeme_form_idx").on(table.lexemeId, table.formType),
    normalizedKeyIdx: index("surface_forms_normalized_key_idx").on(table.normalizedKey),
  }),
);

export const cards = sqliteTable(
  "cards",
  {
    id: text("id").primaryKey(),
    lexemeId: text("lexeme_id")
      .notNull()
      .references(() => lexemes.id, { onDelete: "cascade" }),
    cardType: text("card_type").$type<CardType>().notNull(),
    prompt: text("prompt").notNull(),
    answer: text("answer").notNull(),
    status: text("status", { enum: ["draft", "active", "suspended"] }).notNull().default("draft"),
    introducedAt: text("introduced_at"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    lexemeCardIdx: index("cards_lexeme_card_idx").on(table.lexemeId, table.cardType),
    statusIdx: index("cards_status_idx").on(table.status),
  }),
);

export const generatedCardDrafts = sqliteTable(
  "generated_card_drafts",
  {
    id: text("id").primaryKey(),
    lexemeId: text("lexeme_id").references(() => lexemes.id, { onDelete: "set null" }),
    cardType: text("card_type").$type<CardType>().notNull(),
    sentence: text("sentence").notNull(),
    translation: text("translation"),
    explanation: text("explanation"),
    unknownWords: text("unknown_words", { mode: "json" }).$type<string[]>().notNull().default([]),
    rejectionReasons: text("rejection_reasons", { mode: "json" })
      .$type<string[]>()
      .notNull()
      .default([]),
    status: text("status", { enum: ["pending", "approved", "rejected"] }).notNull().default("pending"),
    model: text("model"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    reviewedAt: text("reviewed_at"),
  },
  (table) => ({
    draftLexemeIdx: index("generated_card_drafts_lexeme_idx").on(table.lexemeId),
    draftStatusIdx: index("generated_card_drafts_status_idx").on(table.status),
  }),
);

export const reviewEvents = sqliteTable(
  "review_events",
  {
    id: text("id").primaryKey(),
    cardId: text("card_id")
      .notNull()
      .references(() => cards.id, { onDelete: "cascade" }),
    grade: text("grade", { enum: ["again", "hard", "good", "easy"] }).notNull(),
    responseLatencyMs: integer("response_latency_ms").notNull(),
    modality: text("modality", { enum: ["tap", "swipe", "typed", "voice"] }).notNull().default("tap"),
    usedHint: integer("used_hint", { mode: "boolean" }).notNull().default(false),
    reviewedAt: text("reviewed_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    cardReviewedIdx: index("review_events_card_reviewed_idx").on(table.cardId, table.reviewedAt),
  }),
);

export const memoryStates = sqliteTable("memory_states", {
  cardId: text("card_id")
    .primaryKey()
    .references(() => cards.id, { onDelete: "cascade" }),
  stability: real("stability").notNull().default(0.1),
  difficulty: real("difficulty").notNull().default(5.0),
  retrievability: real("retrievability").notNull().default(1.0),
  dueAt: text("due_at").notNull(),
  lastReviewedAt: text("last_reviewed_at"),
  reviewCount: integer("review_count").notNull().default(0),
  lapseCount: integer("lapse_count").notNull().default(0),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const interferenceEdges = sqliteTable(
  "interference_edges",
  {
    id: text("id").primaryKey(),
    sourceLexemeId: text("source_lexeme_id")
      .notNull()
      .references(() => lexemes.id, { onDelete: "cascade" }),
    targetLexemeId: text("target_lexeme_id")
      .notNull()
      .references(() => lexemes.id, { onDelete: "cascade" }),
    reason: text("reason").notNull(),
    lockedUntilRetrievability: real("locked_until_retrievability").notNull().default(0.75),
    active: integer("active", { mode: "boolean" }).notNull().default(true),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    edgeUnique: uniqueIndex("interference_edges_unique").on(
      table.sourceLexemeId,
      table.targetLexemeId,
    ),
  }),
);

export const sprints = sqliteTable(
  "sprints",
  {
    id: text("id").primaryKey(),
    chapterId: text("chapter_id").references(() => chapters.id, { onDelete: "set null" }),
    sprintDate: text("sprint_date").notNull(),
    status: text("status", { enum: ["planned", "active", "completed"] }).notNull().default("planned"),
    targetRetention: real("target_retention").notNull().default(0.88),
    warmupCardIds: text("warmup_card_ids", { mode: "json" }).$type<string[]>().notNull().default([]),
    dueCardIds: text("due_card_ids", { mode: "json" }).$type<string[]>().notNull().default([]),
    newCardIds: text("new_card_ids", { mode: "json" }).$type<string[]>().notNull().default([]),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    completedAt: text("completed_at"),
  },
  (table) => ({
    sprintDateIdx: index("sprints_date_idx").on(table.sprintDate),
  }),
);

export type Corpus = typeof corpora.$inferSelect;
export type Chapter = typeof chapters.$inferSelect;
export type Lexeme = typeof lexemes.$inferSelect;
export type NewLexeme = typeof lexemes.$inferInsert;
export type SurfaceForm = typeof surfaceForms.$inferSelect;
export type Card = typeof cards.$inferSelect;
export type GeneratedCardDraft = typeof generatedCardDrafts.$inferSelect;
export type ReviewEvent = typeof reviewEvents.$inferSelect;
export type MemoryState = typeof memoryStates.$inferSelect;
export type InterferenceEdge = typeof interferenceEdges.$inferSelect;
export type Sprint = typeof sprints.$inferSelect;
