
describe('verify add to cart button', () => {


    it('verifys adding multiple items to cart', () => {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    //cy.get('div["product-action"]').click({ multiple: true})

    cy.get('button[type="button"]').click({ multiple: true })


    })





})