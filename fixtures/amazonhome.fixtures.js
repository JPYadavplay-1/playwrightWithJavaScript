const { test: base, expect } = require('@playwright/test');
const { AmazonLoginPage } = require('../pages/amazonpage/amazonLogin.page');
const { AmazonSearchAndAddToKart } = require('../pages/amazonpage/amazonSearch.page');

const test = base.extend({
  amazonLoginPage: async ({ page }, use) => {
    const amazonPage = new AmazonLoginPage(page);
    await amazonPage.navigate();
    await amazonPage.handleContinueShoppingIfPresent();
    await use(amazonPage);  // page ready to use in tests
  },

  amazonSearchPage: async ({ page }, use) => {
    await use(new AmazonSearchAndAddToKart(page));
  },
});

module.exports = { test, expect };
