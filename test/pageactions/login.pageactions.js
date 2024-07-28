import LoginPageObjects from "../pageobjects/login.pageobject"

class LoginPageActions extends LoginPageObjects {

    async login (username, password) {
        await super.inputUsername().setValue(username)
        await super.inputPassword().setValue(password)
        await super.btnSignMeIn().click()
        await browser.pause(5000)
    }

    async verifySuccessfulLogin () {
        await browser.pause(5000)
        await super.imgLinkLive().waitForExist({timeout: 10000})
        await super.verifyElementDisplay(super.imgLinkLive())
    }

    async navigateLoginUrl () {
        await super.openUrl('auth/login')
        await browser.pause(5000)
    }

    async verifyInvalidLoginMessages () {
        await super.txtInvalidCredentials().waitForExist({timeout: 10000})
        await super.txtPlsCheckUrl().waitForExist({timeout: 10000})
        await super.txtSubDomainRequired().waitForExist({timeout: 10000})
        await super.verifyElementDisplay(super.txtInvalidCredentials())
        await super.verifyElementDisplay(super.txtPlsCheckUrl())
        await super.verifyElementDisplay(super.txtSubDomainRequired())
    }
}

export default new LoginPageActions()