import { Locator, Page } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';
import {HomePage} from '../pages/HomePage';
import {RegisterPage} from '../pages/RegisterPage';

export class LoginPage{
    
    //1. page locators/objects/OR

    private readonly page:Page;
    private readonly eleUtil;
    private readonly emailId: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly warningMsg: Locator;
    private readonly registerlink:Locator;
   //2.page class constructor...constructor used to intialize the value

   constructor(page:Page){
    this.page = page;
   // this.emailId = page.locator('#input-email')
    this.eleUtil = new ElementUtil(page);
    this.emailId=page.getByRole('textbox', { name: 'E-Mail Address' })
    this.password=page.getByRole('textbox', { name: 'Password' })
    this.loginBtn=page.locator(`input[type="submit"][value="Login"]`)
    this.warningMsg =page.locator('.alert.alert-danger.alert-dismissible')
    this.registerlink =page.getByText('Register',{exact:true})


  }

  //3.page actions/methods
    //Navigate to login Page

     async goToLoginPage(baseURL: string | undefined){
       await this.page.goto(baseURL+'?route=account/login');
  
   }

   //logintp App using username/password
   async doLogin(email:string,password:string):Promise<HomePage>
   {

    await this.eleUtil.fill(this.emailId,email)
    await this.eleUtil.fill(this.password,password)
    await this.eleUtil.click(this.loginBtn ,{force:true ,timeout:5000})
    return new HomePage(this.page) //what we returning from loginpage is Homepage 
   
   
    /*  const pageTitle =await this.page.title();
    console.log(`Home page title: ${pageTitle}`);
    return pageTitle */
   
   }


   // get the warnign message in case ofof invalid login

 async getInvalidLoginMessage():Promise<string |null>{

   const errorMsg =await this.eleUtil.getText(this.warningMsg);
   console.log('invalid login warning message'+ errorMsg);
  return errorMsg
  
 }
  async navigateToRegisterPage(){
   await this.eleUtil.click(this.registerlink,{force:true},1);
   return new RegisterPage(this.page);

  }


}