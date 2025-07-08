// Generated from: tests\feature\2.contactUs.feature
import { test } from "playwright-bdd";

test.describe('verify contact us page', () => {

  test('SC001-verify contact us page with valid data', async ({ Given, page, When, Then, And }) => { 
    await Given('I navigate to contact us page', null, { page }); 
    await When('I enter infomation', null, { page }); 
    await Then('I click on submit button', null, { page }); 
    await And('I verify for validation message', null, { page }); 
  });

  test('SC002-verify contact us page with valid data', async ({ Given, page, When, Then, And }) => { 
    await Given('I navigate to contact us page', null, { page }); 
    await When('I enter information from data table', {"dataTable":{"rows":[{"cells":[{"value":"aditya"},{"value":"masalkar"},{"value":"aditya@gmail.com"},{"value":"i am learning java"}]}]}}, { page }); 
    await Then('I click on submit button', null, { page }); 
    await And('I verify for validation message', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\feature\\2.contactUs.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to contact us page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter infomation","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I click on submit button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And I verify for validation message","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I navigate to contact us page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I enter information from data table","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I click on submit button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And I verify for validation message","stepMatchArguments":[]}]},
]; // bdd-data-end