import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  use: {
    actionTimeout: 10 * 1000,
    navigationTimeout: 10 * 1000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Amazon-Chrome',
      use: { ...devices['Desktop Chrome'], baseURL: process.env.AMAZON_BASE_URL },
    },
    {
      name: 'Facebook-Chrome',
      use: { ...devices['Desktop Chrome'], baseURL: process.env.FB_URL },
    },
  ],
});
