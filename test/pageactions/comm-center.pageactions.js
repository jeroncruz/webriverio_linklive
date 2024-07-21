import CommCenterPageObjects from "../pageobjects/comm-center.pageobject"

class CommCenterPageActions extends CommCenterPageObjects {

    async clickDismissBtn () {
        await super.verifyElementDisplay(super.btnDismiss())
        await super.btnDismiss().click()
    }
    
    async searchUserName (username) {
        await super.verifyElementDisplay(super.txtLoading())
        await super.verifyElementDisplay(super.toastMsg())
        await super.verifyElementDisplay(super.searchField())
        await browser.pause(5000)
        await super.searchField().setValue(username)
    }

    async clickRevContactUsername (username) {
        await super.verifyElementDisplay(super.spanRevContactName(username))
        await super.spanRevContactName(username).click()
        await browser.pause(5000)
    }

    async clickStartVoiceCall () {
        await super.verifyElementDisplay(super.startVoiceCallBtn())
        await super.startVoiceCallBtn().click()
        await browser.pause(5000)
    }

    async verifyConversationDetails (expectedUsername) {
        await super.verifyElementDisplay(super.txtContactName(expectedUsername))
        await super.verifyElementDisplay(super.divTimer())
        await super.verifyElementDisplay(super.txtInternal())
    }
}

export default new CommCenterPageActions()