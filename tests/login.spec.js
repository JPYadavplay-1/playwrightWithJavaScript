const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { IncorrectUserCred } = require('../pages/incorrectUserCred.page');
const{FindAccount} = require('../pages/findYoureAccount.page')

test("Validate FB login page with incorrect credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await expect(page).toHaveURL(/facebook/);
  await expect(page.getByText('हिन्दी')).toBeVisible();
  await expect(loginPage.fbLogo).toBeVisible();
  // Login with invalid credentials and wait for navigation
  await loginPage.loginFunctionality();
  const incorrectUserPage = new IncorrectUserCred(page);
  const header = await incorrectUserPage.getFbHeaderText();
  console.log("FB Header:", header);
  await incorrectUserPage.clickOnForgotPasswordLink()
  //await page.waitForTimeout(3000);
  // const inlineErr = await incorrectUserPage.getIncorrectUserText();
  // console.log("Error Text:", inlineErr);
  // await expect(inlineErr).toContain("isn't connected to an account");
  const findAccountPage = new FindAccount(page)
  await findAccountPage.findAccountHeaderText()
  console.log(findAccountPage)
});
