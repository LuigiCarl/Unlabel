import { expect, test } from "@playwright/test";

test("keeps five interactive labels on the home page", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await expect(page.locator(".label-stage")).toBeVisible();
  await expect(page.locator(".label-rail button")).toHaveCount(5);
  await expect(page.getByText("/ 05 challenged")).toBeVisible();
});
