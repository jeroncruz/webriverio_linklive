
import LoginPageActions from "../pageactions/login.pageactions"
import CommCenterPageActions from "../pageactions/comm-center.pageactions"
import LoginTestData from "../fixtures/login.testdata"
import MsgCenterPageActions from "../pageactions/msg-center.pageactions"
import AccountPageActions from "../pageactions/account.pageactions"

describe('COMMUNICATION CENTER - comm-center.spec.js', () => {
    const user1 = {
        username: LoginTestData.credentials[0].username,
        pass: LoginTestData.credentials[0].pass,
        displayName: LoginTestData.credentials[0].displayName
    }

    const user2 = {
        username: LoginTestData.credentials[1].username,
        pass: LoginTestData.credentials[1].pass,
        displayName: LoginTestData.credentials[1].displayName
    }

    beforeEach(async () => {
        await LoginPageActions.navigateLoginUrl()
        await LoginPageActions.login(user1.username, user1.pass)
        await LoginPageActions.verifySuccessfulLogin()
        await CommCenterPageActions.clickDismissBtn()

    })

    it("TEST 3: should display contact, duration time, internal in conversation pane", async () => {
        const username = "link.revation.com"

        await CommCenterPageActions.searchUserName(username)
        await CommCenterPageActions.clickRevContactUsername(username)
        await CommCenterPageActions.clickStartMsgBtn()
        await CommCenterPageActions.verifyConversationDetails(username)
        await CommCenterPageActions.verifyEndConversation(username)
       
    })

    it("TEST 5: should filled email from and to after clicking send secure email", async () => {

        await CommCenterPageActions.searchUserName(user1.username)
        await CommCenterPageActions.clickRevContactUsername(user2.username, user2.displayName)
        await CommCenterPageActions.clickSendSecureMailBtn()
        await CommCenterPageActions.verifyCurrentUrl("https://revation-uat.linklive.dev/linklive/email/main-menu/compose/service@secure.revation.com")
        await MsgCenterPageActions.verifyFromAndToEmailContent(user1.username, user2.username)
       
    })

    it("TEST 7 with bonus: should sent a content in the chat session while in mobile view", async () => {
        const msg = "This is a test message."

        //Precondition
        await CommCenterPageActions.changeWindowSize(767, 1000)

        // sending a msg to user 2
        await CommCenterPageActions.clickContactMobileTab()
        await CommCenterPageActions.searchUserName(user2.username)
        await CommCenterPageActions.clickRevContactUsername(user2.username, user2.displayName)
        await CommCenterPageActions.clickStartMsgBtn()
        await CommCenterPageActions.verifyMessagingPane()
        await CommCenterPageActions.composeMsg(msg)
        await CommCenterPageActions.verifyMessagesInChatPane(msg)

        // Logged out the sender and logged in the receiver to verify msg
        await AccountPageActions.logoutAnAccount()
        await LoginPageActions.navigateLoginUrl()
        await LoginPageActions.login(user2.username, user2.pass)
        await LoginPageActions.verifySuccessfulLogin()
        await CommCenterPageActions.searchUserName(user1.username)
        await CommCenterPageActions.clickRevContactUsername(user1.username, user1.displayName)
        await CommCenterPageActions.clickStartMsgBtn()
        await CommCenterPageActions.verifyMessagesInChatPane(msg)
       
    })

    it("TEST 8 Bonus: should not logged in users via seperate tabs", async () => {

        await CommCenterPageActions.openNewWindow("auth/login")
        await CommCenterPageActions.switchWindow(1)
        await LoginPageActions.navigateLoginUrl()
        await LoginPageActions.login(user2.username, user2.pass)
        await LoginPageActions.verifySuccessfulLogin()

        // go back to window 1
        await CommCenterPageActions.switchWindow(0)
        await browser.pause(10000)
        await CommCenterPageActions.verifyCurrentUrl("https://revation-uat.linklive.dev/linklive/auth/login")
    })
})

