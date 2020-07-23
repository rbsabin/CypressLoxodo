/// <reference types="Cypress" />
import UserLogin from "../../support/page-objects/user/user-login.po"
describe("User Login", () => {
  var userLogin = new UserLogin();

  it("Validates the failed login with wrong tenant", () => {
    cy.fixture("data").then((data) => {
      var validUsers = data.validUsers;
      var validUser = validUsers[Math.floor(Math.random() * validUsers.length)];
      userLogin.visit();
      userLogin.login(
        'wrong-tenant',
        validUser.username,
        validUser.password
      )
      userLogin.alert().should('have.text', 'Tenant not found.')
    })
  })


  it("Validates the failed login with wrong username", () => {
    cy.fixture("data").then((data) => {
      var validUsers = data.validUsers;
      var validUser = validUsers[Math.floor(Math.random() * validUsers.length)];
      userLogin.visit();
      userLogin.login(
        validUser.tenant,
        'wrong-username',
        validUser.password
      )
      userLogin.alert().should('have.text', 'The username is incorrect.')
    })
  })

  it("Validates the failed login with wrong password", () => {
    cy.fixture("data").then((data) => {
      var validUsers = data.validUsers;
      var validUser = validUsers[Math.floor(Math.random() * validUsers.length)];
      userLogin.visit();
      userLogin.login(
        validUser.tenant,
        validUser.username,
        'wrong-password'
      )
      userLogin.alert().should('have.text', 'The password is incorrect.')
    })
  })

  it("Validate successful user login", () => {
    cy.login();
    cy.logout();
  })


})
