import { test, expect } from '@playwright/test';

// Tests for ResourcesListPage

test.describe('Resources List Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/resources');
  });

  test('renders correct page heading and intro', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /explore your kubernetes resources/i })).toBeVisible();
    await expect(page.getByText(/the full list of all your cloud-native wonders/i)).toBeVisible();
  });

  test('shows all resource cards with correct content and types', async ({ page }) => {
    // Card 1: Pod: payment-service
    await expect(page.getByText('Pod: payment-service')).toBeVisible();
    await expect(page.getByText('Pod')).toBeVisible();
    await expect(page.getByText('Handles all payment processing and transactions.')).toBeVisible();
    // Card 2: Deployment: frontend
    await expect(page.getByText('Deployment: frontend')).toBeVisible();
    await expect(page.getByText('Deployment')).toBeVisible();
    await expect(page.getByText('Manages the scaling and rollout of the frontend application.')).toBeVisible();
    // Card 3: Documentation
    await expect(page.getByText('Documentation')).toBeVisible();
    await expect(page.getByText('Docs')).toBeVisible();
    await expect(page.getByText('Comprehensive guides and API usage docs.')).toBeVisible();
  });

  test('each resource card has a View Details button that navigates correctly', async ({ page }) => {
    for (const id of ['1', '2', '3']) {
      const button = page.locator(`#resource-detail-btn-${id}`);
      await expect(button).toBeVisible();
      // Test navigation for each resource card
      await button.first().click();
      await expect(page).toHaveURL(`/resources/${id}`);
      // Go back to list
      await page.click('#back-to-resources-btn');
      await expect(page).toHaveURL('/resources');
    }
  });

  test('is accessible via keyboard navigation', async ({ page }) => {
    // Tab to the first resource button and activate
    await page.keyboard.press('Tab'); // nav menu
    await page.keyboard.press('Tab'); // nav menu
    await page.keyboard.press('Tab'); // nav menu
    await page.keyboard.press('Tab'); // nav menu
    await page.keyboard.press('Tab'); // nav menu
    await page.keyboard.press('Tab'); // nav menu
    await page.keyboard.press('Tab'); // nav login
    await page.keyboard.press('Tab'); // nav signup
    // Tab into resources, cards grid: first card button
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.id);
    expect(["resource-detail-btn-1", "resource-detail-btn-2", "resource-detail-btn-3"]).toContain(focused);
  });
});
