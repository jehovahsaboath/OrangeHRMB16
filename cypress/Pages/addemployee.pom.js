
class Addemployeepage{
    
    addemployee(){

        return 'Add Employee'
    }

    FirstNameInput(){

        return '[name="firstName"]'
    }
    LastNameInput(){

        return '[name="lastName"]'

    }

    saveBtn(){


        return 'button[type="submit"]'
    }

    sucessmessage(){


        return "Successfully Saved"
    }

    nameErrorMessage(){


        return 'Required'
    }

    characterErrorMessage(){


        return 'Should not exceed 30 characters'
    }



}

const addemployee = new Addemployeepage()

export default addemployee

