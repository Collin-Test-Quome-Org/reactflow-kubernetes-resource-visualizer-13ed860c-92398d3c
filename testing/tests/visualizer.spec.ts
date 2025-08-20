import { test, expect } from '@playwright/test';

test.describe('Visualizer Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/visualizer');
  });

  test('renders the Visualizer heading and description', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /visualizer/i })).toBeVisible();
    await expect(page.getByText(/interactive visualizer brings your kubernetes resources/i)).toBeVisible();
    await expect(page.getByText(/fake graph for demo purposes/i)).toBeVisible();
  });

  test('shows the demo graph with correct node labels', async ({ page }) => {
    // Just check for node names as text
    await expect(page.getByText('Pod')).toBeVisible();
    await expect(page.getByText('Service')).toBeVisible();
    await expect(page.getByText('Ingress')).toBeVisible();
  });

  test('navigates to Resources and Dashboard via buttons', async ({ page }) => {
    await page.locator('#go-to-resources-btn').click();
    await expect(page).toHaveURL('/resources');
    await page.goto('/visualizer');
    await page.locator('#go-home-btn').click();
    await expect(page).toHaveURL('/');
  });

  test('is accessible via keyboard navigation', async ({ page }) => {
    // Tab to go-to-resources-btn
    for (let i = 0; i < 8; i++) await page.keyboard.press('Tab');
    await expect(page.locator('#go-to-resources-btn')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL('/resources');
  });
});
