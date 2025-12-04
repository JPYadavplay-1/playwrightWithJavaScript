require('dotenv').config();

const { BasePage } = require('./base.page');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = this.page.locator('#email');
    this.passwordInput = this.page.locator('#pass');
    this.loginBtn = this.page.locator('button[name="login"]');
    this.fbLogo = this.page.locator('img[alt="Facebook"]');
  }

  async navigate(url = process.env.FB_URL) {
    await this.goto(url);
  }
 
  async loginFunctionality(
    username = process.env.FB_USERNAME,
    password = process.env.FB_PASSWORD
  ) {
    await this.fbLogo.waitFor();  // ✔ correct method name
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };
