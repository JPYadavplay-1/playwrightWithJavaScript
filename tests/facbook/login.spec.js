const { test, expect } = require('../../fixtures/facebook.fixtures');

test('validate facebook login page', async ({ facebookLoginPage }) => {
  await expect(facebookLoginPage.emailInput).toBeVisible();
  await expect(facebookLoginPage.passwordInput).toBeVisible();

  // optional login
  // await facebookLoginPage.login(process.env.FB_USER, process.env.FB_PASSWORD);
});
