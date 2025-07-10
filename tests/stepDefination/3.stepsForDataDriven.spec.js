import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();

Given('I navigate to url {string}', async ({ page }, url) => {
    await page.goto(url)
});

When('I click on login Log in button', async ({ page }) => {
    await page.locator('[id="login2"]').click()
});

When('I enter {string} and {string} and click on login button', async ({ page }, uid, pw) => {
    await page.locator('[id="loginusername"]').fill(uid)
    await page.locator('[id="loginpassword"]').fill(pw)
    await page.locator('[onclick="logIn()"]').click()
    await page.waitForTimeout(2000)
});

Then('I verify for logout button and correct {string}', async ({ page }, user) => {
    const logOutTxt = await page.locator('[id="logout2"]')
    await expect(logOutTxt).toBeVisible()

    const userName = await page.locator('#nameofuser').textContent()
    await expect(userName).toContain(user)
    await page.waitForTimeout(3000)
});

Then('I logout', async ({ page }) => {
   await page.locator('#logout2').click()
   await page.waitForTimeout(3000)
});

