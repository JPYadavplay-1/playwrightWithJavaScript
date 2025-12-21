require('dotenv').config();
const { BasePage } = require('../base.page');

class AmazonLoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.continueShoppingBtn = this.page.getByRole('button', { name: 'Continue shopping' });
        this.amazonLogo = this.page.locator('#nav-logo-sprites');
        this.accountList = this.page.locator('#nav-link-accountList')
        this.signBtn = this.page.locator('[class="nav-action-signin-button"]')
        this.accountListItems = this.page.locator('//span[@class="nav-text"]')
        //this.YourAccontHdr = this.page.locator('//h1[contains(text(),"Your Account")]')
        this.YourAccontHdr = this.page.locator('h1')

    }
    async handleContinueShoppingIfPresent() {
        if (await this.continueShoppingBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
            await this.continueShoppingBtn.click();
            await this.page.waitForLoadState('domcontentloaded');
        }
    }


  async navigate() {
  await this.goto('/');
  return this;
}


    async getAmazonLogo() {
        return await this.amazonLogo.isVisible();
    }


    async hoverOnAccount() {
        return this.accountList.hover()
    }

    async getAccountList(accountName) {
        const items = this.accountListItems;
        const count = await items.count();

        for (let i = 0; i < count; i++) {
            const text = (await items.nth(i).textContent()).trim();
            if (text === accountName) {
                await items.nth(i).click();
                break;
            }
        }

    }



    // async getAccountList(accountName){

    //     const itemList = this.accountListItems
    //     const count = await itemList.count()

    //     for( let i =0 ; i<count ; i++){
    //         const text = (await itemList.nth(i).textContent()).trim()
    //         if(text === accountName){
    //             await itemList.nth(i).click()
    //             break;
    //         }
    //     }
    //     return this;
    // }




    // async getAccountList(accountName) {
    //     await this.accountListItems
    //         .filter({ hasText: accountName })
    //         .first()
    //         .click();
    // }


    async yourAccountHeader() {
        return this.page.locator('h1');
    }

    async clickOnSignIn() {
        return this.signBtn.click()
    }

}

module.exports = { AmazonLoginPage };
