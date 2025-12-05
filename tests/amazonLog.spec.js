require('dotenv').config();
const { AmazonLoginPage } = require('../pages/amazonLogin.page');
const { test, expect } = require('@playwright/test');

test('validate amazon login page', async ({ page }) => {
    const amazonPage = new AmazonLoginPage(page);

    // Navigate
    await amazonPage.navigate();

    // Validate logo visible
    expect(await amazonPage.getAmazonLogo()).toBeTruthy();

    // Hover on Account & Lists menu
    await amazonPage.hoverOnAccount();

    // Validate that account dropdown becomes visible
    //expect(await amazonPage.accountListItems.first().isVisible()).toBeTruthy();

    // Validate text BEFORE clicking
    const targetItem = amazonPage.accountListItems.filter({ hasText: "Your Account" });
    await expect(targetItem.first()).toHaveText(/Your Account/i);

    // Click "Your Account"
    await amazonPage.getAccountList("Your Account");

    // Validate that "Your Account" page header is correct
  const header = await amazonPage.yourAccountHeader(); // <-- MUST AWAIT THIS
  await expect(header).toContainText("Your Account");



});
