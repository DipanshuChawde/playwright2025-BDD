// Generated from: tests\feature\3.dataDriven.feature
import { test } from "playwright-bdd";

test.describe('Verify login pahe of Demoblaze', () => {

  test.describe('verify login page of demoblaze', () => {

    test('Example #1', async ({ Given, page, When, And, Then }) => { 
      await Given('I navigate to url "https://www.demoblaze.com/"', null, { page }); 
      await When('I click on login Log in button', null, { page }); 
      await And('I enter "dipanshu" and "dipanshu@123" and click on login button', null, { page }); 
      await Then('I verify for logout button and correct "dipanshu"', null, { page }); 
      await And('I logout', null, { page }); 
    });

    test('Example #2', async ({ Given, page, When, And, Then }) => { 
      await Given('I navigate to url "https://www.demoblaze.com/"', null, { page }); 
      await When('I click on login Log in button', null, { page }); 
      await And('I enter "tanish" and "tanish@123" and click on login button', null, { page }); 
      await Then('I verify for logout button and correct "tanish"', null, { page }); 
      await And('I logout', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\feature\\3.dataDriven.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to url \"https://www.demoblaze.com/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://www.demoblaze.com/\"","children":[{"start":19,"value":"https://www.demoblaze.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on login Log in button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I enter \"dipanshu\" and \"dipanshu@123\" and click on login button","stepMatchArguments":[{"group":{"start":8,"value":"\"dipanshu\"","children":[{"start":9,"value":"dipanshu","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":23,"value":"\"dipanshu@123\"","children":[{"start":24,"value":"dipanshu@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I verify for logout button and correct \"dipanshu\"","stepMatchArguments":[{"group":{"start":39,"value":"\"dipanshu\"","children":[{"start":40,"value":"dipanshu","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And I logout","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to url \"https://www.demoblaze.com/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://www.demoblaze.com/\"","children":[{"start":19,"value":"https://www.demoblaze.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on login Log in button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I enter \"tanish\" and \"tanish@123\" and click on login button","stepMatchArguments":[{"group":{"start":8,"value":"\"tanish\"","children":[{"start":9,"value":"tanish","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":21,"value":"\"tanish@123\"","children":[{"start":22,"value":"tanish@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I verify for logout button and correct \"tanish\"","stepMatchArguments":[{"group":{"start":39,"value":"\"tanish\"","children":[{"start":40,"value":"tanish","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And I logout","stepMatchArguments":[]}]},
]; // bdd-data-end