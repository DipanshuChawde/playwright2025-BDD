Feature: verify contact us page

    # Scenario: SC001-verify contact us page with valid data
    #     Given I navigate to contact us page
    #     When I enter infomation
    #     Then I click on submit button
    #     And I verify for validation message

    # Scenario: SC002-verify contact us page with valid data
    #     Given I navigate to contact us page
    #     When I enter information from data table
    #         | fn    | aditya             |
    #         | ln    | masalkar           |
    #         | email | aditya@gmail.com   |
    #         | msg   | i am learning java |
    #     Then I click on submit button
    #     And I verify for validation message

    # Scenario: SC003-verify contact us page with valid data
    #     Given I navigate to contact us page
    #     When I enter information from data table2
    #         | fn       | ln       | email              | msg                |
    #         | aditya   | masalkar | aditya@gmail.com   | i am learning java |
    #         | dipanshu | chawde   | dipanshu@gmail.com | hi                 |
    #     Then I click on submit button
    #     And I verify for validation message

    Scenario Outline: Scenario Outline name: SC003-verify contact us page with valid data
        Given I navigate to contact us page
        When I enter information from data table3 <fn>,<ln>,<email>,"<msg>" 
        Then I click on submit button
        And I verify for validation message
        Examples:
            | fn       | ln       | email              | msg                |
            | aditya   | masalkar | aditya@gmail.com   | i am learning java |
            | dipanshu | chawde   | dipanshu@gmail.com | hi                 |









# Scenario: SC002-verify contact us page with valid data
#     Given I navigate to contact us page
#     When I enter information from data table2
#         | fn       | ln       | email              | msg                |
#         | aditya   | masalkar | aditya@gmail.com   | i am learning java |
#         | dipanshu | chawde   | dipanshu@gmail.com | hi                 |
#     Then I click on submit button
#     And I verify for validation message