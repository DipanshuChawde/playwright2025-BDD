// Generated from: tests\feature\2.contactUs.feature
import { test } from "playwright-bdd";

test.describe('verify contact us page', () => {

  test.describe('Scenario Outline name: SC003-verify contact us page with valid data', () => {

    test('Example #1', async ({ Given, page, When, Then, And }) => { 
      await Given('I navigate to contact us page', null, { page }); 
      await When('I enter information from data table3 aditya,masalkar,aditya@gmail.com,"i am learning java"'); 
      await Then('I click on submit button', null, { page }); 
      await And('I verify for validation message', null, { page }); 
    });

    test('Example #2', async ({ Given, page, When, Then, And }) => { 
      await Given('I navigate to contact us page', null, { page }); 
      await When('I enter information from data table3 dipanshu,chawde,dipanshu@gmail.com,"hi"'); 
      await Then('I click on submit button', null, { page }); 
      await And('I verify for validation message', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\feature\\2.contactUs.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given I navigate to contact us page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When I enter information from data table3 aditya,masalkar,aditya@gmail.com,\"i am learning java\"","stepMatchArguments":[{"group":{"start":37,"value":"aditya","children":[]},"parameterTypeName":"word"},{"group":{"start":44,"value":"masalkar","children":[]},"parameterTypeName":"word"},{"group":{"start":53,"value":"aditya@gmail.com","children":[]},"parameterTypeName":"word"},{"group":{"start":70,"value":"\"i am learning java\"","children":[{"start":71,"value":"i am learning java","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then I click on submit button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And I verify for validation message","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given I navigate to contact us page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When I enter information from data table3 dipanshu,chawde,dipanshu@gmail.com,\"hi\"","stepMatchArguments":[{"group":{"start":37,"value":"dipanshu","children":[]},"parameterTypeName":"word"},{"group":{"start":46,"value":"chawde","children":[]},"parameterTypeName":"word"},{"group":{"start":53,"value":"dipanshu@gmail.com","children":[]},"parameterTypeName":"word"},{"group":{"start":72,"value":"\"hi\"","children":[{"start":73,"value":"hi","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then I click on submit button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And I verify for validation message","stepMatchArguments":[]}]},
]; // bdd-data-end