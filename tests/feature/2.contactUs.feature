Feature: verify contact us page

    Scenario: SC001-verify contact us page with valid data
        Given I navigate to contact us page
        When I enter infomation
        Then I click on submit button
        And I verify for validation message

    # Scenario: SC002-verify contact us page with valid data
    #     Given I navigate to contact us page
    #     When I enter information from data table
    #         | aditya | masalkar | aditya@gmail.com | i am learning java |
    #     Then I click on submit button
    #     And I verify for validation message