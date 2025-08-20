// Playwright test for SignupPage
import { test, expect } from '@playwright/test';

test.describe('Signup Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/signup');
  });

  test('renders signup card and UI elements', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Join the Cluster Crew/i })).toBeVisible();
    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: /Create Account/i })).toBeVisible();
    await expect(page.getByText('Already have an account?')).toBeVisible();
    await expect(page.getByRole('link', { name: /Sign in/i })).toBeVisible();
  });

  test('can fill and submit signup form and redirects to home', async ({ page }) => {
    await page.getByPlaceholder('Email').fill('newuser@example.com');
    await page.getByPlaceholder('Password').fill('password123');
    await page.getByRole('button', { name: /Create Account/i }).click();
    // Wait for navigation to home page ("/")
    await expect(page).toHaveURL('/');
  });

  test('Sign in link navigates to login page', async ({ page }) => {
    await page.getByRole('link', { name: /Sign in/i }).click();
    await expect(page).toHaveURL('/login');
  });

  test('accessibility: email input is autofocus', async ({ page }) => {
    const emailInput = page.getByPlaceholder('Email');
    await expect(emailInput).toBeFocused();
  });
});
