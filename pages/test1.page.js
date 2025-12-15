require('dotenv').config()

class login{
    constructor(page){
        this.page =page

        this.inputEmail = this.page.locator('lofin')
        this.password = this.page.locator('password')
    }

}

    
