import {test, expect } from "@playwright/test"

test.describe.only("transfer funds and make payments", ()=>{
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.type('#user_login', 'username')
        await page.type('#user_password','password')
        await page.click('text=Sign in')
    })

    test('Transfer amount',async ({page}) => {
        await page.click('#transfer_funds_tab')
        await page.selectOption('#tf_fromAccountId','2')
        await page.selectOption('#tf_toAccountId','3')
        await page.type('tf_Amount', '500')
        await page.type('tf_description', 'Test Description')
        await page.click('text=Submit')
        
        const boardHeader = await page.locator('h2.board-header')
        await expect(boardHeader).toContainText('Verify')
        await page.click('text=Submit')

        const message = await page.locator('.alert-success')
        await expect(message).toContainText('You successfully submitted your transaction')
    })
})
