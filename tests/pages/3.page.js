import { expect } from "@playwright/test";
/**
 * @param {Page} page
 */

exports.myClass = class myClass {
    constructor(page) {
        this.page = page,
            this.homePage = 'li [href="index.html"]',
            this.url = 'https://www.demoblaze.com/',
            this.loginCss = '#login2',
            this.usernmCss = '#loginusername',
            this.pwCss = '#loginpassword',
            this.loginBtn = '[onclick="logIn()"]',
            this.logoutVisible = '#logout2',
            this.userNameCss = '#nameofuser',
            this.logout2 = '#logout2'
    }

    async visitUrl(url) {
        await this.page.goto(url)
    }
    async clickLoginBtn() {
        await this.page.locator(this.loginCss).click()
        //await this.page.waitForTimeout(2000)
    }
    async login(un, pw) {

        await this.page.locator(this.usernmCss).fill(un)
        await this.page.locator(this.pwCss).fill(pw)
        await this.page.click(this.loginBtn)
       // await this.page.waitForTimeout(2000)
    }

    async verifyUser(uid) {
        await expect(this.page.locator(this.logoutVisible)).toBeVisible()
        await expect(this.page.locator(this.userNameCss)).toContainText(uid)
        await this.page.waitForTimeout(2000)
    }

    async logout() {
        await this.page.locator(this.logout2).click()
        await this.page.waitForTimeout(3000)
    }
}
