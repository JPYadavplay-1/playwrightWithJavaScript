const { BasePage } = require('../base.page');

class FacebookLoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#pass');
    this.loginBtn = page.locator('button[name="login"]');
  }

  async navigate() {
    await this.goto('/');  // baseURL will be FB_URL from config
    return this;
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}

module.exports = { FacebookLoginPage };
