/// <reference types="Cypress" />
describe('User dashboard', () => {
  before(() => {
    cy.login();
  })

  after(() => {
    cy.logout();
  })

  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
  })
})