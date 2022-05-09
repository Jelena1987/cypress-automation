/// <reference types = "Cypress"/>

import {createGalleryPage} from "../page_objects/createGalleryPage";
import {faker} from '@faker-js/faker';
import { loginPage } from "../page_objects/loginPage"


describe('createGallery POM', () => {
    let createGalleryData = {
        title: faker.name.jobTitle(),
        description: faker.lorem.word(),
        image:'https://i.pinimg.com/474x/c7/dc/93/c7dc931e045e351dd1392610bcbabf92.jpg'
    }  
    before('login in gallery app', () => {
        cy.visit('/login')
        loginPage.login('todorovic87jelena@gmail.com','2005makstanja');
        cy.url().should('include', '/login');
        cy.wait(3000);
        cy.visit('/create');
        cy.url().should('include', '/create')
    })

    
           
        
    })


