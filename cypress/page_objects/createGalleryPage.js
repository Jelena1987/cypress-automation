class CreateGalleryPage {
    get titleInput() {
        return cy.get("#title");
    }
    
    get descriptionInput() {
        return cy.get("#description");
    }

    get imageInput () {
        return cy.get('input[placeholder="image url"]');

    }

    get submitBtn () {
        return cy.get('button[type="submit"]').contains('Submit');
    
    }

    createGallery(title, description, image, submit) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageInput.type(image);
        this.submitBtn.type('Submit');
      
        
    }
}

export const createGalleryPage = new CreateGalleryPage