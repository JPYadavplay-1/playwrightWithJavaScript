require('dotenv').config()
const{Test}=require('../pages/test.page')
const{ test , expect} = require('@playwright/test')

test('vaidate test', async({page})=>{
    const tes = new Test(page)
    await tes.navigate()
    const logo = page.locator('img[alt="Facebook"]')
    await expect(logo).toBeVisible()
    await tes.LoginFun()

})