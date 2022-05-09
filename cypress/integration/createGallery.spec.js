/// <reference types = 'Cypress' />
import {createGallery} from "../page_objects/createGallery"
import {faker} from '@faker-js/faker';
import { loginPage } from "../page_objects/loginPage"


describe('createGallery', () => {
    let createGalleryData = {
        title: faker.name.jobTitle(),
        description: faker.lorem.word(),
        image:'https://news.cgtn.com/news/2020-09-20/Spider-flower-The-flower-with-a-distinctive-display-TVYLozFKg0/img/9c42156e261a4d2282370c03fce43a0a/9c42156e261a4d2282370c03fce43a0a.jpeg',
        
    }    


    beforeEach ('login and visit create gallery page', () => {
        cy.loginViaBackend()
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
     
        createGallery.errMsg.should('be.visible')
        .and('have.text', 'The title must be at least 2 characters.')
        cy.url().should('include', '/create')

    })

    it('invalid format of image',() =>{
        createGallery.createGallery(
        createGalleryData.title,
        createGalleryData.description,
        'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111'   
        )
        
        createGallery.errMsg.should('be.visible')
        .and('have.text', 'Wrong format of image')
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.url().should('include', '/create')

    })


    it('create two images in one gallery',() => {
        createGallery.imageCreateGallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.image,
            createGalleryData.addImagebutton,
            createGalleryData.imageInput
            
        )
        cy.url().should('not.include', '/create')
    })
           
    it('cancel creating gallery', () => {
        createGallery.cancelCreateGallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.image
        )
        
        cy.url().should('not.include','/create')
    })

    it('create gallery with valid data',() => {
        createGallery.createGallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.image,
        ) 
         
         cy.url().should('not.include', '/create')
    })       

    it('logout', () => {
        createGallery.logoutCreateGallery(
            createGalleryData.logoutBtn   
        )
        cy.url().should('not.include', '/create')
    })
        })

 

