class LoginPage {
    get emailInput() {
        return cy.get('#email');
    }
    get passwordInput (){
        return cy.get('#password');
    }
    get submitBtn() {
        return cy.get('button[type ="submit"]');
    }
    get loginHeading() {
        return cy.get('h1')
    }
    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitBtn.click()
    } 
    get errorMsg()  {
        return cy.get ('p[class = "alert alert-danger"]')
    }
}
export const loginPage = new LoginPage();




