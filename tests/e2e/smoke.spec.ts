import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('homepage loads without errors', async ({ page }) => {
    // Navigate to the homepage
    const response = await page.goto('/');

    // Check that the response is successful
    expect(response?.status()).toBe(200);

    // Check that the page is not blank
    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    expect(bodyText!.length).toBeGreaterThan(0);

    // Check for basic expected content
    await expect(page.locator('body')).toBeVisible();
  });

  test('page has no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');

    // Give the page time to fully load and execute scripts
    await page.waitForLoadState('networkidle');

    // Check for console errors (allow certain expected errors if any)
    expect(consoleErrors).toEqual([]);
  });

  test('archive page loads without errors', async ({ page }) => {
    const response = await page.goto('/archive');

    expect(response?.status()).toBe(200);

    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    expect(bodyText!.length).toBeGreaterThan(0);
  });
});
