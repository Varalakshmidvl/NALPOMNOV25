
import { LoginPage } from '../pages/LoginPage';
import { test, expect } from '../fixtures/baseFixtures';
import { HomePage } from '../pages/HomePage';


test('@login should valid login', async ({ homePage }) => {
    await expect(homePage.page).toHaveTitle('My Account');
});


test('@login should Invalid login', async ({ page, baseURL }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage(baseURL);
    await loginPage.doLogin('varalakshmiautomation@gmail.com', 'Hydchn66@@');
    const errorMesg = await loginPage.getInvalidLoginMessage();
    expect(errorMesg).toContain('Warning: No match for E-Mail Address and/or Password.');

});


