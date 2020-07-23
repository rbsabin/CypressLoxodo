/// <reference types="Cypress" />

import TopBar from "../../support/page-objects/user/topbar.po"
describe('Topbar', () => {
  var topBar = new TopBar();
  beforeEach(() => {
    cy.login();
  })




  it("to validate the components of topbar", () => {
    topBar.sidebarToggle();
    topBar.tenant();
    topBar.warehouse();
    topBar.logo();
    topBar.searchHelp();
    topBar.profileImage();
    topBar.username();
    topBar.profileDropdown().click();
    topBar.profileMenu();
    topBar.myCartMenu();
    topBar.dashboardMenu();
    topBar.logoutMenu();
  })


  it("to validate 'Profile' menu functionality", () => {
    topBar.profileDropdown().click();
    topBar.profileMenu().click();

  })

  it("to validate 'Dashboard' menu redirects to dashboard", () => {
    topBar.profileDropdown().click();
    topBar.dashboardMenu().click();
    cy.location("pathname", { timeout: 2000 }).should("include", "dashboard")
  })

  it("to validate 'My-Cart' menu redirects to my cart page", () => {
    topBar.profileDropdown().click();
    topBar.myCartMenu().click();
    cy.wait(1000);
    cy.location("pathname", { timeout: 2000 }).should("include", "my-cart")
  })

  it("to validate 'Logout' menu redirects to login page after logout", () => {
    topBar.profileDropdown().click();
    topBar.logoutMenu().click();
    cy.location("pathname", { timeout: 2000 }).should("include", "login")
  })


})