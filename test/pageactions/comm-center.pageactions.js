import CommCenterPageObjects from "../pageobjects/comm-center.pageobject"

class CommCenterPageActions extends CommCenterPageObjects {

    async clickDismissBtn () {
        await super.verifyElementExist(super.btnDismiss())
        await super.btnDismiss().click()
    }

    async clickRevContactUsername (username) {
        await super.verifyElementExist(super.txtLoading())
        await super.verifyElementExist(super.toastMsg())
        await super.verifyElementExist(super.spanRevContactName(username))
        await super.spanRevContactName(username).click()
    }

    async verifyConversationDetails (expectedUsername) {
        await super.verifyElementExist(super.txtContactName(expectedUsername))
        await super.verifyElementExist(super.divTimer())
        await super.verifyElementExist(super.txtInternal())
    }
}

export default new CommCenterPageActions()