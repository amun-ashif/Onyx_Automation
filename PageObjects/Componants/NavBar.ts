import {Page, test, expect, Locator} from '@playwright/test'

export class NavBar {
    readonly page: Page
    readonly dashboard: Locator
    readonly pCf: Locator
    readonly orders: Locator
    readonly books: Locator
    readonly statements: Locator
    readonly administration: Locator
    readonly accountMenu: Locator
    readonly userMenu: Locator
    readonly dropdownItems: Locator

    constructor(page:Page){
        this.page = page
        this.dashboard = page.locator('a:has-text("Dashboard")')
        this.pCf = page.locator('a:has-text("PCFs")')
        this.orders = page.locator('a:has-text("Orders")')
        this.books = page.locator('a:has-text("Books")')
        this.statements = page.locator('a:has-text("Statements")')
        this.administration = page.locator('a:has-text("Administrations")')
        this.userMenu = page.locator('a.dropdown-toggle:has-text("amun.com")')
        this.dropdownItems= page.locator(' div[class="nav-item show dropdown"]')

    }

    async chooseTab(tabName: String){
        switch (tabName.toLowerCase()) {
            case "dashboard":
                this.dashboard.click()
                break
            case "pcfs":
                this.pCf.click()
                break
            case "orders":
                this.orders.click()
                break     
            case "books":
                this.books.click()
                break
            case "statements":
                this.statements.click()
                break
            case "administration":
                this.administration.click()
                break
            case "userMenu":
                this.userMenu.click()  
                break     
            default:
                console.log("Tab does not exist")
                break;
        }
    }

    async chooseExpandedDropdown(dropDownName: String){
        switch(dropDownName.toLowerCase()){
            case "settings":
                this.dropdownItems.locator('a:has-text="Settings"')
                break
            case "logout":
                this.dropdownItems.locator('a:has-text="Logout"')
                break
            default:
                console.log("Dropdown Item not available")
        }

    }
    async verifyDropdownitems(dropDownItemList: String){
       // await expect(this.dropdownItems).toContainText(dropDownItemList)

    }

}

