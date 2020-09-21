Feature: Test online calculator scenarios
  Scenario: Open Calculator
    Given Open chrome browser and navigate to calculator app
    When I open the calculator app
    Then I should be able to see a calculator

  Scenario Outline: Test subtraction, division and CE functionalities
    Given Open chrome browser and start application
    When I enter following values and press CE button
      | value1   | <value1>   |
      | value2   | <value2>   |
      | operator | <operator> |
    Then I should be able to see
      | expected | <expected> |
    Examples:
      | value1 | value2 | operator | expected |
      | 2      | 2      | /        | 1        |
      | 3      | 3      | /        | 1        |
      | 24     | 24     | /        | 1        |