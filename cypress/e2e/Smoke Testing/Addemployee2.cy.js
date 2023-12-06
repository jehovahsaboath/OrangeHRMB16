import data from "../fixtures/Addemployee2.json"

describe('Add Employee functionality', function() {

    before(function () {

        cy.fixture('Addemployee2').then(function (data) {

         this.data = data;
    
         })
    
      })

    it.only('Veify AddEmployee with valid details1', function() {

        // cy.login(logindata.username, logindata.password)

        // cy.contains(dashboard.adminmenu()).click()

        // jobtitle.createjobTitle(this.data.jobtitle, this.data.jobdescription)


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         cy.get('input[name="username"]').type(this.data.username)
         cy.get('input[name="password"]').type(this.data.password)
         cy.get('button[type="submit"]').click()

         cy.contains("Dashboard").should('be.visible')

         cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
         cy.contains("Add Employee").click()

         let RandomText = (Math.random() + 1).toString(36).substring(7);
         cy.get('input[name="firstName"]').type(this.data.employeefirstName + RandomText)
         cy.get('input[name="lastName"]').type(this.data.employeeLastName + RandomText)
         cy.contains(" Save ").click()
         cy.contains("Successfully Saved").should('be.visible')
         cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click()
         cy.contains("Logout").click()



    })

})

