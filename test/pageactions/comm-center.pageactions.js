import CommCenterPageObjects from "../pageobjects/comm-center.pageobject"

class CommCenterPageActions extends CommCenterPageObjects {

    async clickDismissBtn () {
        let isExisting = await super.btnDismiss().isExisting()
        if(isExisting) {
            await super.verifyElementDisplay(super.btnDismiss())
            await super.btnDismiss().click()
        }
        await browser.pause(10000)
    }
    
    async searchUserName (username) {
        // await super.verifyElementDisplay(super.txtLoading())
        // await super.verifyElementDisplay(super.toastMsg())
        await super.verifyElementDisplay(super.searchField())
        await browser.pause(10000)
        await super.searchField().setValue(username)
    }

    async clickRevContactUsername (username, displayName) {
        let isExisting = await super.spanRevContactName(username).isExisting()
        if(isExisting) {
            await super.verifyElementDisplay(super.spanRevContactName(username))
            await super.spanRevContactName(username).click()
        } else {
            await super.verifyElementDisplay(super.spanRevContactName(displayName))
            await super.spanRevContactName(displayName).click()
        }
        await browser.pause(5000)
    }

    async clickStartMsgBtn () {
        await super.verifyElementDisplay(super.startMsgBtn())
        await super.startMsgBtn().click()
        await browser.pause(5000)
    }

    async clickStartVoiceCallBtn () {
        await super.verifyElementDisplay(super.startVoiceCallBtn())
        await super.startVoiceCallBtn().click()
        await browser.pause(5000)
    }

    async verifyConversationDetails (expectedUsername) {
        await super.verifyElementDisplay(super.txtContactName(expectedUsername))
        await super.verifyElementDisplay(super.divTimer())
        await super.verifyElementDisplay(super.txtInternal())
    }

    async verifyEndConversation (expectedUsername) {
        await this.clickToggleBtn()
        await this.clickEndConversationBtn()
        await super.verifyElementNotDisplay(super.txtContactName(expectedUsername))
        await super.verifyElementNotDisplay(super.divTimer())
        await super.verifyElementNotDisplay(super.txtInternal())
    }

    async clickSendSecureMailBtn () {
        await super.verifyElementDisplay(super.sendSecureMailBtn())
        await super.sendSecureMailBtn().click()
        await browser.pause(5000)
    }

    async clickToggleBtn () {
        await super.verifyElementDisplay(super.toggleBtn())
        await super.toggleBtn().click()
        await browser.pause(5000)
    }

    async clickEndConversationBtn () {
        await super.verifyElementDisplay(super.endConversationBtn())
        await super.endConversationBtn().click()
        await browser.pause(5000)
    }

    async clickContactMobileTab () {
        await super.tabContactsMobileView().click()
        await browser.pause(5000)
    }

    async composeMsg (msg) {
        await super.txtAreaChatMsgInput().setValue(msg)
        this.clickSendMsgBtn()
    }

    async clickSendMsgBtn () {
        await super.btnSendMsg().click()
        await browser.pause(5000)
    }

    async verifyMessagingPane () {
        const defaultMsg = 'A session was created for a web user.  Have the user go to the connect website and enter:'
        await this.verifyMessagesInChatPane(defaultMsg)
        await super.verifyElementDisplay(super.txtAreaChatMsgInput())

    }

    async verifyMessagesInChatPane (expectedMsg) {
        await browser.execute( () => {
            let msgs = document.querySelectorAll("div[class='message']")
            for(let i=0; i < msgs.length; i++) {
                let actualMsg = msgs[i].textContent
                if(expectedMsg.includes(actualMsg)) {
                    expect(expectedMsg).toContain(actualMsg)
                }
            }
        })
    }
}

export default new CommCenterPageActions()