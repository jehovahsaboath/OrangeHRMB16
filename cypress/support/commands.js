// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', () => {
    

    cy.visit("https://orangehrm.qedgetech.com/symfony/web/index.php/auth/login")
    
    cy.get("input[placeholder='Username']").type(Cypress.env("username"))

    cy.get("input[placeholder='Password']").type(Cypress.env("password"))

    cy.get("button[type='submit']").click()

    cy.contains("Dashboard").should("be.visible")



})

Cypress.Commands.add('loginfail', (user, pass) => {
    

    cy.visit("/web/index.php/auth/login")
    
    cy.get("input[placeholder='Username']").type("user")

    cy.get("input[placeholder='Password']").type("pass")

    cy.get("button[type='submit']").click()

    cy.contains("Invalid credentials").should("be.visible")



})


Cypress.Commands.add("enterText", (element, text)=>{


    if(element.includes("//")){
	
	   cy.get(element).type(text)
	
	}
	else{
	
	cy.get(element).type(text)
	cy.log("the text type is:"+text)


    }




})