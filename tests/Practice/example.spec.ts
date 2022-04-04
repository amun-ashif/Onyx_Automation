import{test, expect} from '@playwright/test'
import{loadHomepage,assertTitle} from '../../helpers'


test('first PW test', async ({page}) => {
    await page.goto('https://www.example.com')
    const pageTitle= await page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')
})
test.describe.parallel('Orange HRM test', ()=>{
    test('Clicking on elements', async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/')
        await page.click('#btnLogin')
        const errorMessage = await page.locator('#spanMessage')
        await expect(errorMessage).toContainText("Username cannot be empty sfdsf")
    
    })
    
    test('Working with inputs', async({page}) =>{
        await page.goto('https://opensource-demo.orangehrmlive.com/')
        await page.type('#txtUsername','Admin')
        await page.type('#txtPassword', 'admin123')
        await page.click('text=Login')
    })
})




test.describe('Hooks', () =>{
test.beforeEach(async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/')
})

test("Screenshots",async ({page}) => {
    await page.screenshot({path:'screenshot.png', fullPage: true})
})

test("screenshot single element", async ({page})=> {
    const element = await page.$('#btnLogin')
    await element.screenshot({ path:'single_element_screenshot.png'})
})

})

test('Custom functions', async({page})=>{

    await loadHomepage(page)
    // await assertTitle(page)
})


