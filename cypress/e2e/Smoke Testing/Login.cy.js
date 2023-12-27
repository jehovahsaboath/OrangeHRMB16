describe('Validate Login Functionality', () => {
    
    it('Veify login with Valid input details', () => {

        cy.login()

    })

    it('verify login with valid username and Invalid password', () => {

        cy.visit("/web/index.php/auth/login")
    
        cy.get("input[placeholder='Username']").type(Cypress.env("username"))
        
        cy.get("input[placeholder='Password']").type(Cypress.env("invalidpassword"))

        cy.get("button[type='submit']").click()

        cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("be.visible")

    })

    it('verify login with Invalid username and valid password', () => {

        cy.visit("/web/index.php/auth/login")
    
        cy.get("input[placeholder='Username']").type(Cypress.env("invalidusername"))

        cy.get("input[placeholder='Password']").type(Cypress.env("password"))

        cy.get("button[type='submit']").click()

        cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("be.visible")

    })

    it('verify login with Invalid username and Invalid password', () => {
        
        //cy.viewport("ipad-mini")

        cy.visit(Cypress.env("loginurl"))
    
        cy.get("input[placeholder='Username']").type(Cypress.env("invalidusername"))

        cy.get("input[placeholder='Password']").type(Cypress.env("invalidpassword"))

        cy.get("button[type='submit']").click()

        cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("be.visible")

    })



  })