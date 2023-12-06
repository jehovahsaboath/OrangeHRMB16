import addemployee from "../Pages/addemployee.pom"
import data from "../fixtures/Addemployee.json"
import dashboard from "../Pages/dashboardpage.pom"

describe(`Verify Add employee functionality`, ()=>{

    beforeEach("before Each", ()=>{

        cy.login()

        cy.contains(dashboard.pimmenu()).click()

        cy.contains('Add Employee').click()

    })

    it("Verify addEmployee with Valid details ", ()=>{

    
        let RandomText = (Math.random() + 1).toString(36).substring(7);

        cy.get(addemployee.FirstNameInput()).type(data.empfirstName+RandomText)

        cy.get(addemployee.LastNameInput()).type(data.empLastName+RandomText)

        cy.get(addemployee.saveBtn()).click()

        cy.contains(addemployee.sucessmessage()).should('be.visible')

        
    })

    it("Verify mandatory detail in Add emplyee", ()=> {


        cy.get(addemployee.saveBtn()).click()

         cy.contains(addemployee.nameErrorMessage()).should('be.visible')

    })
    
    it("verify character Limits for name field", ()=> {

         cy.get('input[placeholder="First Name"]').type(data.characterLimit)

        cy.contains(addemployee.characterErrorMessage()).should('be.visible')

    })

    
})
