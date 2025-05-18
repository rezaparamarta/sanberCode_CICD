import addtoCart from '../../support/pageObject/addtoCart';

describe('Add to Cart', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('login success', () => {
        cy.loginSaucedemo('standard_user', 'secret_sauce');
        addtoCart.verifyCatalogPage('Products');
        addtoCart.selectProduct();
        addtoCart.cartValue('1');
        addtoCart.checkProduInformation();
        addtoCart.verifyPage('/cart.html');
    });
});