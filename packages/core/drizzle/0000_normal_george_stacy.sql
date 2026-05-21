CREATE TABLE `cards` (
	`id` text PRIMARY KEY NOT NULL,
	`lexeme_id` text NOT NULL,
	`card_type` text NOT NULL,
	`prompt` text NOT NULL,
	`answer` text NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`introduced_at` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`lexeme_id`) REFERENCES `lexemes`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `cards_lexeme_card_idx` ON `cards` (`lexeme_id`,`card_type`);--> statement-breakpoint
CREATE INDEX `cards_status_idx` ON `cards` (`status`);--> statement-breakpoint
CREATE TABLE `chapters` (
	`id` text PRIMARY KEY NOT NULL,
	`corpus_id` text NOT NULL,
	`chapter_number` integer NOT NULL,
	`title` text NOT NULL,
	`verb_count` integer DEFAULT 0 NOT NULL,
	`noun_count` integer DEFAULT 0 NOT NULL,
	`unlocked` integer DEFAULT false NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`corpus_id`) REFERENCES `corpora`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `chapters_corpus_chapter_unique` ON `chapters` (`corpus_id`,`chapter_number`);--> statement-breakpoint
CREATE TABLE `corpora` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`source_path` text,
	`source_sha256` text,
	`edition` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `generated_card_drafts` (
	`id` text PRIMARY KEY NOT NULL,
	`lexeme_id` text,
	`card_type` text NOT NULL,
	`sentence` text NOT NULL,
	`translation` text,
	`explanation` text,
	`unknown_words` text DEFAULT '[]' NOT NULL,
	`rejection_reasons` text DEFAULT '[]' NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`model` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`reviewed_at` text,
	FOREIGN KEY (`lexeme_id`) REFERENCES `lexemes`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `generated_card_drafts_lexeme_idx` ON `generated_card_drafts` (`lexeme_id`);--> statement-breakpoint
CREATE INDEX `generated_card_drafts_status_idx` ON `generated_card_drafts` (`status`);--> statement-breakpoint
CREATE TABLE `interference_edges` (
	`id` text PRIMARY KEY NOT NULL,
	`source_lexeme_id` text NOT NULL,
	`target_lexeme_id` text NOT NULL,
	`reason` text NOT NULL,
	`locked_until_retrievability` real DEFAULT 0.75 NOT NULL,
	`active` integer DEFAULT true NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`source_lexeme_id`) REFERENCES `lexemes`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`target_lexeme_id`) REFERENCES `lexemes`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `interference_edges_unique` ON `interference_edges` (`source_lexeme_id`,`target_lexeme_id`);--> statement-breakpoint
CREATE TABLE `lexemes` (
	`id` text PRIMARY KEY NOT NULL,
	`chapter_id` text NOT NULL,
	`type` text NOT NULL,
	`display_text` text NOT NULL,
	`normalized_key` text NOT NULL,
	`translation` text NOT NULL,
	`root` text,
	`source_page` integer,
	`source_row` integer,
	`is_ism_al_masdar` integer DEFAULT false NOT NULL,
	`required_preposition` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `lexemes_chapter_key_idx` ON `lexemes` (`chapter_id`,`normalized_key`);--> statement-breakpoint
CREATE UNIQUE INDEX `lexemes_chapter_key_type_unique` ON `lexemes` (`chapter_id`,`normalized_key`,`type`);--> statement-breakpoint
CREATE INDEX `lexemes_type_idx` ON `lexemes` (`type`);--> statement-breakpoint
CREATE TABLE `memory_states` (
	`card_id` text PRIMARY KEY NOT NULL,
	`stability` real DEFAULT 0.1 NOT NULL,
	`difficulty` real DEFAULT 5 NOT NULL,
	`retrievability` real DEFAULT 1 NOT NULL,
	`due_at` text NOT NULL,
	`last_reviewed_at` text,
	`review_count` integer DEFAULT 0 NOT NULL,
	`lapse_count` integer DEFAULT 0 NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`card_id`) REFERENCES `cards`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `review_events` (
	`id` text PRIMARY KEY NOT NULL,
	`card_id` text NOT NULL,
	`grade` text NOT NULL,
	`response_latency_ms` integer NOT NULL,
	`modality` text DEFAULT 'tap' NOT NULL,
	`used_hint` integer DEFAULT false NOT NULL,
	`reviewed_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`card_id`) REFERENCES `cards`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `review_events_card_reviewed_idx` ON `review_events` (`card_id`,`reviewed_at`);--> statement-breakpoint
CREATE TABLE `sprints` (
	`id` text PRIMARY KEY NOT NULL,
	`chapter_id` text,
	`sprint_date` text NOT NULL,
	`status` text DEFAULT 'planned' NOT NULL,
	`target_retention` real DEFAULT 0.88 NOT NULL,
	`warmup_card_ids` text DEFAULT '[]' NOT NULL,
	`due_card_ids` text DEFAULT '[]' NOT NULL,
	`new_card_ids` text DEFAULT '[]' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`completed_at` text,
	FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `sprints_date_idx` ON `sprints` (`sprint_date`);--> statement-breakpoint
CREATE TABLE `surface_forms` (
	`id` text PRIMARY KEY NOT NULL,
	`lexeme_id` text NOT NULL,
	`role` text NOT NULL,
	`form_type` text NOT NULL,
	`display_text` text NOT NULL,
	`normalized_key` text NOT NULL,
	`is_primary` integer DEFAULT false NOT NULL,
	`source_column` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`lexeme_id`) REFERENCES `lexemes`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `surface_forms_lexeme_role_idx` ON `surface_forms` (`lexeme_id`,`role`);--> statement-breakpoint
CREATE INDEX `surface_forms_lexeme_form_idx` ON `surface_forms` (`lexeme_id`,`form_type`);--> statement-breakpoint
CREATE INDEX `surface_forms_normalized_key_idx` ON `surface_forms` (`normalized_key`);