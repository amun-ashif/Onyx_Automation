import{expect,Locator,Page} from '@playwright/test'

export class LoginPageObjects {
    //Define all the objects that will be used to interact with the website
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator
    readonly skipLink: Locator

    //Init the objects using a constructor
    constructor(page:Page){
        this.page= page
        this.usernameInput = page.locator('input[name="email"]')
        this.passwordInput = page.locator('input[name="password"]')
        this.loginButton = page.locator('text=Login')
        this.errorMessage = page.locator('div.Toastify__toast-body')
        this.skipLink = page.locator('Skip for now')

    }

    //Define methods for this test
    async visit() {
        await this.page.goto("https://staging.onyx.amun.com/")
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
        await this.skipLink.click()

    }

    async verfiyError(){
        await expect(this.errorMessage).toContainText('Invalid login')

    }


}



