

const availablefixtures = [

    {

        "name": "Registerdataprince",
        "context": "princeyyy"

    },
    {

        "name": "Registerdataspeed",
        "context": "speeeeeed"

    }

]

describe('verifies creating multiple users with different data', function () {

    // loop through both the fixtues

        availablefixtures.forEach((afixture) => {
        describe(afixture.context, () => {

            //mostly used for Setup Part
            before(function () {

                cy.fixture(afixture.name).then(function (data) {
                    this.data = data;

                })

            })

            it('Cypress Test Case - add user', function () {

                cy.visit('https://shop.demoqa.com/my-account/');

                //cy.wait(40000)
                cy.get("#reg_username").type(this.data.username)

                cy.get("#reg_email").type(this.data.email)

                cy.get("#reg_password").type(this.data.weakpassword)

                cy.get('button[name="register"]').should('be.disabled')

                //or
                //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
               // cy.get('button[name="register"]').should('have.attr', 'disabled', 'disabled');
                // cy.get("#reg_password").clear()
                //cy.wait(15000)

                cy.get("#reg_password").clear().type(this.data.strongpassword)

                cy.wait(5000)

                cy.get('button[name="register"]').click()

                //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');

                cy.get("input#username").should('have.attr', 'value', this.data.username)

                // // //or

                // // cy.get("#username").should("have.value", this.data.username)

                // // cy.contains(" An account is already registered with your email address. ").should("be.visible")
            })

        })
    })

})
