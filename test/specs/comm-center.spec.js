
import LoginPageActions from "../pageactions/login.pageactions"
import CommCenterPageActions from "../pageactions/comm-center.pageactions"
import LoginTestData from "../fixtures/login.testdata"

describe('COMMUNICATION CENTER - comm-center.spec.js', () => {

    beforeEach(async () => {
        await LoginPageActions.navigateLoginUrl()
        await LoginPageActions.login(LoginTestData.credentials[0].username, LoginTestData.credentials[0].pass)
        await LoginPageActions.verifySuccessfulLogin()
    })

    it("TEST 3: should display contact, duration time, internal in conversation pane", async () => {
        const selectedName = LoginTestData.credentials[0].username

        await CommCenterPageActions.clickDismissBtn()
        await CommCenterPageActions.searchUserName(selectedName)
        await CommCenterPageActions.clickRevContactUsername(selectedName)
        await CommCenterPageActions.clickStartVoiceCall()
        await CommCenterPageActions.verifyConversationDetails(selectedName)
       
    })
})

