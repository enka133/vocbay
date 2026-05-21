import { expect, test } from "@playwright/test";

test("focus sprint can start, reveal, and complete", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Start focus sprint" }).click();
  await expect(page.getByRole("button", { name: "Reveal answer" })).toBeVisible();

  await page.getByRole("button", { name: "Reveal answer" }).click();
  await expect(page.getByText("Area, district")).toBeVisible();
  await expect(page.getByRole("button", { name: "Got it" })).toBeVisible();

  await page.getByRole("button", { name: "Got it" }).click();
  await expect(page.getByText("Sprint complete")).toBeVisible();
});
