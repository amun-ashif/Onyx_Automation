import{expect,Locator,Page} from '@playwright/test'

export class LoginPageObjects {
    //Define all the objects that will be used to interact with the website
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator

    //Init the objects using a constructor
    constructor(page:Page){
        this.page= page
        this.usernameInput = page.locator('input[name="email"]')
        this.passwordInput = page.locator('input[name="password"]')
        this.loginButton = page.locator('text=Login')
        this.errorMessage = page.locator('div.Toastify__toast-body')
    }

    //Define methods for this test
    async visit() {
        await this.page.goto("https://staging.onyx.amun.com/")
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async verfiyError(){
        await expect(this.errorMessage).toContainText('Invalid loginsadsad')
        await this.errorMessage.screenshot({ path:'single_element_screenshot.png'})
    }


}



