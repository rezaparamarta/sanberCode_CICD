import saucedemoPage from '../../support/pageObject/saucedemoPage';

describe('Saucedemo', function() {
    beforeEach(() => {
        cy.visit('/');
    });
    it('login success', function() {
        // Test steps
        cy.loginSaucedemo('standard_user', 'secret_sauce');
        // Assertions Validation
        cy.url().should('include', '/inventory.html');
    });

    it('login failed - empty username', function() {
        // Test steps
        cy.loginSaucedemo(' ', 'secret_sauce');
        // Assertions Validation
        cy.wait(1000);
        cy.verifyError('Epic sadface: Username and password do not match any user in this service');
    });

    it('login failed - locked_out_user', function() {
        // Test steps
        cy.loginSaucedemo('locked_out_user', 'secret_sauce');
        // Assertions Validation
        cy.wait(1000);
        cy.verifyError('Epic sadface: Sorry, this user has been locked out.');
    });

    it('login success', () => {
        // Test steps
        cy.loginSaucedemo('standard_user', 'secret_sauce');
        cy.get('[data-test="title"]').should('contain.text', 'Products');
    });

    it('pageObjectModel', () => {
        // Test steps
        cy.get('#password').type('secret_sauce');
        saucedemoPage.clickloginButton();
    });

    // Penerapan fixture
    it('Success Login', () => {
        cy.fixture('users.json').then((users) => {
            const datauser = users[0];
            cy.loginSaucedemo(datauser.username, datauser.password);
            cy.get('[data-test="title"]').should('contain.text', 'Products');
        });

    it('login env', () => {
        cy.ketik('#user-name', 'standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    });
    })
});