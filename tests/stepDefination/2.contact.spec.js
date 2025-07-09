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
When('I enter information from data table', async ({page}, dataTable) => {
  // Step: When I enter information from data table
  // From: tests\feature\2.contactUs.feature:11:9
   const data = dataTable.rowsHash();
   console.log(data)
    await page.locator('[name="first_name"]').fill(data.fn)
    await page.locator('[name="last_name"]').fill(data.ln)
    await page.locator('[name="email"]').fill(data.email)
    await page.locator('[name="message"]').fill(data.msg)
});


When("I enter information from data table2",async({page},dataTable)=>{
    const data = dataTable.rows();
    console.log(data)
    for(let i=0;i<data.length;i++){
        await page.locator('[name="first_name"]').fill(data[i][0])
    await page.locator('[name="last_name"]').fill(data[i][1])
    await page.locator('[name="email"]').fill(data[i][2])
    await page.locator('[name="message"]').fill(data[i][3])
    }
})

When('I enter information from data table3 {word},{word},{word},{string}', async ({}, arg) => {
  // Step: When I enter information from data table3 aditya,masalkar,aditya@gmail.com,"i am learning java"
  // From: tests\feature\2.contactUs.feature:30:9
});


// When("I enter information from data table3",async({page},dataTable)=>{
//        console.log(dataTable)
    
//        // await page.locator('[name="first_name"]').fill(dataTable.fn)
//     // await page.locator('[name="last_name"]').fill(data[i][1])
//     // await page.locator('[name="email"]').fill(data[i][2])
//     // await page.locator('[name="message"]').fill(data[i][3])
//     await page.waitForTimeout(3000)
   
// })
















// When('I enter information from data table2', async ({page}, dataTable) => {
//   // Step: When I enter information from data table
//   // From: tests\feature\2.contactUs.feature:11:9
//    const data = dataTable.rows();
//    console.log(data)
//    for(let el=0;el<data.length;el++){
//     console.log(el)
//     await page.locator('[name="first_name"]').fill(data[el][0])
//     await page.locator('[name="last_name"]').fill(data[el][1])
//     await page.locator('[name="email"]').fill(data[el][2])
//     await page.locator('[name="message"]').fill(data[el][3])
//     await page.waitForTimeout(2000)
//    }
// });