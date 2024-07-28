
import LoginPageActions from "../pageactions/login.pageactions"
import CommCenterPageActions from "../pageactions/comm-center.pageactions"
import MsgCenterPageActions from "../pageactions/msg-center.pageactions"
import LoginTestData from "../fixtures/login.testdata"
import AccountPageActions from "../pageactions/account.pageactions"

describe('MESSAGE CENTER - msg-center.spec.js', () => {
    
    const user1 = {
        username: LoginTestData.credentials[0].username,
        pass: LoginTestData.credentials[0].pass
    }

    const user2 = {
        username: LoginTestData.credentials[1].username,
        pass: LoginTestData.credentials[1].pass
    }
    
    before(async () => {
        await LoginPageActions.navigateLoginUrl()
        await LoginPageActions.login(user1.username, user1.pass)
        await LoginPageActions.verifySuccessfulLogin()
        await CommCenterPageActions.clickDismissBtn()
        await MsgCenterPageActions.clickMsgCenterMenu()
    })

    it("TEST 4: should send an email and verify by receiver", async () => {

        const testData = {
            senderAccount: user1.username,
            receiverAccount: user2.username,
            emailSubject: "Link Live Technical Exam",
            emailContent: "Kindly check attached file. Thank you!",
            emailFileName: "download.png",
        }

        await MsgCenterPageActions.composeAndSendAnEmail(testData, true)
       
        //Logged out sender account and logged in the receiver account
        await AccountPageActions.logoutAnAccount()
        await LoginPageActions.navigateLoginUrl()
        await LoginPageActions.login(user2.username, user2.pass)
        await LoginPageActions.verifySuccessfulLogin()
        await MsgCenterPageActions.clickMsgCenterMenu()
        await MsgCenterPageActions.clickMailInboxMenu()
        await MsgCenterPageActions.verifyEmailContentReceived(testData, true)

    })

    it("TEST 6: should confirm reply was received", async () => {

        const testData = {
            senderAccount: user1.username,
            receiverAccount: user2.username,
            emailSubject: "Link Live Technical Exam",
            emailContent: "Kindly check attached file. Thank you!",
        }

        const replyData = {
            senderAccount: user1.username,
            emailSubject: "RE: Link Live Technical Exam",
            emailContent: "Got it. Thank you!",
        }

        await MsgCenterPageActions.composeAndSendAnEmail(testData)
       
        //Logged out sender account and receiver account will reply to email
        await AccountPageActions.logoutAnAccount()
        await LoginPageActions.navigateLoginUrl()
        await LoginPageActions.login(user2.username, user2.pass)
        await LoginPageActions.verifySuccessfulLogin()
        await MsgCenterPageActions.clickMsgCenterMenu()
        await MsgCenterPageActions.clickMailInboxMenu()
        await MsgCenterPageActions.replyToEmail(replyData)

        //Logged out receiver account and sender account will verify the email received
        replyData["senderAccount"] = user2.username
        await AccountPageActions.logoutAnAccount()
        await LoginPageActions.navigateLoginUrl()
        await LoginPageActions.login(user1.username, user1.pass)
        await LoginPageActions.verifySuccessfulLogin()
        await MsgCenterPageActions.clickMsgCenterMenu()
        await MsgCenterPageActions.clickMailInboxMenu()
        await MsgCenterPageActions.verifyEmailContentReceived(replyData)
    })
})

