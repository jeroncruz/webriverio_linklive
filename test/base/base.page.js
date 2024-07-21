import { browser } from "@wdio/globals"

export default class BasePage {
    
    async openUrl (path) {
        await browser.maximizeWindow()
        await browser.url(`https://revation-uat.linklive.dev/linklive/${path}`)
    }

    async verifyCurrentUrl (expectedUrl) {
        browser.waitUntil(async () => {
            return await expect(browser.getUrl()).toBe(expectedUrl)
        }, 10000)
    }

    async verifyElementDisplay (element) {
        browser.waitUntil(async () => {
            return await expect(element).toBeDisplayed()
        }, 10000)
        
    }

}