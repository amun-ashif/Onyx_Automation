export async function loadHomepage(page){
    await page.goto('https://opensource-demo.orangehrmlive.com/')
}

export async function assertTitle(page) {
    await page.waitForSelector('h1')
}