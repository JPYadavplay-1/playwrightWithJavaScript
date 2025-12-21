require('dotenv').config();
const { FlipKart } = require('../pages/flipKart.login.page'); // Import the FlipKart page object

const { test, expect } = require('@playwright/test');

test('validate flipkartPage', async ({ page }) => {
    const flipKartPage = new FlipKart(page); // Create an instance of FlipKart class

    await flipKartPage.navigate(); // Navigate to Flipkart

    // Click on the login button
    await flipKartPage.clickOnLoginButton();

    // Get the login text and validate it
    const loginTxt = await flipKartPage.getLoginText();
    expect(loginTxt).toBe('Login'); // Assert that the login text is 'Login'
});
