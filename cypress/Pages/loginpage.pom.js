class Loginpage {

    OrangeHRMlogo() {

        return '//img[@alt="company-branding"]'

    }

    usernameinput() {

        return "input[placeholder='Username']"

    }

    passwordinput() {

        return "input[placeholder='Password']"

    }


    loginBtn() {

        return "button[type='submit']"

    }
    errormessage(){

        return "Invalid credentials"

    }

}

const login = new Loginpage
export default login