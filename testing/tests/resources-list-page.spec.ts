import { test, expect } from '@playwright/test';

// All selectors are stable: prefer button id="resource-detail-btn-<id>" for resource details

test.describe('ResourcesListPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/resources');
  });

  test('renders all Kubernetes resources with correct titles and types', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /explore your kubernetes resources/i })).toBeVisible();
    await expect(page.getByText('The full list of all your cloud-native wonders. Dive in, inspect, and optimize!')).toBeVisible();

    // Pod: payment-service
    await expect(page.getByText('Pod: payment-service')).toBeVisible();
    await expect(page.getByText('Pod')).toBeVisible();
    await expect(page.getByText('Handles all payment processing and transactions.')).toBeVisible();
    // Deployment: frontend
    await expect(page.getByText('Deployment: frontend')).toBeVisible();
    await expect(page.getByText('Deployment')).toBeVisible();
    await expect(page.getByText('Manages the scaling and rollout of the frontend application.')).toBeVisible();
    // Documentation
    await expect(page.getByText('Documentation')).toBeVisible();
    await expect(page.getByText('Docs')).toBeVisible();
    await expect(page.getByText('Comprehensive guides and API usage docs.')).toBeVisible();
  });

  test('resource detail buttons navigate to correct detail pages', async ({ page }) => {
    // Pod
    await page.getByRole('button', { name: 'View Details' }).locator('#resource-detail-btn-1').click();
    await expect(page).toHaveURL(/\/resources\/1$/);
    await expect(page.getByText('Pod: payment-service')).toBeVisible();
    // Go back to resources
    await page.getByRole('button', { name: /back to resources/i }).click();
    await expect(page).toHaveURL(/\/resources$/);
    // Deployment
    await page.getByRole('button', { name: 'View Details' }).locator('#resource-detail-btn-2').click();
    await expect(page).toHaveURL(/\/resources\/2$/);
    await expect(page.getByText('Deployment: frontend')).toBeVisible();
    await page.getByRole('button', { name: /back to resources/i }).click();
    await expect(page).toHaveURL(/\/resources$/);
    // Docs
    await page.getByRole('button', { name: 'View Details' }).locator('#resource-detail-btn-3').click();
    await expect(page).toHaveURL(/\/resources\/3$/);
    await expect(page.getByText('Documentation')).toBeVisible();
    await page.getByRole('button', { name: /back to resources/i }).click();
    await expect(page).toHaveURL(/\/resources$/);
  });

  test('all resource detail buttons are accessible and focusable', async ({ page }) => {
    await expect(page.locator('#resource-detail-btn-1')).toBeVisible();
    await expect(page.locator('#resource-detail-btn-2')).toBeVisible();
    await expect(page.locator('#resource-detail-btn-3')).toBeVisible();
    await page.locator('#resource-detail-btn-1').focus();
    await expect(page.locator('#resource-detail-btn-1')).toBeFocused();
  });
});
