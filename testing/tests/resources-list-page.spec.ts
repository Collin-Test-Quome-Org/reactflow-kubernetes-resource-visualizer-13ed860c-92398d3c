// Playwright test for ResourcesListPage
import { test, expect } from '@playwright/test';

test.describe('Resources List Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/resources');
  });

  test('renders page heading and intro', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Explore Your Kubernetes Resources/i })
    ).toBeVisible();
    await expect(
      page.getByText('The full list of all your cloud-native wonders. Dive in, inspect, and optimize!')
    ).toBeVisible();
  });

  test('shows all resource cards', async ({ page }) => {
    const cards = page.locator('.shadow');
    await expect(cards).toHaveCount(3);
    await expect(page.getByText('Pod: payment-service')).toBeVisible();
    await expect(page.getByText('Deployment: frontend')).toBeVisible();
    await expect(page.getByText('Documentation')).toBeVisible();
  });

  test('each resource card shows type and description', async ({ page }) => {
    await expect(page.getByText('Pod')).toBeVisible();
    await expect(page.getByText('Handles all payment processing and transactions.'))
      .toBeVisible();
    await expect(page.getByText('Deployment')).toBeVisible();
    await expect(page.getByText('Manages the scaling and rollout of the frontend application.'))
      .toBeVisible();
    await expect(page.getByText('Docs')).toBeVisible();
    await expect(page.getByText('Comprehensive guides and API usage docs.')).toBeVisible();
  });

  test('"View Details" navigates to correct detail page', async ({ page }) => {
    await page.getByRole('button', { name: /View Details/i }).nth(0).click();
    await expect(page).toHaveURL(/\/resources\/1$/);
    await expect(page.getByRole('heading', { name: /Pod: payment-service/i })).toBeVisible();
    // Go back
    await page.getByRole('button', { name: /Back to Resources/i }).click();
    await expect(page).toHaveURL('/resources');
    // Test second card
    await page.getByRole('button', { name: /View Details/i }).nth(1).click();
    await expect(page).toHaveURL(/\/resources\/2$/);
    await expect(page.getByRole('heading', { name: /Deployment: frontend/i })).toBeVisible();
  });

  test('accessibility: all "View Details" buttons are focusable', async ({ page }) => {
    const buttons = page.getByRole('button', { name: /View Details/i });
    await expect(buttons.nth(0)).toBeFocusable();
    await expect(buttons.nth(1)).toBeFocusable();
    await expect(buttons.nth(2)).toBeFocusable();
  });
});
