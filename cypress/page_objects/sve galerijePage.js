/// <reference types = "Cypress"/>

class AllGalleriesPage {
    get searchInput() {
        return cy.get('input[placeholder="Search..."]');
    }
    get filterBtn() {
        return cy.get('button[class="btn btn-outline-secondary input-button"]')
    }
    get gallery () {
        return cy.get('a[href="/galleries/151"]').contains('Pas')
    }
    get galleryApp (){
        return cy.get('a[class="navbar-brand router-link-exact-active router-link-active"]').contains("Gallery App")
        
    }
    get loadMoreBtn () {
        return cy.get('button[class="btn btn-custom"]').contains("Load More")
    }

    allGalleries(search, filter, gallery, loadMore) {
        this.searchInput.type("pas")
        this.filterBtn.type(' btn btn-outline-secodary')
        this.gallery.type("Pas")
        this.galleryApp.type("Gallery App")
        this.loadMoreBtn.type("Load More")
    }
}

export const allGalleriesPage = new AllGalleriesPage