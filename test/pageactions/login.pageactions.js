import LoginPageObjects from "../pageobjects/login.pageobject"

class LoginPageActions extends LoginPageObjects {

    async login (username, password) {
        await super.inputUsername().setValue(username)
        await super.inputPassword().setValue(password)
        await super.btnSignMeIn().click()
        
    }

    async verifySuccessfulLogin () {
        await super.imgLinkLive().waitForExist({timeout: 10000})
        await super.verifyElementExist(super.imgLinkLive())
    }

    async navigateLoginUrl () {
        await super.openUrl('auth/login')
    }

    async verifyInvalidLoginMessages () {
        await super.txtInvalidCredentials().waitForExist({timeout: 10000})
        await super.txtPlsCheckUrl().waitForExist({timeout: 10000})
        await super.txtSubDomainRequired().waitForExist({timeout: 10000})
        await super.verifyElementExist(super.txtInvalidCredentials())
        await super.verifyElementExist(super.txtPlsCheckUrl())
        await super.verifyElementExist(super.txtSubDomainRequired())
    }
}

export default new LoginPageActions()