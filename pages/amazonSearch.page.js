require('dotenv').config();
const { TIMEOUT } = require('dns');
const { AmazonLoginPage } = require('../pages/amazonLogin.page');

class AmazonSearchAndAddToKart extends AmazonLoginPage {
    constructor(page) {
        super(page);

        // this.searchBox = page.locator('#twotabsearchtextbox');
        // this.autoSuggestions = page.locator('//div[@id="suggestions"]/div');
        this.searchBox = page.locator('#twotabsearchtextbox');
        this.autoSuggestions = page.locator('//div[contains(@class, "s-suggestion")]');

    }

    


    // async clickAndSearchOnSearchBox(search) {
    //     // 1. Click search box
    //     await this.searchBox.click();

    //     // 2. Type text
    //     await this.searchBox.fill(search);

    //     // 3. Wait for autosuggestions
    //     await this.autoSuggestions.first().waitFor();

    //     // 4. Click first matching suggestion
    //     const suggestionCount = await this.autoSuggestions.count();

    //     for (let i = 0; i < suggestionCount; i++) {
    //         const text = await this.autoSuggestions.nth(i).textContent();

    //         if (text.toLowerCase().includes(search.toLowerCase())) {
    //             await this.autoSuggestions.nth(i).click();
    //             break;
    //         }
    //     }
    // }

    async clickAndSearchOnSearchBox(search) {
    // 1. Click search box
    await this.searchBox.click();

    // 2. Type slowly so suggestions appear
    await this.searchBox.pressSequentially(search, { delay: 100 });

    // 3. Wait for autosuggestions
    await this.autoSuggestions.first().waitFor();

    // 4. Loop suggestions to find match
    const suggestionCount = await this.autoSuggestions.count();

    for (let i = 0; i < suggestionCount; i++) {
        const text = await this.autoSuggestions.nth(i).textContent();

        if (text.toLowerCase().includes(search.toLowerCase())) {
            await this.autoSuggestions.nth(i).click();
            break;
        }
    }

}

async enterValueInSearchField(text){
    await this.searchBox.fill(text)
    return await this.searchBox.inputValue()
}

async waitForSuggestions(){
    await this.autoSuggestions.first().waitFor({state:"visible",timeout:1000})
    return this.autoSuggestions
}

async waitForSuggestions() {
    await this.autoSuggestions.first().waitFor({ state: "visible", timeout: 2000 });

    const count = await this.autoSuggestions.count();
    const texts = [];

    for (let i = 0; i < count; i++) {
        const text = await this.autoSuggestions.nth(i).innerText();
        texts.push(text);
    }

    return texts;
}

async clickOnFirstAutoSuggestions(){
    await this.autoSuggestions.first().waitFor({state:"visible",timeOut:2000})
    await this.autoSuggestions.first().click()
    return this
}

async clickOnExactAutoSuggestion(exactMatch) {

    // 1️⃣ Wait until at least ONE suggestion appears
    await this.autoSuggestions.first().waitFor({ state: "visible", timeout: 2000 });

    // 2️⃣ Count suggestions
    const count = await this.autoSuggestions.count();

    // 3️⃣ Variable to store matched text
    let foundText = null;

    // 4️⃣ Loop through all suggestions
    for (let i = 0; i < count; i++) {
        const text = await this.autoSuggestions.nth(i).innerText();

        // 5️⃣ Exact match?
        if (exactMatch.trim() === text.trim()) {

            // ❌ ERROR IN YOUR CODE:
            // await this.autoSuggestions.nth(i).first().click()
            // nth(i) already gives ONE element → no .first() needed

            // ✅ Correct:
            await this.autoSuggestions.nth(i).click();

            foundText = text;
            break; // exit loop
        }
    }

    return foundText;
}

async clickOnContainsMatch(keyword) {
    // 1️⃣ Wait for suggestions
    await this.autoSuggestions.first().waitFor({
        state: "visible",
        timeout: 2000
    });

    const count = await this.autoSuggestions.count();

    // 2️⃣ Loop suggestions
    for (let i = 0; i < count; i++) {
        let text = await this.autoSuggestions.nth(i).innerText();

        // 3️⃣ Compare (case-insensitive)
        if (text.toLowerCase().includes(keyword.toLowerCase())) {
            await this.autoSuggestions.nth(i).click();
            return text; // return clicked text
        }
    }

    // 4️⃣ If not found, throw error
    throw new Error(`Contains match "${keyword}" NOT found`);
}







}








module.exports = { AmazonSearchAndAddToKart };
