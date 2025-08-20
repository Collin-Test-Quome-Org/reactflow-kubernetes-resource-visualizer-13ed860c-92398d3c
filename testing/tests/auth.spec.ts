import { test, expect } from '@playwright/test';

test.describe('Auth Pages', () => {
  test('SignupPage - can fill form, submit, and redirect to home', async ({ page }) => {
    await page.goto('/signup');
    await expect(page.getByRole('heading', { name: /join the cluster crew/i })).toBeVisible();
    await page.fill('#signup-email', 'testuser@example.com');
    await page.fill('#signup-password', 'supersecret');
    await page.click('#signup-btn');
    // Wait for navigation
    await expect(page).toHaveURL('/');
  });

  test('SignupPage - already have account link navigates to login', async ({ page }) => {
    await page.goto('/signup');
    await page.getByRole('link', { name: /sign in/i }).click();
    await expect(page).toHaveURL('/login');
  });

  test('LoginPage - can fill form, submit, and redirect to home', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: /welcome back, cloud wrangler/i })).toBeVisible();
    await page.fill('#login-email', 'testuser@example.com');
    await page.fill('#login-password', 'supersecret');
    await page.click('#login-btn');
    await expect(page).toHaveURL('/');
  });

  test('LoginPage - not a member link navigates to signup', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('link', { name: /sign up/i }).click();
    await expect(page).toHaveURL('/signup');
  });

  test('SignupPage - field required validation', async ({ page }) => {
    await page.goto('/signup');
    await page.click('#signup-btn');
    // Should remain on page (form required fields)
    await expect(page).toHaveURL('/signup');
    await expect(page.locator('#signup-email')).toBeVisible();
    await expect(page.locator('#signup-password')).toBeVisible();
  });

  test('LoginPage - field required validation', async ({ page }) => {
    await page.goto('/login');
    await page.click('#login-btn');
    await expect(page).toHaveURL('/login');
    await expect(page.locator('#login-email')).toBeVisible();
    await expect(page.locator('#login-password')).toBeVisible();
  });
});
