/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import UserGroup from '../../../support/page-objects/user/setting/user-group.po'
import Random from "../../../support/page-objects/random.po"
describe('User Group', () => {
  var sidebar = new Sidebar();
  var userGroup = new UserGroup();
  var random = new Random();

  beforeEach(() => {
    cy.login();
  })

  afterEach(() => {
    cy.logout();
  })



  it('Visits and Validates components of User Group page', () => {
    sidebar.settings().click();
    sidebar.userGroup().click();
    cy.url().should('include', 'user-groups');
    userGroup.titleBarIcon()
    userGroup.titleBarTitleName().should('have.text', ' User Groups ')
    userGroup.titleBarSearchBar()
    userGroup.titleBarAddButton()
    userGroup.userGroupColumn().should('have.text', 'User Group')
    userGroup.zoneColumn().should('have.text', 'Zone');
    userGroup.membersColumn().should('have.text', 'Members');
    userGroup.dateCreatedColumn().should('have.text', 'Date Created');
    userGroup.statusColumn().should('have.text', 'Status');
    userGroup.actionColumn();
    userGroup.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        userGroup.tableRow().each(($tr) => {
          cy.get($tr).children().should('have.length', 6)
        })
        userGroup.actionButtons().each(($e) => {
          cy.get($e).children().should('have.length', 1)
        })
      }
    })
  })

  it('Validates the addition of new User Group', () => {
    sidebar.settings().click();
    sidebar.userGroup().click();
    userGroup.titleBarAddButton().click();
    userGroup.titleIcon();
    userGroup.title().should('include.text', 'Add User Group');
    userGroup.crossIcon();
    userGroup.nameLabel();
    userGroup.nameInput().type(random.stringUppercase(5));
    userGroup.stateLabel();
    userGroup.stateInput().select(random.randomItem(['Enabled', 'Disabled']))
    userGroup.addButton().click();
    userGroup.toastmessage().should('have.text', 'User group successfully added')
  })


  it('Edits the existing User Group', () => {
    sidebar.settings().click();
    sidebar.userGroup().click();
    cy.wait(1000)
    userGroup.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount - 1)
        userGroup.editIcon(row).click()
        // userGroup.titleIcon();
        // userGroup.title().should('include.text', 'Edit User Group');

        // TODO Need to add Zone and Members section
        userGroup.crossIcon();
        userGroup.nameLabel();
        userGroup.nameInput().clear().type(random.stringUppercase(5));
        userGroup.stateLabel();
        userGroup.stateInput().select(random.randomItem(['Enabled', 'Disabled']))
        userGroup.addButton().click();
        userGroup.toastmessage().should('have.text', 'User group successfully updated')

      }
    })
  })

  it('validates the functionality of cancel buttons', () => {
    sidebar.settings().click();
    sidebar.userGroup().click();
    userGroup.titleBarAddButton().click();
    userGroup.modal().should('be.visible');
    userGroup.crossIcon().click();
    userGroup.modal().should('not.be.visible');
    userGroup.titleBarAddButton().click();
    userGroup.modal().should('be.visible');
    userGroup.cancelButton().click()
    userGroup.modal().should('not.be.visible');
  })

})