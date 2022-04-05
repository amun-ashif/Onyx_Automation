import{expect,Locator,Page} from '@playwright/test'

export class DashboardObjects {
    //Define all the objects that will be used to interact with the website
    readonly page: Page


    //Init the objects using a constructor
    constructor(page:Page){
        this.page= page
    
    }

    //Define methods for this test
    async verifyDashboard(){
        
    }
}



