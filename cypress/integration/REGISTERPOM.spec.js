
import { registerPage } from "../page_objects/registerPage"

describe ('registration', () => {

    beforeEach('visit all register', () => { 
        cy.visit('/register');
        cy.url().should('contains', '/register')
        registerPage.registerHeading. should('have.text','Register');
    })  

    it('register with invalid email', () => { 
        registerPage.register('Jelena', 'Todorovic', 'todorovic87jelena@gmail', 'asdfghjk123', 'asdfghjk123')
        registerPage.errorMsg.should('be.visible')
             .and('have.text', 'The email must be a valid email address.')
             .and('have.css', 'background-color','rgb(248, 215, 218)')
             cy.url().should('include', '/register')

    })

    it('register with invalid password', () => {
        registerPage.register('Jelena', 'Todorovic', 'todorovic87jelena@gmail', 'asdfghjk', 'asdfghjk')
        registerPage.errorMsg.should('be.visible')
             .and('have.text', 'The password format is invalid.')
             .and('have.css', 'background-color','rgb(248, 215, 218)')
             cy.url().should('include', '/register')

    })

    it('register without checkbox ', () => {
        registerPage.register('Jelena', 'Todorovic', 'todorovic87jelena@gmail', 'asdfghjk', 'asdfghjk')
        registerPage.errorMsg.should('be.visible')
            .and('have.text', 'The terms and conditions must be accepted.')
            .and('have.css', 'background-color','rgb(248, 215, 218)')
            cy.url().should('include', '/register')

     })
    
     xit('register with valid data', () => {
        cy.visit('/register')
        cy.url().should('contains', '/register')
        registerPage.registerHeading. should('have.text','Register');
        registerPage.register('Jelena', 'Todorovic', 'todorovic877jelena1@gmail.com', 'asdfghjk123', 'asdfghjk123')
        cy.url().should('include', '/register')

     })

    })
