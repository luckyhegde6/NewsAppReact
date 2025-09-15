import { test, expect } from '@playwright/test';
import mockData from './mockData.json';

test.beforeEach(async ({ page }) => {
  // Mock the NewsAPI response
  await page.route('**/top-headlines**', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockData),
    });
  });
});

test.describe('News App Tests', () => {
  test('should display the header', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=News React App')).toBeVisible();
  });

  test('should display news articles', async ({ page }) => {
    await page.goto('/');
    const articles = page.locator('.grid > div');
    await expect(articles).toHaveCount(2);
  });


  test('should have working pagination', async ({ page }) => {
    await page.goto('/');
    const prevButton = page.getByRole('button', { name: /Previous/i });
    const nextButton = page.getByRole('button', { name: /Next/i });

    // Previous should be disabled on first page
    await expect(prevButton).toBeDisabled();

    // Click next and check that articles are still rendered
    await nextButton.click();
    // Wait for articles to be present (simulate re-render)
    const articles = page.locator('.grid > div');
    await expect(articles).toHaveCount(2);
  });

  test('should open article in new tab', async ({ context, page, browserName }) => {
    test.skip(browserName === 'webkit', 'New tab handling is not supported in Webkit headless');
    await page.goto('/');

    const pagePromise = context.waitForEvent('page');
    await page.click('text=Read more');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    expect(newPage.url()).toBe('https://example.com/news/1');
  });
});

test.describe('Mobile Responsiveness', () => {
  test('should show mobile menu button on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const mobileMenuButton = page.locator('button svg[stroke="currentColor"]');
    await expect(mobileMenuButton).toBeVisible();
  });
});