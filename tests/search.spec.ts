import { ResultsPage } from '../pages/ResultsPage'
import { test, expect } from '../fixtures/baseFixtures'
//data provide for 'product searchKey and results count

let searchData = [
   { searchkey:'macbook', resultscount:3},
   { searchkey:'samsung', resultscount:2},
   { searchkey:'imac', resultscount:1},
   { searchkey:'canon', resultscount:1},
   { searchkey:'motorola', resultscount:0}
];

for(let product of searchData) {
test(`Verify product search ${product.searchkey}`,async({homePage}) =>{


 let resultsPage:ResultsPage =await homePage.dosearch(product.searchkey)
    expect (await resultsPage.getSearchResultsCount()).toBe(product.resultscount)
})

}



/* let loginPage = new LoginPage(page)
  await loginPage.goToLoginPage()
  let homePage: HomePage = await loginPage.doLogin('varalakshmiautomation@gmail.com', 'Hydchn66@@')
 // let ResultsPage:ResultsPage =await homePage.dosearch('samsung') */