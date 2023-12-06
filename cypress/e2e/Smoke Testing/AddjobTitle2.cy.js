
import dashboard from "../Pages/dashboardpage.pom"
import jobtitle from "../Pages/Addjobtile.pom"
import data from "../fixtures/AddjobTitle.json"
import logindata from "../fixtures/logindata.json"

describe('Add job Title functionality', function() {

    before(function () {

        cy.fixture('AddjobTitle.json').then(function (data) {

         this.data = data;
    
         })
    
      })

    it.only('Veify add job Tile functionality with valid details', function() {

        cy.login(logindata.username, logindata.password)

        cy.contains(dashboard.adminmenu()).click()

        jobtitle.createjobTitle(this.data.jobtitle, this.data.jobdescription)



        
        // cy.contains(jobtitle.JobMenu).click()
        // cy.contains(jobtitle.jobTitle).click()
        // cy.get(jobtitle.addBottun).click()
        // let Randomtext = (Math.random() + 1).toString(36).substring(7);
        // cy.get(jobtitle.JobTileInputField()).type(data.jobtitle + Randomtext)
        // cy.get(jobtitle.JobdescriptionField()).type(data.jobdescription + Randomtext)
        // cy.get(jobtitle.SaveBtn()).click()
        // cy.contains(jobtitle.sucessmessage()).should('be.visible')


        // cy.visit("/web/index.php/auth/login")
        // cy.get("input[placeholder='Username']").type("Admin")
        // cy.get("input[placeholder='Password']").type("admin123")
        // cy.get("button[type='submit']").click()
        // cy.contains("Dashboard").should("be.visible")
        // cy.contains("Admin").click()
        // cy.contains("Job").click()
        // cy.contains("Job Titles").click()
        // cy.contains("Add").click()
        // let RandomText = (Math.random() + 1).toString(36).substring(7);
        // cy.get(':nth-child(2) > .oxd-input').type(data.jobtitle+RandomText)
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type(data.jobdescription)
        // cy.contains("Save").click()
        // cy.contains("Successfully Saved").should("be.visible")



    })

    it.skip('Veify length of character for Job title field', () => {
        cy.visit(Cypress.env("loginurl"))

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.contains("Dashboard").should("be.visible")
        cy.contains("Admin").click()
        cy.contains("Job").click()
        cy.contains("Job Titles").click()
        cy.contains("Add").click()
        cy.get(':nth-child(2) > .oxd-input').type(data.jobtitle2)
        cy.contains("Should not exceed 100 characters").should("be.visible")


    })


})
