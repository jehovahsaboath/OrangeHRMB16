import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

import loginpage from "../../Pages/loginpage.pom"

import dashboardpage from "../../Pages/dashboardpage.pom"


Given('that user lunch the Application', () => {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})

And('enters valid username as {string}', (username) => {
    
    cy.get(loginpage.usernameinput()).type(username)


})

And('enters valid password as {string}', (password) => {
    
    cy.get(loginpage.passwordinput()).type(password)
    

})

And('clicks the Login Button', () => {
    
    cy.get(loginpage.loginBtn()).click()
    

})

Then('we should be navigated to Dashboard page', () => {
    
    cy.contains(dashboardpage.dashboardmenu()).should('be.visible')
    cy.url().should("include", '/web/index.php/dashboard/index')
    cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

Then('we should get error message', () => {
    
    cy.contains(loginpage.errormessage()).should('be.visible')
    
})
