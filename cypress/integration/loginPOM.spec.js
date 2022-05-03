import { loginPage } from "../page_objects/loginPage"

describe ('login POM', () => {
    it ('login with valid data', () => {
        cy.visit('/login');
        //loginPage.emailInput.type('todorovic87jelena@gmail.com');
        //loginPage.passwordInput.type('2005makstanja');
        //loginPage.submitBtn.click();
        loginPage.login('todorovic87jelena@gmail.com','2005makstanja');
    })
})


