
Feature: validating Add Employee function
    we want to verify Add Employee function with multiple set of data

    Scenario Outline: Add Employee Functionality Test

        Given that user Login into the Application
        And the user clicks on PIM module
        And the user clicks on the Add Employee submenu
        And the user enters firstname as "freeman" and lastname as "agboman"
        And user clicks on the save button
        Then user should get sucessfully added message


         Example:
            | firstnam   | lastname |
            | adami      | adamomo  |
            | Aadminm    | rogas    |
            | Adminadmin | pasumi   |


