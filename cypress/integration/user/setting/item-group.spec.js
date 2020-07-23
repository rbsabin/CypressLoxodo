/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Titlebar from "../../../support/page-objects/user/setting/titlebar.po"
import ItemGroup from "../../../support/page-objects/user/setting/item-group.po"
import Random from "../../../support/page-objects/random.po"
describe('Item group', () => {
  var sidebar = new Sidebar();
  var titlebar = new Titlebar();
  var itemGroup = new ItemGroup();
  var random = new Random();

  beforeEach(() => {
    cy.login();
  })

  afterEach(() => {
    cy.logout();
  })



  it('Visits and Validates components of Item Group page', () => {
    sidebar.settings().click();
    sidebar.itemGroup().click();
    cy.url().should('include', 'item-groups');
    titlebar.checkContents('Item Groups');
    itemGroup.idColumn();
    itemGroup.nameColumn();
    itemGroup.actionColumn();
    itemGroup.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        itemGroup.tableRow().each(($tr) => {
          cy.get($tr).children().should('have.length', 3)
        })
        itemGroup.actionButtons().each(($e) => {
          cy.get($e).children().should('have.length', 1)
        })
      }
    })
  })

  it('Validates the addition of new Item Group', () => {
    sidebar.settings().click();
    sidebar.itemGroup().click();
    titlebar.addButton().click();
    itemGroup.titleIcon();
    itemGroup.title().should('have.text', 'Add Item Group')
    itemGroup.crossIcon()
    itemGroup.idLabel()
    itemGroup.idInput().type(random.number(5))
    itemGroup.nameLabel()
    itemGroup.nameInput().type(random.stringUppercase(5))
    itemGroup.addButton().click();
    itemGroup.toastmessage().should('include.text', 'New item group successfully added')
  })


  it('Edits the existing Item Group', () => {
    sidebar.settings().click();
    sidebar.itemGroup().click();
    itemGroup.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount - 1)
        itemGroup.editIcon(row).click()
        itemGroup.titleIcon();
        itemGroup.title().should('have.text', 'Edit Item Group')
        itemGroup.crossIcon()
        itemGroup.idLabel()
        itemGroup.nameLabel()
        itemGroup.nameInput().clear().type(random.stringUppercase(5))
        itemGroup.addButton().click();
        itemGroup.toastmessage().should('include.text', 'Item Group successfully updated')
      }
    })
  })



  it('validates the functionality of cancel buttons', () => {
    sidebar.settings().click();
    sidebar.itemGroup().click();
    titlebar.addButton().click();
    itemGroup.modal().should('be.visible');
    itemGroup.crossIcon().click();
    itemGroup.modal().should('not.be.visible');
    titlebar.addButton().click();
    itemGroup.modal().should('be.visible');
    itemGroup.cancelButton().click()
    itemGroup.modal().should('not.be.visible');
  })




})