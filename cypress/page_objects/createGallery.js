class CreateGallery {
    get createGalleryHeading() {
        return cy.get('h1')
    }
    get titleInput() {
        return cy.get('#title')
    }

    get descriptionInput() {
        return cy.get('#description')
    }

    get imageUrlInput() {
        return cy.get('.input-group')
    }

    get arrowUpBtn() {
        return cy.get('.fa-chevron-circle-up')
    }

    get arrowDownBtn() {
        return cy.get('.fa-chevron-circle-down')
    }

    get addImageButton() {
        return cy.get('button').contains('Add image').eq(0)
    }

    get trashBtn() {
        return cy.get('.fa-trash')

    }
    get imageInputParent() {
        return cy.get('.input-group').eq(1)
    }
    get errMsg () {
        return cy.get('p[class="alert alert-danger"]')
    }

    get cancelBtn () {
        return cy.get('button[type="submit"]').contains('Cancel')
    }
    get submitBtn() {
        return cy.get('button[type="submit"]').contains('Submit');
    }

    

    createGallery(title, description, image) {
        this.titleInput.type(title)
        this.descriptionInput.type(description)
        this.imageUrlInput.type(image)
        this.addImageButton.click()
        this.imageInputParent.type(image)
        //this.submitBtn.click()
        

        }
}

export const createGallery = new CreateGallery();