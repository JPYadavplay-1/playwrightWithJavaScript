require('dotenv').config()
const{BasePage}= require('../pages/base.page')
const{AmazonLoginPage}= require('../pages/amazonLogin.page')
const{AmazonSearchAndAddToKart} =require('../pages/amazonSearch.page')
const{test,expect}=require('@playwright/test')

test('validate search and suggestion click', async ({ page }) => {
    const amazonSearch = new AmazonSearchAndAddToKart(page);

    await amazonSearch.navigate();
    const searched= await amazonSearch.enterValueInSearchField("cricket bat")
    console.log(searched)
    await expect(searched).toBe("cricket bat")
    const suggestions = await amazonSearch.waitForSuggestions()
    console.log(suggestions)
    await amazonSearch.clickOnContainsMatch("Cricket")
    //const searchedText = await amazonSearch.clickOnExactAutoSuggestion("cricket bat english willow");
    //await expect(searchedText).toBe("cricket bat english willow")
    //console.log(searchedText)
});
