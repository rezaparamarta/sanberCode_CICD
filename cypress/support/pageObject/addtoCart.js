// addtoCart.js
class addtoCart {
    catalogTitleSelector = '[data-test="title"]';
    anyProduct = '[data-test="add-to-cart-sauce-labs-backpack"]';
    verifyCart = '[data-test="shopping-cart-link"]';
    cartIcon = '[data-test="shopping-cart-link"]';

    verifyCatalogPage(item) {
        return cy.get(this.catalogTitleSelector).should('contain.text', item);
    }

    selectProduct() {
        cy.get(this.anyProduct).click();
    }

    cartValue(value) {
        return cy.get(this.verifyCart).should('contain.text', value);
    }

    checkProduInformation() {
        cy.get(this.cartIcon).click();
    }

    verifyPage(endpoint) {
        return cy.url().should('include', endpoint);
    }
}

export default new addtoCart();
