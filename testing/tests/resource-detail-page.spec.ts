// Playwright test for ResourceDetailPage
import { test, expect } from '@playwright/test';

test.describe('Resource Detail Page', () => {
  test('shows Pod details correctly', async ({ page }) => {
    await page.goto('/resources/1');
    await expect(page.getByRole('heading', { name: /Pod: payment-service/i })).toBeVisible();
    await expect(page.getByText('Pod')).toBeVisible();
    await expect(page.getByText('Handles all payment processing and transactions.')).toBeVisible();
    await expect(page.getByText('Status')).toBeVisible();
    await expect(page.getByText('Running')).toBeVisible();
    await expect(page.getByText('Restarts')).toBeVisible();
    await expect(page.getByText('0')).toBeVisible();
    await expect(page.getByText('Node')).toBeVisible();
    await expect(page.getByText('cloud-node-2')).toBeVisible();
  });

  test('shows Deployment details correctly', async ({ page }) => {
    await page.goto('/resources/2');
    await expect(page.getByRole('heading', { name: /Deployment: frontend/i })).toBeVisible();
    await expect(page.getByText('Deployment')).toBeVisible();
    await expect(page.getByText('Manages the scaling and rollout of the frontend application.')).toBeVisible();
    await expect(page.getByText('Replicas')).toBeVisible();
    await expect(page.getByText('4')).toBeVisible();
    await expect(page.getByText('Strategy')).toBeVisible();
    await expect(page.getByText('RollingUpdate')).toBeVisible();
    await expect(page.getByText('Updated')).toBeVisible();
    await expect(page.getByText('Yes')).toBeVisible();
  });

  test('shows Documentation details correctly', async ({ page }) => {
    await page.goto('/resources/3');
    await expect(page.getByRole('heading', { name: /Documentation/i })).toBeVisible();
    await expect(page.getByText('Docs')).toBeVisible();
    await expect(page.getByText('Comprehensive guides and API usage docs.')).toBeVisible();
    await expect(page.getByText('Pages')).toBeVisible();
    await expect(page.getByText('23')).toBeVisible();
    await expect(page.getByText('Last update')).toBeVisible();
    await expect(page.getByText('2024-05-12')).toBeVisible();
  });

  test('Back to Resources button works', async ({ page }) => {
    await page.goto('/resources/1');
    await page.getByRole('button', { name: /Back to Resources/i }).click();
    await expect(page).toHaveURL('/resources');
  });

  test('shows error message for non-existent resource', async ({ page }) => {
    await page.goto('/resources/9999');
    await expect(page.getByRole('heading', { name: /Resource Not Found/i })).toBeVisible();
    const backButton = page.getByRole('button', { name: /Back to Resources/i });
    await expect(backButton).toBeVisible();
    await backButton.click();
    await expect(page).toHaveURL('/resources');
  });
});
