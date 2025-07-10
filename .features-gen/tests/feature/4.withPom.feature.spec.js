// Generated from: tests\feature\4.withPom.feature
import { test } from "playwright-bdd";

test.describe('Verify login pahe of Demoblaze with pom', () => {

  test('verify login page of demoblaze2', async ({ Given, page, When, And, Then }) => { 
    await Given('I navigate to this url "https://www.demoblaze.com/"', null, { page }); 
    await When('I click on login Log-in button'); 
    await And('I enter userid and password and click on login button'); 
    await Then('I verify for logout-button and correct userid'); 
    await And('I logout from page'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\feature\\4.withPom.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given I navigate to this url \"https://www.demoblaze.com/\"","stepMatchArguments":[{"group":{"start":23,"value":"\"https://www.demoblaze.com/\"","children":[{"start":24,"value":"https://www.demoblaze.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When I click on login Log-in button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"And I enter userid and password and click on login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I verify for logout-button and correct userid","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And I logout from page","stepMatchArguments":[]}]},
]; // bdd-data-end