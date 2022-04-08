import { expect, test } from "@playwright/test"
import {LoginPageObjects} from "../../PageObjects/LoginPageObjects"
import {NavBar} from "../../PageObjects/Componants/NavBar"


test.describe.only('Login/logout flow', ()=>{
    let lp: LoginPageObjects
    let nav: NavBar

    test.beforeEach(async ({page}) =>{
        lp =new LoginPageObjects(page)
        nav = new NavBar(page)
        await lp.visit()
    })

    //Negative Scenario
    test('Login with invalid credentials',async ({page}) => {
        await lp.login('ashif@a.com','password')
        await lp.verfiyError()
    
    })

    //Positive scenarios
    test('login with valid credentials',async ({page}) => {

        await lp.login('noam@amun.com','jWeVEvC9JlzBOVgeF337')
        await expect(nav.userMenu).toContainText("noam@amun.com")
        await nav.userMenu.click()
        await expect(nav.dropdownItems).toContainText(["Settings","Logout"])
        await nav.chooseExpandedDropdown("Logout")
       


        
    })


})
