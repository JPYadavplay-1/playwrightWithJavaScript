require('dotenv').config()

const {LoginPage} =require('../pages/login.page')
const{IncorrectUserCred} = require('../pages/incorrectUserCred.page')

class FindAccount extends LoginPage{
    constructor(page){
        super(page)
        this.findAccountHdr = this.page.locator('[class="uiHeaderTitle"]')
    }

   async findAccountHeaderText() {
    //await this.findAccountHdr.waitFor({ state: 'visible' });
    const text = await this.findAccountHdr.textContent();
    return text.trim();
}


}
module.exports ={FindAccount}