import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  workers: 1,
  globalSetup: require.resolve('./src/setup/global.ts'),
  globalTimeout: 3_600_000, // 60m
  reportSlowTests: null,
  timeout: 600_000,
  testDir: './src/__tests__',
  retries: 0,
  reporter: [['html', { open: 'never' }]],
  use: {
    actionTimeout: 60_000,
    // Tell all tests to load signed-in state from 'storageState.json'.
    storageState: 'storageState.json',
    launchOptions: {
      slowMo: 100,
      args: ['--no-sandbox', '--disable-dev-shm-usage', '--ignore-certificate-errors'],
    },
    acceptDownloads: true,
    baseURL: 'https://mostly.ai/',
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1600, height: 1200 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: "on"
  },
};

export default config;
