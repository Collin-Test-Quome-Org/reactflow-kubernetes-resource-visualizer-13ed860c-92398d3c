import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays hero section', async ({ page }) => {
    // The Hero component should be rendered at the top
    // Try to locate hero using heading or unique image background
    const heroSection = page.locator('main').locator('img[src*="hero-0.png"], div[style*="hero-0.png"]');
    // Accept either img or bg div for hero image
    await expect(heroSection.first()).toBeVisible();
  });

  test('displays "Why PodPilot?" with feature cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /why podpilot/i })).toBeVisible();
    // There should be 3 feature cards
    const cards = page.locator('section').locator('div.bg-white.rounded-xl');
    await expect(cards).toHaveCount(3);
    // Feature titles
    await expect(cards.nth(0).getByText('Instant Deploys')).toBeVisible();
    await expect(cards.nth(1).getByText('Zero-Stress Security')).toBeVisible();
    await expect(cards.nth(2).getByText('Real-Time Insights')).toBeVisible();
    // Emoji icons
    await expect(cards.nth(0)).toContainText('🚀');
    await expect(cards.nth(1)).toContainText('🔒');
    await expect(cards.nth(2)).toContainText('📊');
    // Descriptions
    await expect(cards.nth(0)).toContainText(/workloads running in seconds/i);
    await expect(cards.nth(1)).toContainText(/pods locked down/i);
    await expect(cards.nth(2)).toContainText(/visibility at your fingertips/i);
  });

  test('main layout and accessibility basics', async ({ page }) => {
    // Main element should be present
    await expect(page.locator('main')).toBeVisible();
    // All headings have appropriate role
    await expect(page.getByRole('heading', { level: 2 })).toHaveText(/why podpilot/i);
    // Feature cards are accessible
    const cards = page.locator('section').locator('div.bg-white.rounded-xl');
    for (let i = 0; i < 3; i++) {
      await expect(cards.nth(i)).toBeVisible();
      // Check for correct aria attributes as possible (none are explicit; structure is semantic)
    }
  });
});
