class Jobtitlepage {

    JobMenu = "Job"
    jobTitle = "Job Titles"
    addBottun = "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button"

    JobTileInputField() {

        return "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input"

    }

    JobDescriptionField() {

        return "textarea[placeholder='Type description here']"

    }

    AddNoteField() {

        return "textarea[placeholder='Add note']"

    }

    SaveBtn() {

        return "button[type='submit']"

    }

    successmessage() {

        return "Successfully Saved"

    }
    
    createjobTitle(jobtitle, jobdescription) {

        cy.contains(this.JobMenu).click()

        cy.contains(this.jobTitle).click()

        cy.get(this.addBottun).click()

        let Randomtext = (Math.random() + 1).toString(36).substring(7);

        cy.get(this.JobTileInputField()).type(jobtitle + Randomtext)

        cy.get(this.JobDescriptionField()).type(jobdescription)

        cy.get(this.SaveBtn()).click()

        cy.contains(this.successmessage()).should('be.visible')


    }



}

const jobtitle = new Jobtitlepage()

export default jobtitle
