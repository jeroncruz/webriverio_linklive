
import LoginPageActions from "../pageactions/login.pageactions"
import LoginTestData from "../fixtures/login.testdata"

describe('My Login application', () => {

    beforeEach(async () => {
        await LoginPageActions.navigateLoginUrl()
    })

    it("TEST 1: should successfully enter respective credentials", async () => {
        
        const credentials = LoginTestData.credentials

        for(let i =0; i < credentials.length; i++) {
            await LoginPageActions.login(credentials[i].username, credentials[i].pass)
            await LoginPageActions.verifySuccessfulLogin()
            await LoginPageActions.verifyCurrentUrl("https://revation-uat.linklive.dev/linklive/communicator?view=media")
            await LoginPageActions.navigateLoginUrl()
        }
    })

    it("TEST 2: should not login successfully when entered invalid credentials", async () => {
        
        const username = "greg@gmail.com"
        const pass = "Summer2022!"

        await LoginPageActions.login(username, pass)
        await LoginPageActions.verifyInvalidLoginMessages()
    })
})

