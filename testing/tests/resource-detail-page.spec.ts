import { test, expect } from '@playwright/test';

test.describe('ResourceDetailPage', () => {
  test('shows details for Pod: payment-service', async ({ page }) => {
    await page.goto('/resources/1');
    await expect(page.getByText('Pod: payment-service')).toBeVisible();
    await expect(page.getByText('Handles all payment processing and transactions.')).toBeVisible();
    await expect(page.getByText('Pod')).toBeVisible();
    await expect(page.getByText('Status')).toBeVisible();
    await expect(page.getByText('Running')).toBeVisible();
    await expect(page.getByText('Restarts')).toBeVisible();
    await expect(page.getByText('0')).toBeVisible();
    await expect(page.getByText('Node')).toBeVisible();
    await expect(page.getByText('cloud-node-2')).toBeVisible();
    await expect(page.locator('#back-to-resources-btn')).toBeVisible();
  });

  test('shows details for Deployment: frontend', async ({ page }) => {
    await page.goto('/resources/2');
    await expect(page.getByText('Deployment: frontend')).toBeVisible();
    await expect(page.getByText('Manages the scaling and rollout of the frontend application.')).toBeVisible();
    await expect(page.getByText('Deployment')).toBeVisible();
    await expect(page.getByText('Replicas')).toBeVisible();
    await expect(page.getByText('4')).toBeVisible();
    await expect(page.getByText('Strategy')).toBeVisible();
    await expect(page.getByText('RollingUpdate')).toBeVisible();
    await expect(page.getByText('Updated')).toBeVisible();
    await expect(page.getByText('Yes')).toBeVisible();
    await expect(page.locator('#back-to-resources-btn')).toBeVisible();
  });

  test('shows details for Documentation', async ({ page }) => {
    await page.goto('/resources/3');
    await expect(page.getByText('Documentation')).toBeVisible();
    await expect(page.getByText('Comprehensive guides and API usage docs.')).toBeVisible();
    await expect(page.getByText('Docs')).toBeVisible();
    await expect(page.getByText('Pages')).toBeVisible();
    await expect(page.getByText('23')).toBeVisible();
    await expect(page.getByText('Last update')).toBeVisible();
    await expect(page.getByText('2024-05-12')).toBeVisible();
    await expect(page.locator('#back-to-resources-btn')).toBeVisible();
  });

  test('shows not found message for invalid resource id', async ({ page }) => {
    await page.goto('/resources/doesnotexist');
    await expect(page.getByRole('heading', { name: /resource not found/i })).toBeVisible();
    await expect(page.locator('#back-to-resources-btn')).toBeVisible();
    await page.locator('#back-to-resources-btn').click();
    await expect(page).toHaveURL(/\/resources$/);
  });

  test('back to resources button navigates correctly', async ({ page }) => {
    await page.goto('/resources/2');
    await page.locator('#back-to-resources-btn').click();
    await expect(page).toHaveURL(/\/resources$/);
  });
});
