/// <reference types="Cypress"/>

import {allGalleriesPage} from "../page_objects/allGalleriesPage"

describe('allGalleries POM', () => {
    let allGalleriesData = {
        search: 'pas',
        gallery: "/galleries/151"

    }
    
    before('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.url().should('include', 'https://gallery-app.vivifyideas.com/')
    })

    it('visit all galleries', () => {
        allGalleriesPage.allGalleries (
            allGalleriesData.search,
            allGalleriesData.gallery
        )
    })
})