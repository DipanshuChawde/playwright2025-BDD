import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then} = createBdd();
import { myClass } from "../pages/3.page"

let hp;
Given('I navigate to this url {string}', async ({page}, url) => {
 hp= new myClass(page)
 await hp.visitUrl(url)
 
 await page.waitForTimeout(2000)
});

When('I click on login Log-in button2', async ({}) => {
  await hp.clickLoginBtn()
  });

When('I enter userid and password and click on login button', async ({}) => {
  await hp.login("dipanshu", "dipanshu@123")
});

Then('I verify for logout-button and correct userid', async ({}) => {
  await hp.verifyUser("dipanshu")
});

Then('I logout from page', async ({}) => {
  await hp.logout()
});