import { test, expect } from '@playwright/test';

test('TC001 : My first test cast', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.waitForTimeout(3000)
});