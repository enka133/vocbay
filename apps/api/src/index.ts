import { normalizeArabicForKey, parseVerbDisplayAndPreposition } from "@vocbay/core";
import { Hono } from "hono";
import { generateValidatedClozes, getDefaultClozeProvider } from "./cloze";

export const app = new Hono();

app.get("/health", (context) =>
  context.json({
    ok: true,
    service: "vocbay-api",
  }),
);

app.post("/api/normalize", async (context) => {
  const body = (await context.req.json().catch(() => null)) as { text?: string } | null;

  if (!body?.text) {
    return context.json({ error: "text is required" }, 400);
  }

  return context.json({
    displayText: body.text,
    normalizedKey: normalizeArabicForKey(body.text),
  });
});

app.post("/api/verbs/parse", async (context) => {
  const body = (await context.req.json().catch(() => null)) as { pastVerb?: string } | null;

  if (!body?.pastVerb) {
    return context.json({ error: "pastVerb is required" }, 400);
  }

  return context.json(parseVerbDisplayAndPreposition(body.pastVerb));
});

app.post("/api/cards/generate", async (context) => {
  const body = (await context.req.json().catch(() => null)) as GenerateCardsRequestBody | null;

  if (!isGenerateCardsRequestBody(body)) {
    return context.json(
      {
        error:
          "target, unlockedChapters, and lexicon are required; maxAttempts and desiredCount must be non-negative integers when provided",
      },
      400,
    );
  }

  const provider = getDefaultClozeProvider();
  const result = await generateValidatedClozes(provider, body);

  return context.json(result);
});

if (import.meta.main) {
  Bun.serve({
    port: Number(Bun.env.PORT ?? 3001),
    fetch: app.fetch,
  });

  console.log("VocBay API listening on http://localhost:3001");
}

interface GenerateCardsRequestBody {
  target: {
    displayText: string;
    normalizedKey?: string;
    chapterNumber: number;
    isContentWord?: boolean;
  };
  unlockedChapters: number[];
  lexicon: Array<{
    displayText: string;
    normalizedKey?: string;
    chapterNumber: number;
    isContentWord?: boolean;
  }>;
  approvedFunctionWords?: string[];
  maxAttempts?: number;
  desiredCount?: number;
  model?: string;
}

function isGenerateCardsRequestBody(body: unknown): body is GenerateCardsRequestBody {
  if (!body || typeof body !== "object") {
    return false;
  }

  const target = Reflect.get(body, "target");
  const unlockedChapters = Reflect.get(body, "unlockedChapters");
  const lexicon = Reflect.get(body, "lexicon");
  const approvedFunctionWords = Reflect.get(body, "approvedFunctionWords");
  const maxAttempts = Reflect.get(body, "maxAttempts");
  const desiredCount = Reflect.get(body, "desiredCount");
  const model = Reflect.get(body, "model");

  if (!isLexiconEntry(target)) {
    return false;
  }

  if (!isNumberArray(unlockedChapters)) {
    return false;
  }

  if (!Array.isArray(lexicon) || lexicon.length === 0 || !lexicon.every(isLexiconEntry)) {
    return false;
  }

  if (
    approvedFunctionWords !== undefined &&
    (!Array.isArray(approvedFunctionWords) ||
      !approvedFunctionWords.every((word) => typeof word === "string"))
  ) {
    return false;
  }

  if (maxAttempts !== undefined && (!Number.isInteger(maxAttempts) || maxAttempts < 0)) {
    return false;
  }

  if (desiredCount !== undefined && (!Number.isInteger(desiredCount) || desiredCount < 0)) {
    return false;
  }

  if (model !== undefined && typeof model !== "string") {
    return false;
  }

  return true;
}

function isLexiconEntry(value: unknown): value is GenerateCardsRequestBody["target"] {
  if (!value || typeof value !== "object") {
    return false;
  }

  const displayText = Reflect.get(value, "displayText");
  const normalizedKey = Reflect.get(value, "normalizedKey");
  const chapterNumber = Reflect.get(value, "chapterNumber");
  const isContentWord = Reflect.get(value, "isContentWord");

  if (typeof displayText !== "string" || displayText.length === 0) {
    return false;
  }

  if (normalizedKey !== undefined && typeof normalizedKey !== "string") {
    return false;
  }

  if (!Number.isInteger(chapterNumber)) {
    return false;
  }

  if (isContentWord !== undefined && typeof isContentWord !== "boolean") {
    return false;
  }

  return true;
}

function isNumberArray(value: unknown): value is number[] {
  return Array.isArray(value) && value.every((item) => Number.isInteger(item));
}
