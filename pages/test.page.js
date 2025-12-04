require('dotenv').config();
const{ BasePage}= require('./base.page')

class Test extends BasePage{
    constructor(page){
        super(page)
        this.email = this.page.locator('#email')
        this.pass = this.page.locator('#pass')
        this.loginBtn = this.page.locator('button[name="login"]')
    }

    async navigate(url = process.env.FB_URL){
        await this.goto(url)
    }

    async LoginFun(
        user=process.env.FB_USERNAME,
        pass = process.env.FB_PASSWORD
    ){
        await this.email.fill(user)
        await this.pass.fill(pass)
        await this.loginBtn.click()
    }

}
module.exports ={Test}