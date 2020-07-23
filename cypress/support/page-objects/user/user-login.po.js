/// <reference types="Cypress" />
class UserLogin {
    visit() {
        cy.visit("/login");
        cy.location("pathname", { timeout: 5000 }).should("include", "login")
    }

    tenant() {
        return cy.get("input[name=tenant]").should("exist");
    }

    username() {
        return cy.get("#mat-input-0").should("exist");
    }
    password() {
        return cy.get("#mat-input-1").should("exist");
    }

    loginButton() {
        return cy.get("button.btn-rounded").should("exist").click();
    }

    alert() {
        return cy.get('.pl10').should('exist');
    }

    clickLoginButton() {
        this.loginButton().click();
        cy.location("pathname", { timeout: 100000 }).should("include", "dashboard")
        cy.title().should('eq', 'Loxodo');
    }


    validLogin() {
        cy.fixture("data").then((data) => {
            var validUsers = data.validUsers;
            var validUser = validUsers[Math.floor(Math.random() * validUsers.length)];
            this.tenant().type(validUser.tenant);
            this.username().type(validUser.username);
            this.password().type(validUser.password);
            this.clickLoginButton();
        })
    }


    login(tenant, username, password) {
        this.tenant().type(tenant);
        this.username().type(username);
        this.password().type(password);
        this.loginButton().click()
    }
}

export default UserLogin;