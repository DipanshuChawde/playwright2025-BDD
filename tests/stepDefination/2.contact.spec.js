import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();

Given('I navigate to contact us page', async ({ page }) => {
    // Step: Given I navigate to contact us page
    // From: tests\feature\2.contactUs.feature:4:5
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
})

When('I enter infomation', async ({ page }) => {
    // Step: When I enter infomation
    // From: tests\feature\2.contactUs.feature:5:5
    await page.locator('[name="first_name"]').fill('dipanshu')
    await page.locator('[name="last_name"]').fill('chawde')
    await page.locator('[name="email"]').fill('dipanshu@gmail.com')
    await page.locator('[name="message"]').fill('i am learning playwright')
});

Then('I click on submit button', async ({ page }) => {
    // Step: Then I click on submit button
    // From: tests\feature\2.contactUs.feature:6:5
    await page.locator('[type="submit"]').click()
});

Then('I verify for validation message', async ({ page }) => {
    // Step: And I verify for validation message
    // From: tests\feature\2.contactUs.feature:7:5
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
    await page.waitForTimeout(3000)
});

//scenario-2
// When('I enter information from data table', async ({page}, data) => {
//   // Step: When I enter information from data table
//   // From: tests\feature\2.contactUs.feature:11:9
//    //const data = dataTable.rowsHash();
//     await page.locator('[name="first_name"]').fill(data.fn)
//     await page.locator('[name="last_name"]').fill(data.ln)
//     await page.locator('[name="email"]').fill(data.email)
//     await page.locator('[name="message"]').fill(data.msg)
// });