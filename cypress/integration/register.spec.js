/// <reference types="Cypress" />
import Register from "../support/page-objects/register.po"
describe("Register User", () => {
  var registerUser = new Register();
  it.skip("to validate successful registration of user", () => {
    registerUser.visit();
    registerUser.register()
    registerUser.clickRegisterButton()
  })
})