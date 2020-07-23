/// <reference types="Cypress" />
describe("Admin Login", () => {
  it("to validate successful admin login", () => {
    cy.adminLogin();
  })

  after(() => {
    // cy.logout();
  })

})
