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

    async verifyElementNotDisplay (element) {
        browser.waitUntil(async () => {
            return await expect(element).not.toBeDisplayed()
        }, 10000)
        
    }

    async changeWindowSize (width, height) {
        await browser.setWindowSize(width, height)
        await browser.pause(5000)
        
    }

    async openNewWindow (path) {
        await browser.newWindow(`https://revation-uat.linklive.dev/linklive/${path}`)
        await browser.pause(5000)
        
    }

    async switchWindow (index) {
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[index])
        
    }

    async closeAnotherWindow (index) {
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[index])
        await browser.closeWindow()
    }
}