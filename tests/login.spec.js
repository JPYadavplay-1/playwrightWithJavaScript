require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test("validate FB login page", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
 
  // ✔ Correct assertion
  await expect(loginPage.fbLogo).toBeVisible();

  // login
  await loginPage.loginFunctionality();

  await expect(page).toHaveURL(/facebook/);

  await expect(page.getByText('हिन्दी')).toBeVisible();
});
