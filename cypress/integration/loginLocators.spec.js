/// <reference types ="Cypress"/>
const Locators = require ('../fixtures/Locators.json');
describe('Login with locators', () => {

    before('visit login page', () =>{
        cy.visit('/login');
    })

    it('login with valid data', () => {
        cy.visit('/login');  
        cy.get(Locators.Login.emailInput).type('todorovic87jelena@gmail.com');
        cy.get(Locators.Login.passwordInput).type('2005makstanja');
        cy.get(Locators.Login.submitBtn).click();
        cy.url().should('not.include', '/login') 
    })
    it('login with valid data', () => {
        cy.visit('/login');  
        cy.get(Locators.Login.emailInput).type('todorovic87jelena@gmail.com');
        cy.get(Locators.Login.passwordInput).type('2005makstanja');
        cy.get(Locators.Login.submitBtn).click();
        cy.url().should('not.include', '/login') 
    })
    it('login with valid data', () => {
        cy.visit('/login');  
        cy.get(Locators.Login.emailInput).type('todorovic87jelena@gmail.com');
        cy.get(Locators.Login.passwordInput).type('2005makstanja');
        cy.get(Locators.Login.submitBtn).click();
        cy.url().should('not.include', '/login') 
    })
    it('logout', () => {
        cy.get("a[class='nav-link nav-buttons']").should('have.length', 3);
        cy.get("a[class='nav-link nav-buttons']").eq(2).click();

    })

})

