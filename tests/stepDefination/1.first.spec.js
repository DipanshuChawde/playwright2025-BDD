import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();

Given('I navigate to url', async ({ page }) => {
    // Step: Given I navigate to url
    // From: tests\feature\1.myFristEx.feature:3:9
    await page.goto('https://playwright.dev/')
});

When('I check for title of page', async ({ page }) => {
    // Step: When I check for title of page
    // From: tests\feature\1.myFristEx.feature:4:9
    await expect(page).toHaveTitle(/Playwright/);
});

Then('I am waiting on page to see results', async ({ page }) => {
    // Step: Then I am waiting on page to see results
    // From: tests\feature\1.myFristEx.feature:5:9
    await page.waitForTimeout(3000)
});



//Given I navigate to url

// Given('I navigate to url',async({page})=>{

// })