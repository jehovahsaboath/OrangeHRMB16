
import data from "../fixtures/Registerdata.json"

describe('load or read data from fixture files ', () => {

    it('it verify flaws in registration', () => {

        cy.visit("https://shop.demoqa.com/")

        cy.get('.woocommerce-store-notice__dismiss-link').click()

        cy.get('img[class="custom-logo"]').first().should('be.visible')

        cy.contains("My Account").click()

        cy.get('input[id="reg_username"]').type(data.username)

        cy.get('input[type="email"]').type(data.email)

        cy.get('input[id="reg_password"]').type(data.weakpassword)

        cy.get('button[name="register"]').should('be.disabled');

        cy.get('input[id="reg_password"]').clear

        cy.wait(5000)

        cy.get('input[id="reg_password"]').type(data.weakpassword)

        cy.get('button[name="register"]').should('have.attr', 'disabled', 'disabled');

        cy.wait(5000)

        cy.get('input[id="reg_password"]').clear().type(data.strongpassword)

        cy.get('button[name="register"]').click()

        cy.get('input[value="spiddy"]').should('have.attr', 'value', data.username)

            //or 
        //cy.get('input[value="spiddy"]').should('have.value', this.data.username)

        cy.get(".woocommerce-error > li strong").should('be.visible')



    })

    it.skip('it verify user already registered', function() {

        // cy.visit("https://shop.demoqa.com/")

        // cy.get('.woocommerce-store-notice__dismiss-link').click()

        // cy.get('img[class="custom-logo"]').first().should('be.visible')

        // cy.contains("My Account").click()

        cy.get('input[id="reg_username"]').clear.type(this.data.username2)

        cy.get('input[type="email"]').type(this.data.email2)

        //cy.get('input[id="reg_password"]').type(this.data.strongpassword)

        ///cy.get('button[name="register"]').click()

        //cy.contains("Dashboard").should('be.visible')

       


    })



})