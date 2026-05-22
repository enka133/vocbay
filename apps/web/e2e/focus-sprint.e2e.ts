import { expect, test, type Page } from "@playwright/test";

async function getImportedDeckTotal(page: Page) {
  const totalText = await page.getByTestId("deck-total").textContent();
  const total = Number(totalText?.match(/\d+/u)?.[0] ?? 0);

  expect(total).toBeGreaterThan(25);
  return total;
}

test.beforeEach(async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "networkidle" });
});

test("anki-style review starts, reveals, and schedules the first card", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Bayna Book One" })).toBeVisible();
  await expect(page.getByText("New").first()).toBeVisible();
  await getImportedDeckTotal(page);

  await page.getByRole("button", { name: "Study now" }).first().click();
  await expect(page.getByTestId("session-progress")).toHaveText(/^1 \/ \d+$/);
  await expect(page.getByRole("button", { name: "Show answer" })).toBeVisible();

  const familiarityBadge = page.getByTestId("familiarity-badge");
  await expect(familiarityBadge).toBeVisible();
  await expect(familiarityBadge).toContainText("New");
  await expect(familiarityBadge).toHaveAttribute("data-review-count", "0");

  const targetMastery = page.getByTestId("target-mastery");
  const targetBackgroundBeforeReveal = await targetMastery.evaluate((node) => getComputedStyle(node).backgroundColor);
  await page.getByRole("button", { name: "Show answer" }).click();
  await expect(page.getByTestId("answer-meaning")).toHaveText("He looked");
  await expect(page.getByText("Back")).toHaveCount(0);
  await expect(targetMastery).toHaveAttribute("data-mastery-step", "0");
  await expect.poll(() => targetMastery.evaluate((node) => getComputedStyle(node).backgroundColor)).toBe(targetBackgroundBeforeReveal);
  await expect(page.getByTestId("answer-facts")).toHaveCount(0);
  await expect(page.getByText("Preposition")).toHaveCount(0);
  await expect(page.getByText("إِلَى")).toHaveCount(0);
  await expect(page.getByRole("button", { name: /Again/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Hard/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Good/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Easy/ })).toBeVisible();

  await page.getByRole("button", { name: /Good/ }).click();
  await expect(page.getByTestId("session-progress")).toHaveText(/^2 \/ \d+$/);
});

test("keyboard review flow supports reveal and numeric grading", async ({ page }) => {
  await getImportedDeckTotal(page);
  await page.getByRole("button", { name: "Study now" }).first().click();

  await page.keyboard.press("Space");
  await expect(page.getByTestId("answer-meaning")).toHaveText("He looked");

  await page.keyboard.press("3");
  await expect(page.getByTestId("session-progress")).toHaveText(/^2 \/ \d+$/);
});

test("verb answer meaning follows the active form role", async ({ page }) => {
  await getImportedDeckTotal(page);
  await page.getByRole("button", { name: "Study now" }).first().click();

  await page.getByRole("button", { name: "Show answer" }).click();
  await expect(page.getByTestId("answer-meaning")).toHaveText("He looked");

  await page.getByRole("button", { name: /Good/ }).click();
  await page.getByRole("button", { name: "Show answer" }).click();
  await expect(page.getByTestId("answer-meaning")).toHaveText("He looks");

  await page.getByRole("button", { name: /Good/ }).click();
  await page.getByRole("button", { name: "Show answer" }).click();
  await expect(page.getByTestId("answer-meaning")).toHaveText("Look!");

  await page.getByRole("button", { name: /Good/ }).click();
  await page.getByRole("button", { name: "Show answer" }).click();
  await expect(page.getByTestId("answer-meaning")).toHaveText("Looking");
});

test("target color reflects hidden mastery step", async ({ page }) => {
  await page.evaluate(() => {
    localStorage.setItem(
      "vocbay.ankiReviewState.v1",
      JSON.stringify({
        "ch1-verb-نظر-to-look-past": {
          phase: "review",
          dueAt: Date.now() - 1_000,
          easeFactor: 2.7,
          intervalDays: 21,
          repetitions: 8,
          lapses: 0,
          lastReviewedAt: Date.now() - 86_400_000,
          lastRating: "easy",
        },
      }),
    );
  });
  await page.reload({ waitUntil: "networkidle" });
  await getImportedDeckTotal(page);

  await page.getByRole("button", { name: "Study now" }).first().click();
  await expect(page.getByTestId("target-mastery")).toHaveAttribute("data-mastery-step", "100");
});

test("imported deck can review the first 30 cards without breaking", async ({ page }) => {
  await getImportedDeckTotal(page);
  await page.getByRole("button", { name: "Study now" }).first().click();

  for (let cardNumber = 1; cardNumber <= 30; cardNumber += 1) {
    await expect(page.getByTestId("session-progress")).toHaveText(new RegExp(`^${cardNumber} / \\d+$`));
    await page.getByRole("button", { name: "Show answer" }).click();
    await page.getByRole("button", { name: /Easy/ }).click();
  }

  await expect(page.getByTestId("session-progress")).toHaveText(/^31 \/ \d+$/);
});
