import { test, expect } from '@playwright/test';

// Navigation bar tests

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders NavBar with logo and links', async ({ page }) => {
    // Logo should be visible
    const logo = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    // Brand text should be visible on sm+ screens
    const brandText = page.locator('span', { hasText: 'PodPilot' });
    await expect(brandText).toBeVisible();
    // About, Pricing, Log In, Sign Up links
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Pricing' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log In' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigates to About page via nav', async ({ page }) => {
    await page.click('#nav-about');
    await expect(page).toHaveURL('/about');
    // About page content check, fallback to heading or text
    await expect(page.locator('h1, h2, h3')).toContainText([/about/i]);
  });

  test('navigates to Pricing page via nav', async ({ page }) => {
    await page.click('#nav-pricing');
    await expect(page).toHaveURL('/pricing');
    await expect(page.locator('h1, h2, h3')).toContainText([/pricing/i]);
  });

  test('navigates to Log In and Sign Up pages via nav', async ({ page }) => {
    await page.click('#nav-login');
    await expect(page).toHaveURL('/login');
    await expect(page.locator('h1, h2, h3, form')).toContainText([/log\s*in|sign\s*in/i]);
    await page.goto('/');
    await page.click('#nav-signup');
    await expect(page).toHaveURL('/signup');
    await expect(page.locator('h1, h2, h3, form')).toContainText([/sign\s*up|register/i]);
  });

  test('active link highlights properly', async ({ page }) => {
    // Navigate to /about and check About link gets highlight class
    await page.click('#nav-about');
    const aboutLink = page.locator('#nav-about');
    await expect(aboutLink).toHaveClass(/bg-secondary/);
    // Navigate to /pricing and check Pricing link gets highlight
    await page.click('#nav-pricing');
    const pricingLink = page.locator('#nav-pricing');
    await expect(pricingLink).toHaveClass(/bg-secondary/);
  });
});
