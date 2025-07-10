import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then} = createBdd();
import { myClass } from "../pages/3.page"

let hp
Given('I navigate to this url {string}', async ({page}, url) => {
 hp= new myClass(page)
 hp.visitUrl(url)
 await page.waitForTimeout(2000)
});

When('I click on login Log-in button', async ({}) => {
  hp.clickLoginBtn()
});

When('I enter userid and password and click on login button', async ({}) => {
  hp.login("dipanshu", "dipanshiu@123")
});

Then('I verify for logout-button and correct userid', async ({}) => {
  hp.verifyUser("dipanshu")
});

Then('I logout from page', async ({}) => {
  hp.logout()
});