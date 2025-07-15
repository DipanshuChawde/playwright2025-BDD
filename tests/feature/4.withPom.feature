Feature: Verify login pahe of Demoblaze with pom
Scenario: verify login page of demoblaze2
        Given I navigate to this url "https://www.demoblaze.com/"
        When I click on login Log-in button2
        And I enter userid and password and click on login button
        Then I verify for logout-button and correct userid
        And I logout from page


       