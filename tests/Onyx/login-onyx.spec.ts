import { test } from "@playwright/test"
import {LoginPageObjects} from "../../PageObjects/LoginPageObjects"


test.describe.only('Login/logout flow', ()=>{
    let lp: LoginPageObjects


    test.beforeEach(async ({page}) =>{
        lp =new LoginPageObjects(page)
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

        
    })


})
