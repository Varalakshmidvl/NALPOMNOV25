import { Locator, Page } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';
import {LoginPage} from '../pages/LoginPage';
import {ResultsPage} from '../pages/ResultsPage';

export class HomePage{
   
    
    //1. page locators/objects/OR

    readonly page:Page;
    private readonly eleUtil;
    private readonly loginLink:Locator;
    private readonly logoutLink: Locator;
    private search:Locator;
    private searchicon:Locator;
   

   //2.page class constructor...constructor used to intialize the value

   constructor(page:Page){
    this.page = page;
   // this.emailId = page.locator('#input-email')
    this.eleUtil = new ElementUtil(page);
       this.loginLink =page.getByRole('link', { name: 'Login' })
     this.logoutLink =page.getByRole('link', { name: 'Logout' })
    this.search = page.getByRole('textbox', { name: 'Search' })
     this.searchicon = page.locator(`#search > span.input-group-btn > button.btn`)
   }


    //3.page actions/methods
     async isUserLoggedInxx() {
    await this.page.waitForSelector('#userProfileIcon'); // or whatever element indicates login
    return await this.page.locator('#userProfileIcon').isVisible();
}
    
      async isUserLoggedIn():Promise<boolean>{
     return await this.eleUtil.isVisible(this.logoutLink,0)
      }

      async logout():Promise<LoginPage>{
        await this.eleUtil.click(this.logoutLink,{timeout:5000 },1);
        await this.eleUtil.click(this.loginLink,{timeout :5000 },1);
        return new LoginPage(this.page)
    
    }
   
    async dosearch(searchKey: string){
     console.log('search Key: ${searchKey}');
     await this.eleUtil.fill(this.search ,searchKey);
     await this.eleUtil.click(this.searchicon)
     return new ResultsPage(this.page)

    }


    }

