/// <reference types = 'Cypress' />
import {createGallery} from "../page_objects/createGallery"
import {faker} from '@faker-js/faker';
import { loginPage } from "../page_objects/loginPage"


describe('createGallery', () => {
    let createGalleryData = {
        title: faker.name.jobTitle(),
        description: faker.lorem.word(),
        image:'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg',
        
        
    }

    beforeEach ('login and visit create gallery page', () => {
        cy.visit('/login')
        loginPage.login('todorovic87jelena@gmail.com','2005makstanja');
        cy.url().should('not.include','/login');
        cy.visit('/create')
        cy.url().should('include', '/create')
    })

    it('validate page', () => {
        createGallery.createGalleryHeading
        .should('be.visible')
        .and('have.text',"Create Gallery")
    })

    it('min letters of title',() =>{
        createGallery.createGallery(
        'J',
        createGalleryData.description,
        createGalleryData.image    
        )
        cy.get('button[type="submit"]').contains('Submit').click()
        createGallery.errMsg.should('be visible')
        .and('have.text', 'The title must be at least 2 characters.')
        cy.url().should('include', '/create')

    })

    it('invalid format of image',() =>{
        createGallery.createGallery(
        createGalleryData.title,
        createGalleryData.description,
        'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111'   
        )
        cy.get('button[type="submit"]').contains('Submit').click()
        createGallery.errMsg.should('be visible')
        .and('have.text', 'Wrong format of image')
        .and('have,css', 'background-color', 'rgb(248,215,218)')
        cy.url().should('include', '/create')

    })


    it('create two images in one gallery',() => {
        createGallery.createGallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.image,
            createGalleryData.addImagebutton,
            createGalleryData.imageInputParent
            
        )

        cy.get('button[type="submit"]').contains('Submit').click()
        cy.url().should('not.include', '/create')
    })
           
    it('cancel creating gallery', () => {
        createGallery.createGallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.image
        )
        cy.get('button[type="submit"]').contains("Cancel").click()
        cy.url().should('not.include','/create')
    })

    it('deleting one image in input', () => {
        createGallery.createGallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.image
        )
        cy.get('.fa-trash').eq(1).click()
        cy.url().should('include', '/create')
    })

    it('create gallery with valid data',() => {
        createGallery.createGallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.image,
        ) 
         cy.get('button[type="submit"]').contains('Submit').click()
         cy.url().should('not.include', '/create')
    })       

    it('logout', () => {
        cy.wait(2000)
        cy.get("a[class='nav-link nav-buttons']").should('have.length', 2);
        cy.get("a[class='nav-link nav-buttons']").eq(1).click();
        cy.url().should('not.include', '/create')
    })
        })

 

