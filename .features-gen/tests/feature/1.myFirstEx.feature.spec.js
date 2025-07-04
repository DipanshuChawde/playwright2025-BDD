// Generated from: tests\feature\1.myFirstEx.feature
import { test } from "playwright-bdd";

test.describe('demo example', () => {

  test('Writing first feature file', async ({ Given, page, When, Then }) => { 
    await Given('I navigate to url', null, { page }); 
    await When('I check for title of page', null, { page }); 
    await Then('I am waiting on page to see results', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\feature\\1.myFirstEx.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given I navigate to url","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When I check for title of page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then I am waiting on page to see results","stepMatchArguments":[]}]},
]; // bdd-data-end