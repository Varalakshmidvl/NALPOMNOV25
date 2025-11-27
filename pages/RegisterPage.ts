import { Locator, Page ,expect} from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';

export class RegisterPage {
    private readonly page: Page;
    private readonly firstNameInput: Locator
    private readonly LastNameInput: Locator
    private readonly emailInput: Locator
    private readonly telephoneInput: Locator
    private readonly passwordInput: Locator
    private readonly confirmPasswordInput: Locator
    private readonly newsletterYesRadio: Locator
    private readonly newsletterNoRadio: Locator
    private readonly agreeCheckbox: Locator
    private readonly continueButton: Locator
    private readonly successMsg: Locator
    private readonly eleUtil

    constructor(page: Page) {
        this.page = page
        this.eleUtil = new ElementUtil(page)
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' })
        this.LastNameInput = page.getByRole('textbox', { name: 'Last Name' })
        this.emailInput = page.getByRole('textbox', { name: 'E-Mail' })
        this.telephoneInput = page.getByRole('textbox', { name: 'Telephone' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.confirmPasswordInput = page.getByRole('textbox', { name: 'Password Confirm' })

        this.newsletterYesRadio = page.getByRole('radio', { name: 'Yes', checked: false })
        this.newsletterNoRadio = page.getByRole('radio', { name: 'No', checked: true })
        this.agreeCheckbox = page.locator('[name="agree"]')
        this.continueButton = page.getByRole('button', { name: 'Continue' })
        this.successMsg = page.getByText('Your Account Has Been Created!', { exact: true })
          //  console.log('Success message visible:', this.successMsg.isVisible());

         //  this.page.waitForSelector('text=Your Account Has Been Created', { timeout: 5000 });                               

    }

    async registerUser(firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        password: string,
        subscribeNewsletter: string): Promise<boolean> {
        await this.eleUtil.fill(this.firstNameInput, firstName)
        await this.eleUtil.fill(this.LastNameInput, lastName)
        await this.eleUtil.fill(this.emailInput, email)
        await this.eleUtil.fill(this.telephoneInput, telephone)
        await this.eleUtil.fill(this.passwordInput, password)
        await this.eleUtil.fill(this.confirmPasswordInput, password)

        if (subscribeNewsletter === "Yes") {
            await this.eleUtil.click(this.newsletterYesRadio)
        }
        else {
            await this.eleUtil.click(this.newsletterNoRadio)
        }
        await this.eleUtil.click(this.agreeCheckbox)
        await this.eleUtil.click(this.continueButton)

        return await this.successMsg.isVisible();
    }

    async verifyAccountCreated() {
        await expect(this.successMsg).toBeVisible()

    }
}


