/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Topbar from "../../../support/page-objects/user/topbar.po"
import UserCart from "../../../support/page-objects/user/warehouse-setup/user-cart.po"
import Random from "../../../support/page-objects/random.po"


context('User cart', () => {
  var sidebar = new Sidebar();
  var topbar = new Topbar()
  var userCart = new UserCart()
  var random = new Random()

  beforeEach(() => {
    cy.login()
  })

  afterEach(() => {
    cy.logout()
  })

  specify('validates the table components and  inventories of User Cart', () => {
    sidebar.warehouseSetup().click();
    sidebar.userCart().click();
    cy.wait(1000)
    userCart.titleBarIcon()
    userCart.titleBarTitleName()
    userCart.cartCount()
    userCart.titleBarSearchBar()
    userCart.table().then($table => {
      userCart.tableHeader()
      userCart.tableColumnHeader(0).should('have.text','User Assigned')
      userCart.tableColumnHeader(1).should('have.text','Item Count')
      userCart.tableColumnHeader(2).should('exist')
      const rowsCount = $table.find('tbody').find('.table-accordion-header').length
      const row = random.randomNumberBetween(0, rowsCount - 1)
      userCart.accordionDropDown(row).click()
      userCart.accordionProfilePic(row)
      cy.wait(1000)

      //TODO validation of user cart inventories

      userCart.accordionDropDown(row).click()
    })

  })

})
