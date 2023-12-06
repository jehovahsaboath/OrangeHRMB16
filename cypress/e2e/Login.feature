Feature: Validate Login into Application
 we are verifying login Functionality with valid and invalid data's

Scenario: verify Login valid username and valid password

Given that user lunch the Application
And enters valid username as "Admin"
And enters valid password as "admin123"
And clicks the Login Button
Then we should be navigated to Dashboard page


Scenario: verify Login invalid username and valid password

Given that user lunch the Application
And enters valid username as "AdminAd"
And enters valid password as "admin123"
And clicks the Login Button
Then we should get error message

Scenario: verify Login valid username and invalid password

Given that user lunch the Application
And enters valid username as "Admin"
And enters valid password as "admin123002"
And clicks the Login Button
Then we should get error message



# Scenario Outline: verify Login Negative Tests

# Given that user lunch the Application
# And enters valid username as "<username>"
# And enters valid password as "<password>"
# And clicks the Login Button
# Then we should get error message

# Example: 
# |username  | password|
# |Admin     | admin12gggg3|
# |Aadminm   | admin123|
# |Adminadmin| passadmin33|
