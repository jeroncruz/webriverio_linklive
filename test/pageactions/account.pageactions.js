import AccountPageObjects from "../pageobjects/account.pageobject"

class AccountPageActions extends AccountPageObjects {

    async clickAccountMenu () {
        await super.navAccount().click()
        await browser.pause(5000)
    }

    async clickSignOutIcon () {
        await super.iconSignOut().click()
        await browser.pause(5000)
    }

    async logoutAnAccount () {
        await this.clickAccountMenu()
        await this.clickSignOutIcon()
    }
}

export default new AccountPageActions()