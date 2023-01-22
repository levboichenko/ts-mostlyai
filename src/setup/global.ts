import { chromium, PlaywrightTestConfig } from '@playwright/test';
import { TIMEOUTS } from '../test-data/constants';
import App from '../apps/mostlyai';

import { logger } from '../helpers/logger'

module.exports = async (config: PlaywrightTestConfig) => {
  logger.info('Global GDPR cookie set-up started');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const app = new App(page);

  await app.open('https://mostly.ai/');
  await app.locator('.oxy-mega-menu  li > [href="https://mostly.ai/about-us/"]').hover();
  await app.locator('[id="CookieBoxSaveButton"]').click();
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();

  logger.info('Global GDPR cookie set-up finished');
};
