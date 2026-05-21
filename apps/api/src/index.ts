import { normalizeArabicForKey, parseVerbDisplayAndPreposition } from "@vocbay/core";
import { Hono } from "hono";

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

if (import.meta.main) {
  Bun.serve({
    port: Number(Bun.env.PORT ?? 3001),
    fetch: app.fetch,
  });

  console.log("VocBay API listening on http://localhost:3001");
}
