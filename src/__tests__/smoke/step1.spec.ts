import { expect, test } from '../../fixtures/mostlyaiFixtures';

/**
 * TEST CASE 1
 * 
 * Go to page https://mostly.ai/
 * Verify if following bookmarks are being visible – Platform, Synthetic data, Resources, Company
 */

test('Verify bookmarks visibility', async ({ app }) => {
  const { navbar } = app;

  await app.open();
  expect(await navbar.getPlatformBookmark()).toBeTruthy();
  expect(await navbar.getSyncheticDataBookmark()).toBeTruthy();
  expect(await navbar.getResourcesBookmark()).toBeTruthy();
  expect(await navbar.getCompanyBookmark()).toBeTruthy();
});
