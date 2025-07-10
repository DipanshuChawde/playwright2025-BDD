Feature: Verify login pahe of Demoblaze

    Scenario Outline: verify login page of demoblaze
        Given I navigate to url "https://www.demoblaze.com/"
        When I click on login Log in button
        And I enter "<uid>" and "<pw>" and click on login button
        Then I verify for logout button and correct "<uid>"
        And I logout
        Examples:
            | uid      | pw           |
            | dipanshu | dipanshu@123 |
            | tanish   | tanish@123   |

       
            

