require('dotenv').config();
const { BasePage } = require('../base.page');

class IncorrectUserCred extends BasePage {
    constructor(page) {
        super(page);

        // Locator for the Facebook login header
        this.fbHeader = this.page.locator("//div[contains(text(),'Log in to Facebook')]");
        //this.forgotPassword = this.page.getByText('Forgotten password?');
        this.forgotPassword = this.page.locator("//a[contains(text(),'Forgotten password?')]")


        // Locator for the error message when credentials are incorrect
        this.userIncorrectCredTxt = this.page.locator("//div[contains(text(), 'The email address or mobile number you entered')]");

    }

    // Method to get FB header text
    async getFbHeaderText() {
        //await this.fbHeader.waitFor({ state: 'visible', timeout: 5000 });
        return (await this.fbHeader.textContent()).trim();
    }

    // Method to get the incorrect credentials error text
    async getIncorrectUserText() {
        //await this.userIncorrectCredTxt.waitFor({ state: 'visible', timeout: 5000 });
        return (await this.userIncorrectCredTxt.textContent()).trim();
    }
   async clickOnForgotPasswordLink() {
    // await this.forgotPassword.waitFor({ state: 'visible' });
    await this.forgotPassword.click();
    return this;
}

}

module.exports = { IncorrectUserCred };
