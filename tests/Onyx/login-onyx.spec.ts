import { expect,test } from "@playwright/test"

test('Login with invalid credentials',async ({page}) => {

    await page.goto('https://staging.onyx.amun.com/');
    
})


test.only('test', async ({ page }) => {

  // Go to https://staging.onyx.amun.com/
  await page.goto('https://staging.onyx.amun.com/');

  // Click input[name="email"]
  await page.locator('input[name="email"]').click();

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('noam@amun.com');


  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('jWeVEvC9JlzBOVgeF337asdasdas');

  // Click text=Login
  await page.locator('text=Login').click();


  const errorMessage= await page.locator('text=Invalid login')
  await expect(errorMessage).toBeVisible


});