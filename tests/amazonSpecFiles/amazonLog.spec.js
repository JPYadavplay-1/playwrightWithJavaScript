const { test, expect } = require('../../fixtures/amazonhome.fixtures');

test('validate amazon login page', async ({ amazonLoginPage }) => {
  await expect(amazonLoginPage.amazonLogo).toBeVisible();
  await amazonLoginPage.hoverOnAccount();
  await amazonLoginPage.getAccountList('Your Account');
  const header = await amazonLoginPage.yourAccountHeader();
  await expect(header).toBeVisible();
});
