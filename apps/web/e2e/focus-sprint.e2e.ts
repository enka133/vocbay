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
  const total = await getImportedDeckTotal(page);

  await page.getByRole("button", { name: "Study now" }).first().click();
  await expect(page.getByTestId("session-progress")).toHaveText(`1 / ${total}`);
  await expect(page.getByRole("button", { name: "Show answer" })).toBeVisible();

  await page.getByRole("button", { name: "Show answer" }).click();
  await expect(page.getByText("To look")).toBeVisible();
  await expect(page.getByRole("button", { name: /Again/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Hard/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Good/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Easy/ })).toBeVisible();

  await page.getByRole("button", { name: /Good/ }).click();
  await expect(page.getByTestId("session-progress")).toHaveText(`2 / ${total}`);
});

test("keyboard review flow supports reveal and numeric grading", async ({ page }) => {
  const total = await getImportedDeckTotal(page);
  await page.getByRole("button", { name: "Study now" }).first().click();

  await page.keyboard.press("Space");
  await expect(page.getByText("To look")).toBeVisible();

  await page.keyboard.press("3");
  await expect(page.getByTestId("session-progress")).toHaveText(`2 / ${total}`);
});

test("imported deck can review the first 30 cards without breaking", async ({ page }) => {
  const total = await getImportedDeckTotal(page);
  await page.getByRole("button", { name: "Study now" }).first().click();

  for (let cardNumber = 1; cardNumber <= 30; cardNumber += 1) {
    await expect(page.getByTestId("session-progress")).toHaveText(`${cardNumber} / ${total}`);
    await page.getByRole("button", { name: "Show answer" }).click();
    await page.getByRole("button", { name: /Easy/ }).click();
  }

  await expect(page.getByTestId("session-progress")).toHaveText(`31 / ${total}`);
});
