import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "networkidle" });
});

test("anki-style review starts, reveals, and schedules the first card", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Bayna Book One" })).toBeVisible();
  await expect(page.getByText("New").first()).toBeVisible();

  await page.getByRole("button", { name: "Study now" }).first().click();
  await expect(page.getByText("1 / 25")).toBeVisible();
  await expect(page.getByRole("button", { name: "Show answer" })).toBeVisible();

  await page.getByRole("button", { name: "Show answer" }).click();
  await expect(page.getByText("to look at")).toBeVisible();
  await expect(page.getByRole("button", { name: /Again/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Hard/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Good/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Easy/ })).toBeVisible();

  await page.getByRole("button", { name: /Good/ }).click();
  await expect(page.getByText("2 / 25")).toBeVisible();
});

test("keyboard review flow supports reveal and numeric grading", async ({ page }) => {
  await page.getByRole("button", { name: "Study now" }).first().click();

  await page.keyboard.press("Space");
  await expect(page.getByText("to look at")).toBeVisible();

  await page.keyboard.press("3");
  await expect(page.getByText("2 / 25")).toBeVisible();
});

test("full starter deck can be completed", async ({ page }) => {
  await page.getByRole("button", { name: "Study now" }).first().click();

  for (let cardNumber = 1; cardNumber <= 25; cardNumber += 1) {
    await expect(page.getByText(`${cardNumber} / 25`)).toBeVisible();
    await page.getByRole("button", { name: "Show answer" }).click();
    await page.getByRole("button", { name: /Easy/ }).click();
  }

  await expect(page.getByText("Session complete")).toBeVisible();
  await expect(page.getByText("25 cards reviewed.")).toBeVisible();
});
