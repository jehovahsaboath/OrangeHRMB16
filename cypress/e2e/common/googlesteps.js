import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open Google page', () => {
    
    cy.visit("https://www.google.com/")

})

Then('I see {string} in the title', () => {
    
    cy.title().should("eq", "Google")

})

