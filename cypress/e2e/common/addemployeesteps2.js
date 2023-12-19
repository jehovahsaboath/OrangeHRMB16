import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";

import dashboard from "../../Pages/dashboardpage.pom";
import addemployee from "../../Pages/addemployee.pom";
import data from "../../fixtures/logindata.json"

Given('that user Login into the Application', () => {

    cy.login(data.username, data.password)

})

And('the user clicks on PIM module', () => {


 cy.contains(dashboard.pimmenu).click()

})