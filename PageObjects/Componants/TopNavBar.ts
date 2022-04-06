import {Page, test, expect, Locator} from '@playwright/test'

export class TopNavBar {
    readonly page: Page
    readonly dashboard: Locator
    readonly pCf: Locator
    readonly orders: Locator
    readonly books: Locator
    readonly statements: Locator
    readonly administration: Locator
    readonly accountMenu: Locator

    constructor(page:Page){
        this.page = page
        this.dashboard = page.locator('a:has-text("Dashboard")')
        this.pCf = page.locator('a:has-text("PCFs")')
        this.orders = page.locator('a:has-text("Orders")')
        this.books = page.locator('a:has-text("Books")')
        this.statements = page.locator('a:has-text("Statements")')
        this.administration = page.locator('a:has-text("Administrations")')
        this.accountMenu = page.locator('')

    }

    async chooseTab(String tabName){
        switch (tabName) {
            case "Dashboard":
                this.dashboard.click()
                break
            case "PCFs":
                this.pCf.click()
                break
            case "Orders":
                this.orders.click()
                break

                
        
            default:
                break;
        }
    }



}

