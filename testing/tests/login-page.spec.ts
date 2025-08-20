// Playwright test for LoginPage
import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('renders login card and UI elements', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Welcome Back, Cloud Wrangler/i })).toBeVisible();
    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: /Sign In/i })).toBeVisible();
    await expect(page.getByText('Not a member?')).toBeVisible();
    await expect(page.getByRole('link', { name: /Sign up/i })).toBeVisible();
  });

  test('can fill and submit login form and redirects to home', async ({ page }) => {
    await page.getByPlaceholder('Email').fill('testuser@example.com');
    await page.getByPlaceholder('Password').fill('password123');
    await page.getByRole('button', { name: /Sign In/i }).click();
    // Wait for navigation to home page ("/")
    await expect(page).toHaveURL('/');
  });

  test('Sign up link navigates to signup page', async ({ page }) => {
    await page.getByRole('link', { name: /Sign up/i }).click();
    await expect(page).toHaveURL('/signup');
  });

  test('accessibility: email input is autofocus', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email');
    await expect(emailInput).toBeFocused();
  });
});
