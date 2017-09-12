Feature: User with valid credential can login to facebook
  As a registered facebook user
  I want to be able to login successfully to my account
  So that i connect with my friends

  Scenario Outline: Login with invalid credentials
    Given User navigates to facebook home page
    When Enter  valid "<username>" and "<password>"
    Then Login is not successful

    Examples: 
      | username            | password |
      | jiboolau@gmail.com  | hackney1 |
      | seuntests@u.com     | london1  |
      
      
  Scenario: Login with valid credentials
    Given User navigates to facebook home page
    When Enter  valid "<ajhsdbsj>" and "<jkasds>"
    Then Login is successful


      