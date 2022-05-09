
import { loginPage } from "../page_objects/loginPage"

describe ('login POM', () => {
    it.only('login with valid data', () => {
        cy.intercept({
            method: 'POST',  
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
        }).as ('successfulLogin');

       cy.intercept ({
            method: 'GET',
            url: 'https://gallery-api.vivifyideas.com/api/galleries?page=1&term='
       }).as('allGalleries');

        cy.visit('/login');
        cy.url(). should('contains', '/login')
        loginPage.loginHeading.should('have.text', 'Please login')
        loginPage.login('todorovic87jelena@gmail.com','2005makstanja');

        cy.wait('@successfulLogin').then(interception => {
            console.log(interception);
            expect(interception.response.statusCode).eq(200)
            expect(interception.response.statusMessage).eq('OK')
        })
        cy.wait('@allGalleries').then(interception => {
            expect(interception.response.statusCode).eq(200)
            
        })
     

    })

    it('login with valid data', () => {
        cy.intercept({
            method: 'POST',  
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
        }).as ('unsuccessfulLogin');
    
        cy.visit('/login');
        cy.url(). should('contains', '/login')
        loginPage.loginHeading.should('have.text', 'Please login')
        loginPage.login('todorovic87jelena@gmail.com','20055makstanja');
        cy.wait('@unsuccessfulLogin').then(interception => {
            console.log(interception)
            expect(interception.response.statusCode).eq(401)
            expect(interception.response.statusMessage).eq('Unauthorized')
        })
    
        loginPage.errorMsg.should('be.visible')
             .and('have.text', 'Bad Credentials')
             .and('have.css', 'background-color','rgb(248, 215, 218)')
        cy.url().should('include', '/login')

        })


    })


    
    
    
    
    