import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "networkidle" });
});

test("focus sprint can start, reveal the first card, and advance", async ({ page }) => {
  await page.getByRole("button", { name: "Start learning vocab" }).click();
  await expect(page.getByText("1/10")).toBeVisible();

  await expect(page.getByRole("button", { name: "Reveal answer" })).toBeVisible();

  await page.getByRole("button", { name: "Reveal answer" }).click();
  await expect(page.getByText("to look at")).toBeVisible();
  await expect(page.getByText("إِلَى", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Got it" })).toBeVisible();

  await page.getByRole("button", { name: "Got it" }).click();
  await expect(page.getByText("2/10")).toBeVisible();
  await expect(page.getByRole("button", { name: "Reveal answer" })).toBeVisible();
});

test("focus sprint can complete ten starter vocabulary cards", async ({ page }) => {
  await page.getByRole("button", { name: "Start learning vocab" }).click();

  for (let cardNumber = 1; cardNumber <= 10; cardNumber += 1) {
    await expect(page.getByText(`${cardNumber}/10`)).toBeVisible();
    await page.getByRole("button", { name: "Reveal answer" }).click();
    await page.getByRole("button", { name: "Got it" }).click();
  }

  await expect(page.getByText("Sprint complete")).toBeVisible();
  await expect(page.getByText("10 cards reviewed.")).toBeVisible();
});
