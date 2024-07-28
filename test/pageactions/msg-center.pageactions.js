import MsgCenterPageObjects from "../pageobjects/msg-center.pageobject"

class MsgCenterPageActions extends MsgCenterPageObjects {

    async clickMsgCenterMenu () {
        await super.navMsgCenter().click()
        await browser.pause(5000)
    }

    async composeAndSendAnEmail (testData, needToUpload = false) {
        await this.clickComposeNewMsgBtn()
        await this.inputTo(testData.receiverAccount)
        await this.inputSubject(testData.emailSubject)
        await this.inputEmailBody(testData.emailContent)
        if(needToUpload) {
            await this.uploadFile(`test/fixtures/${testData.emailFileName}`)
        }
        await this.clickSendBtn()
    }

    async clickComposeNewMsgBtn () {
        await super.btnComposeNewMsg().click()
        await browser.pause(5000)
    }

    async inputTo (email) {
        await browser.pause(5000)
        await super.txtFieldTo().setValue(email)
    }

    async inputSubject (text) {
        await browser.pause(5000)
        await super.txtFieldSubject().setValue(text)
    }

    async inputEmailBody (text) {
        await browser.pause(5000)
        const iframe = await super.iframeBody()
        await browser.switchToFrame(iframe)
        await super.txtAreaEmailBody().setValue(text)
        await browser.switchToParentFrame()
    }

    async uploadFile (filePath) {
        await browser.pause(5000)
        await browser.execute(() => {
            let hiddenElement = document.querySelector("input[name='filename']")
            hiddenElement.classList.remove("ion-hide")
            hiddenElement.removeAttribute("hidden")
            document.querySelector('input[name="filename"]').style.display = "block"
        })
        await browser.pause(3000)
        const uploadedFile = await browser.uploadFile(filePath)
        await super.inputUploadFile().setValue(uploadedFile)
        await browser.pause(5000)
    }

    async clickSendBtn () {
        await super.btnSend().click()
        await browser.pause(5000)
    }

    async clickMailInboxMenu () {
        await super.navMailInbox().click()
        await browser.pause(5000)
    }

    async verifyEmailContentReceived (testData, hasFile = false) {
        await this.clickSenderEmail(testData)

        const actualSubject = await super.txtEmailContentSubject().getText()
        expect(actualSubject).toBe(testData.emailSubject)
        if(hasFile) {
            const actualFileName = await super.txtEmailContentFile().getText()
            expect(actualFileName).toBe(testData.emailFileName)
        }
        const actualEmailBody = await super.txtEmailContentBody().getText()
        expect(actualEmailBody).toContain(testData.emailContent)
    }

    async verifyFromAndToEmailContent (fromAccount, toAccount) {
       
        await browser.pause(5000)
        const actualText = await browser.execute(() => {
            let text = []
            const from = document.querySelector("ion-select[formcontrolname='from']")
            const to = document.querySelector("ion-input[id='to']")
            text.push(from.value)
            text.push(actualTo = to.value)
            return text
        })
        expect(actualText[0]).toBe(fromAccount)
        expect(actualText[1]).toBe(toAccount)
    }

    async clickSenderEmail (testData) {
        const allEmailFrom = await super.txtEmailListFrom()
        for(let i=0; i < allEmailFrom.length; i++) {
            let emailFrom = await (allEmailFrom[i]).getText()
            if(emailFrom == testData.senderAccount) {
                await (allEmailFrom[i]).click()
                await browser.pause(5000)
                break
            }

        }
    }

    async clickReplyBtn () {
        await super.btnReply().click()
        await browser.pause(5000)

        await browser.execute(() => {
            let btnOptions = document.querySelectorAll("span[class='action-sheet-button-inner sc-ion-action-sheet-md']")
            for(let i=0; i < btnOptions.length; i++) {
                let btnText = btnOptions[i].textContent
                if(btnText == "Reply") {
                    btnOptions[i].click()
                    break
                }
            }
        })
        await browser.pause(5000)
    }

    async replyToEmail (testData, needToUpload = false) {
        await this.clickSenderEmail(testData)
        await this.clickReplyBtn()
        await this.inputEmailBody(testData.emailContent)
        if(needToUpload) {
            await this.uploadFile(`test/fixtures/${testData.emailFileName}`)
        }
        await this.clickSendBtn()
        await browser.pause(5000)
    }


}

export default new MsgCenterPageActions()