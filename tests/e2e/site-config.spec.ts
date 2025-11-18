import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test.describe('Site Config Tests', () => {
  const originalConfigPath = path.join(process.cwd(), 'src/siteConfig.json');
  let originalConfig: string;

  test.beforeAll(() => {
    // Backup original config
    originalConfig = fs.readFileSync(originalConfigPath, 'utf-8');
  });

  test.afterAll(() => {
    // Restore original config
    fs.writeFileSync(originalConfigPath, originalConfig);
  });

  test('displays correct number of icon links', async ({ page }) => {
    // Load the base test config
    const testConfig = fs.readFileSync(
      path.join(process.cwd(), 'tests/fixtures/siteConfig-base.json'),
      'utf-8'
    );
    fs.writeFileSync(originalConfigPath, testConfig);

    await page.goto('/');

    const iconLinks = page.getByTestId('icon-link');
    await expect(iconLinks).toHaveCount(2);
  });

  test('displays correct number of custom links', async ({ page }) => {
    const testConfig = fs.readFileSync(
      path.join(process.cwd(), 'tests/fixtures/siteConfig-base.json'),
      'utf-8'
    );
    fs.writeFileSync(originalConfigPath, testConfig);

    await page.goto('/');

    const customLinks = page.getByTestId('custom-link');
    await expect(customLinks).toHaveCount(3);
  });

  test('displays custom link text and descriptions correctly', async ({ page }) => {
    const testConfig = fs.readFileSync(
      path.join(process.cwd(), 'tests/fixtures/siteConfig-base.json'),
      'utf-8'
    );
    fs.writeFileSync(originalConfigPath, testConfig);

    await page.goto('/');

    // Check first link (with description)
    await expect(page.getByText('First Link')).toBeVisible();
    await expect(page.getByText('First link description')).toBeVisible();

    // Check second link (without description)
    await expect(page.getByText('Second Link')).toBeVisible();

    // Check third link (with description)
    await expect(page.getByText('Third Link')).toBeVisible();
    await expect(page.getByText('Third link description')).toBeVisible();
  });

  test('respects isBlogDisplayed flag when true', async ({ page }) => {
    const testConfig = fs.readFileSync(
      path.join(process.cwd(), 'tests/fixtures/siteConfig-base.json'),
      'utf-8'
    );
    fs.writeFileSync(originalConfigPath, testConfig);

    await page.goto('/');

    // Posts section should be visible
    const postsSection = page.getByTestId('posts-section');
    await expect(postsSection).toBeVisible();
  });

  test('respects isBlogDisplayed flag when false', async ({ page }) => {
    const testConfig = fs.readFileSync(
      path.join(process.cwd(), 'tests/fixtures/siteConfig-no-blog.json'),
      'utf-8'
    );
    fs.writeFileSync(originalConfigPath, testConfig);

    await page.goto('/');

    // Posts section should not be present
    const postsSection = page.getByTestId('posts-section');
    await expect(postsSection).not.toBeVisible();
  });

  test('respects contactFormEnabled flag when true', async ({ page }) => {
    const testConfig = fs.readFileSync(
      path.join(process.cwd(), 'tests/fixtures/siteConfig-base.json'),
      'utf-8'
    );
    fs.writeFileSync(originalConfigPath, testConfig);

    await page.goto('/');

    // Contact section should be visible
    const contactSection = page.getByTestId('contact-section');
    await expect(contactSection).toBeVisible();
  });

  test('respects contactFormEnabled flag when false', async ({ page }) => {
    const testConfig = fs.readFileSync(
      path.join(process.cwd(), 'tests/fixtures/siteConfig-no-contact.json'),
      'utf-8'
    );
    fs.writeFileSync(originalConfigPath, testConfig);

    await page.goto('/');

    // Contact section should not be present
    const contactSection = page.getByTestId('contact-section');
    await expect(contactSection).not.toBeVisible();
  });
});
