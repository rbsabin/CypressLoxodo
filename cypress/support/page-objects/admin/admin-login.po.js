/// <reference types="Cypress" />

class AdminLogin {
  visit() {
    cy.visit("/login");
    cy.location("pathname", { timeout: 5000 }).should("include", "login")
    cy.get("#mat-tab-label-0-1 .mat-tab-label-content").should("exist").should('have.text', 'Admin Login').click();

  }

  clickLoginButton() {
    cy.get("button.btn-rounded").should("exist").click();
    cy.location("pathname", { timeout: 100000 }).should("include", "dashboard")
    cy.title().should('eq', 'Loxodo');
  }


  validLogin() {
    cy.fixture("data").then((data) => {
      cy.get("#mat-input-2").should("exist").type(data.validAdmin.username);
      cy.get("#mat-input-3").should("exist").type(data.validAdmin.password);
      this.clickLoginButton();
    })
  }

}

export default AdminLogin