import { test, expect } from '@playwright/test';

test.describe('Resource Detail Page', () => {
  const resources = [
    {
      id: '1',
      name: 'Pod: payment-service',
      type: 'Pod',
      description: 'Handles all payment processing and transactions.',
      details: [
        { key: 'Status', value: 'Running' },
        { key: 'Restarts', value: '0' },
        { key: 'Node', value: 'cloud-node-2' },
      ],
    },
    {
      id: '2',
      name: 'Deployment: frontend',
      type: 'Deployment',
      description: 'Manages the scaling and rollout of the frontend application.',
      details: [
        { key: 'Replicas', value: '4' },
        { key: 'Strategy', value: 'RollingUpdate' },
        { key: 'Updated', value: 'Yes' },
      ],
    },
    {
      id: '3',
      name: 'Documentation',
      type: 'Docs',
      description: 'Comprehensive guides and API usage docs.',
      details: [
        { key: 'Pages', value: '23' },
        { key: 'Last update', value: '2024-05-12' },
      ],
    },
  ];

  for (const resource of resources) {
    test(`shows correct details for resource ID ${resource.id}`, async ({ page }) => {
      await page.goto(`/resources/${resource.id}`);
      await expect(page.getByRole('heading', { name: new RegExp(resource.name, 'i') })).toBeVisible();
      await expect(page.getByText(resource.type)).toBeVisible();
      await expect(page.getByText(resource.description)).toBeVisible();
      for (const detail of resource.details) {
        await expect(page.getByText(detail.key)).toBeVisible();
        await expect(page.getByText(new RegExp(detail.value))).toBeVisible();
      }
      // Back to Resources button
      await expect(page.locator('#back-to-resources-btn')).toBeVisible();
    });
  }

  test('Back to Resources button navigates to resources list', async ({ page }) => {
    await page.goto('/resources/2');
    await page.click('#back-to-resources-btn');
    await expect(page).toHaveURL('/resources');
  });

  test('shows not found message for invalid resource id', async ({ page }) => {
    await page.goto('/resources/does-not-exist');
    await expect(page.getByRole('heading', { name: /resource not found/i })).toBeVisible();
    await expect(page.locator('#back-to-resources-btn')).toBeVisible();
    await page.click('#back-to-resources-btn');
    await expect(page).toHaveURL('/resources');
  });
});
