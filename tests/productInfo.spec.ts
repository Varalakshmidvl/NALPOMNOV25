
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { ResultsPage } from '../pages/ResultsPage'
import { ProductInfoPage } from '../pages/ProductInfoPage'
import { test, expect } from '../fixtures/baseFixtures'
let search = [
    { searchkey: 'macbook', productname: 'MacBook Pro', imagecount: 4 },
    { searchkey: 'macbook', productname: 'MacBook Air',imagecount: 4 },
    { searchkey: 'samsung', productname: 'Samsung Galaxy Tab 10.1',imagecount: 7 },
]

for (let product of search) {
    test(`Verify product Header ${product.productname}`, async ({ homePage }) => {

        /* let loginPage = new LoginPage(page)
        await loginPage.goToLoginPage()
        let homePage: HomePage = await loginPage.doLogin('varalakshmiautomation@gmail.com', 'Hydchn66@@') */
        // let ResultsPage:ResultsPage =await homePage.dosearch('samsung')
        let resultsPage: ResultsPage = await homePage.dosearch(product.searchkey)
        let ProductInfoPage: ProductInfoPage = await resultsPage.selectProduct(product.productname)
        expect(await ProductInfoPage.getProductHeader()).toBe(product.productname)
    })

}

for (let product of search) {
    test(`Verify product Images ${product.productname} : ${product.imagecount}`, async ({homePage }) => {

        
        // let ResultsPage:ResultsPage =await homePage.dosearch('samsung')
        let resultsPage: ResultsPage = await homePage.dosearch(product.searchkey)
        let ProductInfoPage: ProductInfoPage = await resultsPage.selectProduct(product.productname)
        expect(await ProductInfoPage.getProductImagesCount()).toBe(product.imagecount)
    })

}

test(`Verify product MetaData`, async ({ homePage }) => {

        /* let loginPage = new LoginPage(page)
        await loginPage.goToLoginPage()
        let homePage: HomePage = await loginPage.doLogin('varalakshmiautomation@gmail.com', 'Hydchn66@@') */
        // let ResultsPage:ResultsPage =await homePage.dosearch('samsung')
        let resultsPage: ResultsPage = await homePage.dosearch('macbook')
        let ProductInfoPage: ProductInfoPage = await resultsPage.selectProduct('Macbook pro')
       //expect.soft(ProductInfoPage.getProductDetails)

      let actualProductFullDetails= await ProductInfoPage.getProductDetails()
      
     expect.soft(actualProductFullDetails.get('header')).toBe('MacBook Pro')
     expect.soft(actualProductFullDetails.get('Brand')).toBe('Apple')
     expect.soft(actualProductFullDetails.get('Product Code')).toBe('Product 18')
     expect.soft(actualProductFullDetails.get('Reward Points')).toBe('800')
     expect.soft(actualProductFullDetails.get('Availability')).toBe('Out Of Stock')
    })

test(`Verify product Pricing Details`, async ({ homePage }) => {

       /*  let loginPage = new LoginPage(page) */
       /*  await loginPage.goToLoginPage() */
       /*  let homePage: HomePage = await loginPage.doLogin('varalakshmiautomation@gmail.com', 'Hydchn66@@') */
       /*  // let ResultsPage:ResultsPage =await homePage.dosearch('samsung') */
        let resultsPage: ResultsPage = await homePage.dosearch('macbook')
        let ProductInfoPage: ProductInfoPage = await resultsPage.selectProduct('Macbook pro')
       //expect.soft(ProductInfoPage.getProductDetails)

      let actualProductFullDetails= await ProductInfoPage.getProductDetails()
      
     expect.soft(actualProductFullDetails.get('header')).toBe('MacBook Pro')
     expect.soft(actualProductFullDetails.get('price')).toBe('$2,000.00')
     expect.soft(actualProductFullDetails.get('extaxprice')).toBe('$2,000.00')

    })

