import { Locator, Page } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';
import {LoginPage} from '../pages/LoginPage';
import {ProductInfoPage} from '../pages/ProductInfoPage'; 

export class ResultsPage{
    
    //1. page locators/objects/OR

    private readonly page:Page;
    private readonly eleUtil:ElementUtil;
    private readonly results: Locator;
  
   //2.page class constructor...constructor used to intialize the value

   constructor(page:Page){
    this.page = page;
   // this.emailId = page.locator('#input-email')
    this.eleUtil = new ElementUtil(page);
    this.results = page.locator('.product-thumb') //count of no.of products on the page
      
   }
   //3.page actions:
    
   async getSearchResultsCount():Promise<number>{
    return await this.results.count()
   }

   async selectProduct(productName:string){
   console.log("=============Product name:=========== " + productName);
   await this.eleUtil.click(this.page.getByRole('link', { name: `${productName}` }))
   return new ProductInfoPage(this.page)

   }


    }

