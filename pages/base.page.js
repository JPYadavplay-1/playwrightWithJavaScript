require('dotenv').config();   // correct

class BasePage {
    constructor(page) {        // page = browser tab from Playwright
        this.page = page;      // store tab inside class
    }

    async goto(url) {
        await this.page.goto(url);   // we will pass process.env.FB_URL from LoginPage or test
    }

    async title() {
        return this.page.title();
    }
}

module.exports = { BasePage };  // correct export
