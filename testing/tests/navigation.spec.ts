import { test, expect } from '@playwright/test';

test.describe('Top Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows logo and PodPilot brand', async ({ page }) => {
    // Logo image
    await expect(page.locator('img[src="/branding/assets/logo-0.png"]')).toBeVisible();
    // Brand
    await expect(page.getByRole('link', { name: /podpilot home/i })).toBeVisible();
    await expect(page.getByText('PodPilot', { exact: true })).toBeVisible();
  });

  test('navigation links are present and highlight on active page', async ({ page }) => {
    await expect(page.locator('#nav-visualizer')).toBeVisible();
    await expect(page.locator('#nav-resources')).toBeVisible();
    await expect(page.locator('#nav-namespaces')).toBeVisible();
    await expect(page.locator('#nav-settings')).toBeVisible();
    await expect(page.locator('#nav-about')).toBeVisible();
    // Click to activate highlight
    await page.click('#nav-visualizer');
    await expect(page.locator('#nav-visualizer')).toHaveAttribute('class', /bg-secondary/);
    await page.click('#nav-resources');
    await expect(page.locator('#nav-resources')).toHaveAttribute('class', /bg-secondary/);
  });

  test('auth buttons work: Log In and Sign Up', async ({ page }) => {
    await page.click('#nav-login');
    await expect(page).toHaveURL('/login');
    await page.goto('/');
    await page.click('#nav-signup');
    await expect(page).toHaveURL('/signup');
  });

  test('navigation is accessible by keyboard', async ({ page }) => {
    // Tab to Visualizer, then Enter
    for (let i = 0; i < 3; i++) await page.keyboard.press('Tab');
    await expect(page.locator('#nav-visualizer')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL('/visualizer');
  });
});
