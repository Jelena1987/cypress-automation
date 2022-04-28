/// <reference types="Cypress"/>

describe('login test', () => {
    xit('visit gallery app', () =>{
        cy.visit('https://gallery-app.vivifyideas.com/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
    })

    xit ('click on login button', () => {
        cy.get('a[href="/login"]').click();
    })

    it.only('login without email', () => {
        //cy.get('input[id="email"]');
        cy.visit('/login');
        cy.url().should('include', '/login')
        cy.get('#password').type('2005makstanja');
        cy.get('button[type="submit"]').click();
    })
    it.only('login without password', () => {
        //cy.get('input[id="email"]');
        cy.visit('/login');
        cy.url().should('include', '/login')
        cy.get('#email').type('todorovic87jelena@gmail.com');
        cy.get('button[type="submit"]').click();
    })
    it.only('login with invalid email', () => {
        //cy.get('input[id="email"]');
        cy.visit('/login');
        cy.url().should('include', '/login')
        cy.get('#email').type('todorovic87jelenagmail.com');
        cy.get('#password').type('2005makstanja');
        cy.get('button[type="submit"]').click();
    })
    it.only('login with invalid password', () => {
        //cy.get('input[id="email"]');
        cy.visit('/login');
        cy.url().should('include', '/login')
        cy.get('#email').type('todorovic87jelena@gmail.com');
        cy.get('#password').type('2005');
        cy.get('button[type="submit"]').click();
    })
    it.only('login with valid credentials', () => {
        //cy.get('input[id="email"]');
        cy.wait(1000);
        cy.visit('/login');
        cy.url().should('include', '/login')
        cy.get('#email').type('todorovic87jelena@gmail.com');
        cy.get('#password').type('2005makstanja');
        cy.get('button[type="submit"]').click();
    })

    it('logout', () => {
        //cy.wait(500);
        cy.get("a[class='nav-link nav-buttons']").should('have.length', 3);
        cy.get("a[class='nav-link nav-buttons']").eq(2).click();

    })
    
})


