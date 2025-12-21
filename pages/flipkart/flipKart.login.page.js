require('dotenv').config();
const { BasePage } = require('../base.page'); // Assuming you have a BasePage class

class FlipKart extends BasePage {
    constructor(page) {
        super(page); // Calling the constructor of the BasePage class

        this.page = page;
        this.loginBtn = this.page.locator('//a[contains(text(), "Login")]'); // Locator for login button
        this.loginText = this.page.locator('a:has-text("Login")'); // More specific locator for the "Login" anchor tag
        // Or, you can use nth() method based on what you want:
        // this.loginText = this.page.locator('text="Login"').nth(0); // Choose the first element
        this.inputName = this.page.locator('[placeholder="Username"]'); // Corrected placeholder locator
    }

    // Navigate to the Flipkart page (with default URL from .env)
    async navigate(url = process.env.FlipKar_URL) {
        await this.page.goto(url); // Navigating to the URL
    }

    // Click on the login button
    async clickOnLoginButton() {
        await this.loginBtn.click(); // Clicking on the login button
        return this; // Returning the page object for method chaining
    }

    // Get the login text from the page
    async getLoginText() {
        const loginText = await this.loginText.textContent(); // Resolving the text content of the element
        return loginText || ''; // Fallback to empty string if element is not found
    }
}

module.exports = { FlipKart };
