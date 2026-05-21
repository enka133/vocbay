import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import * as schema from "./schema";

export function createVocBayDb(path = ":memory:") {
  const sqlite = new Database(path);
  sqlite.run("PRAGMA foreign_keys = ON");

  return drizzle(sqlite, { schema });
}

export type VocBayDb = ReturnType<typeof createVocBayDb>;
