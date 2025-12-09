import { test as base, expect } from '@playwright/test';  ///this line wrighting explicity in basefixture ,other classes no need automatically utilizing 
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
    homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page, baseURL }, use, testInfo) => {

        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage(baseURL);

        const username = testInfo.project.metadata.appUsername;
        const password = testInfo.project.metadata.appPassword;

        const homePage = await loginPage.doLogin(username, password);
        expect(homePage.isUserLoggedIn()).toBeTruthy();

        await use(homePage);

    }
})

export { expect }