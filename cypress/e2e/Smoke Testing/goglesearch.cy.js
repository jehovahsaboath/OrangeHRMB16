
describe('it Perform google search', () => {
    
    it('search any item on google', () => {

      cy.visit('https://www.google.com/')

      cy.get('[type="search"]').type("free food")
      
      cy.get("div[class='lJ9FBc'] input[name='btnK']").click()

      cy.wait(3000)

      cy.reload()

      cy.go(-1)
      cy.go(+1)

    })

  })