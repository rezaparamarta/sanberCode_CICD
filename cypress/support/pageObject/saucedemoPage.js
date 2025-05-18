class saucedemoPage {
    username = '#user-name';
    password = '#password';
    loginButton = '#login-button';
    errorMessage = '#error-message';
    title = '[data-test="title"]';

    clickloginButton() {
        cy.get(this.loginButton).click();
    }
}

module.exports = new saucedemoPage();