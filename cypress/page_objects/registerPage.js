class RegisterPage{
    get firstNameInput () {
        return cy.get('#first-name')
    }
    get lastNameInput () {
        return cy.get('#last-name')
    }
    get emailInput () {
       return cy.get ('#email')
    }
    get passwordInput () {
        return cy.get ('#password')
    }
    get passwordConfirmationInput () {
        return cy.get('#password-confirmation')
    }
    get tosCheckbox () {
        return cy.get('[type="checkbox"]').check()
    }
    get submitBtn() {
        return cy.get('button')
    }
    get registerHeading() {
        return cy.get('h1')
    }
    get errorMsg()  {
        return cy.get ('p[class = "alert alert-danger"]')
    }    
    register(firstName, lastName, email, password) {
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.passwordConfirmationInput.type(password)
        this.tosCheckbox.check()
        this.submitBtn.click()
    }
}


export const registerPage = new RegisterPage();

