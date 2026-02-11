// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Test folder
  testDir: './tests',

  // Timeouts
  timeout: 5 * 60 * 1000, // 5 minutes per test
  expect: { timeout: 10000 },

  // Execution settings
  retries: 0,
  fullyParallel: true,
  workers: 1,

  // ===============================
  // REPORTERS (VERY IMPORTANT)
  // ===============================
  reporter: [
    ['list'], // Console output
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // HTML report
    ['json', { outputFile: 'report.json' }], // JSON report
    ['junit', { outputFile: 'test-results/results.xml' }], // ✅ XML for Jenkins
    ['allure-playwright'], // Allure report
  ],

  use: {
    headless: true, // ✅ MUST be true for Jenkins

    baseURL: 'https://www.landydev.com',

    actionTimeout: 60000,
    navigationTimeout: 40000,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    viewport: { width: 1366, height: 768 },
    ignoreHTTPSErrors: true,

    launchOptions: {
      slowMo: 0,
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-background-timer-throttling',
        '--disable-renderer-backgrounding'
      ]
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],

  outputDir: 'test-results/',
});
