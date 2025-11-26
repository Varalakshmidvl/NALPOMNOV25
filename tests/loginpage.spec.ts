
import { LoginPage } from '../pages/LoginPage';
import { test, expect } from '../fixtures/baseFixtures'
import { HomePage } from '../pages/HomePage';


test('verify valid login', async ({ homePage }) => {
    await expect(homePage.page).toHaveTitle('My Account');
});


test('verify Invalid login', async ({ page, baseURL }) => {
    //AAA
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage(baseURL);
    await loginPage.doLogin('varalakshmi.doddi@gmail.com', 'Hydchn66');
    const errorMesg = await loginPage.getInvalidLoginMessage();
    expect(errorMesg).toContain('Warning: No match for E-Mail Address and/or Password.')

});









//Due to Error Analysed and debugged the code

/* test('verify valid login1', async ({ page }) => {

    //AAA
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    let homePage: HomePage = await loginPage.doLogin('pwtest@nal.com', 'test123');
    expect(await homePage.isUserLoggedIn()).toBeTruthy();
}); 


test.skip('Verify Invalid LoginPage ', async ({ page }) => {
  let loginPage = new LoginPage(page)
  await loginPage.goToLoginPage()
  const actualTitle1 = await loginPage.doLogin('varalakshmixyz@gmail.com', 'xxxHydchn66@@')
  // const actualTitle = await loginPage.doLogin('varalakshmiautomation@gmail.com', 'Hydchn66@@')

  const errorMessage = await loginPage.getInvalidLoginMessage()
  expect(errorMessage).toContain('Warning: No match for E-Mail Address and/or Password.')



}) */