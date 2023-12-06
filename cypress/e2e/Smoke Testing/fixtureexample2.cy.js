describe('load or read data from fixture files ', () => {

    before(function () {

        cy.fixture('Registerdata').then(function (data) {

         this.data = data;
    
         })
    
      })


    it('it verify flaws in registration', function() {

        cy.visit("https://shop.demoqa.com/")

        cy.get('.woocommerce-store-notice__dismiss-link').click()

        cy.get('img[class="custom-logo"]').first().should('be.visible')

        cy.contains("My Account").click()

        cy.get('input[id="reg_username"]').type(this.data.username)

        cy.get('input[type="email"]').type(this.data.email)

        cy.get('input[id="reg_password"]').type(this.data.weakpassword)

        cy.get('button[name="register"]').should('be.disabled');

        cy.get('input[id="reg_password"]').clear

        cy.wait(5000)

        cy.get('input[id="reg_password"]').type(this.data.weakpassword)

        cy.get('button[name="register"]').should('have.attr', 'disabled', 'disabled');

        cy.wait(5000)

        cy.get('input[id="reg_password"]').clear().type(this.data.strongpassword)

        cy.get('button[name="register"]').click()

        cy.get('input[value="spiddy"]').should('have.attr', 'value', this.data.username)

            //or 
        //cy.get('input[value="spiddy"]').should('have.value', this.data.username)

        cy.contains(" An account is already registered with your email address. ").should('be.visible')



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