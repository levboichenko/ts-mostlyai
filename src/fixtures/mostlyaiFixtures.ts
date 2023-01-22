import { test as base, expect } from '@playwright/test';

import MostlyAI from '../apps/mostlyai';

interface TestContextFixture {
  app: MostlyAI;
}

export const test = base.extend<TestContextFixture>({
  app: async ({ page }, use) => {
    const app = new MostlyAI(page);
    await app.open();
    await use(app);
  },
});

export { expect };
