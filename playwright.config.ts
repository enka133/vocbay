import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./apps/web/e2e",
  testMatch: "*.e2e.ts",
  reporter: "line",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:5173",
    browserName: "chromium",
    hasTouch: true,
    isMobile: true,
    viewport: { width: 390, height: 844 },
  },
});
