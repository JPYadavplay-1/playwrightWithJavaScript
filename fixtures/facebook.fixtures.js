const { test: base, expect } = require('@playwright/test');
const { FacebookLoginPage } = require('../pages/facebook/login.page');

const test = base.extend({
  facebookLoginPage: async ({ page }, use) => {
    const fbPage = new FacebookLoginPage(page);
    await fbPage.navigate();
    await use(fbPage);  // page ready for test
  },
});

module.exports = { test, expect };
