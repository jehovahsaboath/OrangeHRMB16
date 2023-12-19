
Feature: validating Add Employee function
    we want to verify Add Employee function

    Scenario: Add Employee Functionality Test

        Given that user Login to Application
        And click on PIM module
        And user clicks on the Add Employee submenu
        And user enters firstname as "freeman" and lastname as "agboman"
        And user clicks on the save button
        Then user should get sucessfully added message


        #  Example:
        #     | firstnam   | lastname |
        #     | adami      | adamomo  |
        #     | Aadminm    | rogas    |
        #     | Adminadmin | pasumi   |


