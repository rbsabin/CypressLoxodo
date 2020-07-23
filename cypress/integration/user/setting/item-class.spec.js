/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Titlebar from "../../../support/page-objects/user/setting/titlebar.po"
import ItemClass from "../../../support/page-objects/user/setting/item-class.po"
import Random from "../../../support/page-objects/random.po"
describe('Item class', () => {
  var sidebar = new Sidebar();
  var titlebar = new Titlebar();
  var itemclass = new ItemClass();
  var random = new Random();

  beforeEach(() => {
    cy.login();
  })

  afterEach(() => {
    cy.logout();
  })



  it('Visits and Validates components of Item Class page', () => {
    sidebar.settings().click();
    sidebar.itemClass().click();
    cy.url().should('include', 'item-classes');
    titlebar.checkContents('Item Classes');
    itemclass.idColumn();
    itemclass.nameColumn();
    itemclass.actionColumn();
    itemclass.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        itemclass.tableRow().each(($tr) => {
          cy.get($tr).children().should('have.length', 3)
        })
        itemclass.actionButtons().each(($e) => {
          cy.get($e).children().should('have.length', 1)
        })
      }
    })
  })


  it('Validates the addition of new Item Class', () => {
    sidebar.settings().click();
    sidebar.itemClass().click();
    titlebar.addButton().click();
    itemclass.titleIcon();
    itemclass.title().should('have.text', 'Add Item Class')
    itemclass.crossIcon()
    itemclass.idLabel()
    itemclass.idInput().type(random.number(5))
    itemclass.nameLabel()
    itemclass.nameInput().type(random.stringUppercase(5))
    itemclass.addButton().click();
    itemclass.toastmessage().should('include.text', 'New item class successfully added')
  })


  it('Edits the existing Item Class', () => {
    sidebar.settings().click();
    sidebar.itemClass().click();
    itemclass.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount-1)
        itemclass.editIcon(row).click()
        itemclass.titleIcon();
        itemclass.title().should('have.text', 'Edit Item Class')
        itemclass.crossIcon()
        itemclass.idLabel()
        itemclass.nameLabel()
        itemclass.nameInput().clear().type(random.stringUppercase(5))
        itemclass.addButton().click();
        itemclass.toastmessage().should('include.text', 'Item class successfully updated')
      }
    })
  })



  it('validates the functionality of cancel buttons', () => {
    sidebar.settings().click();
    sidebar.itemClass().click();
    titlebar.addButton().click();
    itemclass.modal().should('be.visible');
    itemclass.crossIcon().click();
    itemclass.modal().should('not.be.visible');
    titlebar.addButton().click();
    itemclass.modal().should('be.visible');
    itemclass.cancelButton().click()
    itemclass.modal().should('not.be.visible');
  })




})