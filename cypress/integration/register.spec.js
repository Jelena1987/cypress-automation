/// <reference types="Cypress"/>
import { faker } from '@faker-js/faker';
let randomEmail = faker.internet.email();

describe('test register', () => {
    let registerData = {
        firstName: '',
        lastName: '',
        randomEmail: '',
        password: ''
    }

    beforeEach(()=> {
        registerData.firstName = faker.name.firstName();
        registerData.lastName = faker.name.lastName();
        registerData.randomEmail = faker.internet.email();
        registerData.password = faker.internet.password();
    })

    it('register without first-name', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get(Locators.Registration.lastNameInput).type(registerData.lastName);
        cy.get(Locators.Registration.emailInput).type(registerData.randomEmail);
        cy.get(Locators.Registration.passwordInput).type(registerData.password);
        cy.get(Locators.Registration.pssword-confirmationInput).type(registerData.password);
        cy.get(Locators.Registration.tosCheckbox).check();
        cy.get(Locators.Registration.submitBtn).click();
        cy.url().should('include', '/register');
    })
    it('register without last-name', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Jelena');
        cy.get('#email').type('todorovic8jelena@gmail.com');
        cy.get('#password').type('2005makstanja555');
        cy.get('#password-confirmation').type('2005makstanja555 ');
        cy.get(':checkbox').check();
        cy.get('button').click();
        cy.url().should('include', '/register');
    })
    it('register with invalid email', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Jelena');
        cy.get('#last-name').type('Todorovic');
        cy.get('#email').type(randomEmail);
        cy.get('#password').type('2005makstanja555');
        cy.get('#password-confirmation').type('2005makstanja555 ');
        cy.get(':checkbox').check();
        cy.get('button').click();
        cy.url().should('include', '/register');
    })
    it('register with invalid password', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Jelena');
        cy.get('#last-name').type('Todorovic');
        cy.get('#email').type('todorovic8777elena@gmail.com');
        cy.get('#password').type('maks');
        cy.get('#password-confirmation').type('maks');
        cy.get(':checkbox').check();
        cy.get('button').click();
        cy.url().should('include', '/register');
    })
    it('register with invalid password-confirmation', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Jelena');
        cy.get('#last-name').type('Todorovic');
        cy.get('#email').type('todorovic8jelena@gmail.com');
        cy.get('#password').type('2005makstanja555');
        cy.get('#password-confirmation').type('2005makstanja55 ');
        cy.get(':checkbox').check();
        cy.get('button').click();
        cy.url().should('include', '/register');
    })
    it('register without checkbox', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Jelena');
        cy.get('#last-name').type('Todorovic');
        cy.get('#email').type('todorovic8777elena@gmail.com');
        cy.get('#password').type('2005makstanja55');
        cy.get('#password-confirmation').type('2005makstanja55 ');
        cy.get('button').click();
        cy.url().should('include', '/register');
    })

})


    it.skip('register with valid data', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Jelena');
        cy.get('#last-name').type('Todorovic');
        cy.get('#email').type('todorovic8jelena@gmail.com');
        cy.get('#password').type('2005makstanja555');
        cy.get('#password-confirmation').type('2005makstanja555 ');
        cy.get(':checkbox').check();
        cy.get('button').click();
        cy.url().should('not.include', '/register');
    })

