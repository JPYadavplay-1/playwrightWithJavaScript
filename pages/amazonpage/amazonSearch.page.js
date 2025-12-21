require('dotenv').config();
const { BasePage } = require('../base.page');

class AmazonSearchAndAddToKart extends BasePage {
    constructor(page) {
        super(page);
        this.searchBox = page.locator('#twotabsearchtextbox');
        this.autoSuggestions = page.locator('//div[contains(@class, "s-suggestion")]');
    }

    async typeSearchText(search) {
        await this.searchBox.click();
        await this.searchBox.pressSequentially(search, { delay: 100 });
    }

    async waitForSuggestions() {
        await this.autoSuggestions.first().waitFor({ state: "visible", timeout: 2000 });
        return this.autoSuggestions;
    }

    async clickFirstSuggestion() {
        await this.waitForSuggestions();
        await this.autoSuggestions.first().click();
    }

    async clickContainsMatch(keyword) {
        await this.waitForSuggestions();
        const count = await this.autoSuggestions.count();

        for (let i = 0; i < count; i++) {
            const text = await this.autoSuggestions.nth(i).innerText();
            if (text.toLowerCase().includes(keyword.toLowerCase())) {
                await this.autoSuggestions.nth(i).click();
                return text;
            }
        }

        throw new Error(`Suggestion containing "${keyword}" not found`);
    }
}

module.exports = { AmazonSearchAndAddToKart };
