import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";

import dashboardpage from "../../Pages/dashboardpage.pom"

import addemployee from "../../Pages/addemployee.pom";

import data from "../../fixtures/logindata.json"


Given('that user Login to Application', () => {

    cy.login(data.username, data.password)

})


And('click on PIM module', () =>{

    cy.contains(dashboardpage.pimmenu()).click()

})


And('user clicks on the Add Employee submenu', () =>{

    cy.contains(dashboardpage.addemployee()).click()

})

And('user clicks on the Add button', () =>{

    cy.get(dashboardpage.addemployee()).click()

})

And('user enters firstname as {string} and lastname as {string}', (firstname, lastname) =>{

    cy.get(addemployee.FirstNameInput()).type(firstname)
    cy.get(addemployee.LastNameInput()).type(lastname)


})

And('user clicks on the save button', () =>{

    cy.get(addemployee.saveBtn()).click()

})

Then('user should get sucessfully added message', () =>{

    cy.contains(addemployee.sucessmessage()).should('be.visible')

})