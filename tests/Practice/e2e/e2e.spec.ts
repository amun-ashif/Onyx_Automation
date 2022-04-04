import {test, expect} from '@playwright/test'

test.describe.parallel("Login/Logout flow",()=>{
    
    test.beforeEach(async ({page}) =>{
        await page.goto('https://opensource-demo.orangehrmlive.com/')
    })

    test('Test Username Error message',async ({page}) => {
        
        await page.click('#btnLogin')
        const errorMessage =await page.locator('#spanMessage')
        await expect(errorMessage).toContainText("Username cannot be empty")
    })

    test('Test password Error message', async ({page})=>{
        await page.fill('#txtUsername','Admin')
        await page.click('#btnLogin')
        const errorMessage = await page.locator('#spanMessage')
        await expect(errorMessage).toContainText("Password cannot be empty")
    })

    test('login with valid credentials', async ({page})=>{
        await page.fill('#txtUsername','Admin')
        await page.fill('#txtPassword', 'admin123')
        await page.click('input#btnLogin')
        const loggedInName = await page.locator('#welcome')
        await expect(loggedInName).toContainText('Welcome Shubham')
        await loggedInName.click()
        await page.click('text=Logout')
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        
    })
})