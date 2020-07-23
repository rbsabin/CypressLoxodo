/// <reference types="Cypress" />

describe('Landing Page', () => {
  it('Visits and validates the Loxodo Landing page components', () => {
    cy.visit("/");
    cy.url().should('include', 'loxodo');
    cy.title().should('eq', 'Loxodo')
    cy.get(".logo-login.animated.fadeInDown", { timeout: 3000 }).should("exist");
    cy.get("#mat-tab-label-0-1 .mat-tab-label-content").should("exist").should('have.text', 'Admin Login');
    cy.get("#mat-tab-label-0-0 .mat-tab-label-content").should("exist").should('have.text', 'User Login');
    cy.get("input[name=tenant]").should("exist").should('not.have.css', 'visibility: hidden');
    cy.get("#mat-input-0").should("exist").should('not.have.css', 'visibility: hidden');
    cy.get("#mat-input-1").should("exist").should('not.have.css', 'visibility: hidden');
    cy.get("a.btn-rounded").should("exist").should('not.have.css', 'visibility: hidden');
    cy.get("button.btn-rounded").should("exist").should('not.have.css', 'visibility: hidden');
    cy.get(".text-muted.fw-700.text-uppercase.heading-font-family.fs-12").should("exist").should('have.text', 'Forgot Password?');
  })
})
