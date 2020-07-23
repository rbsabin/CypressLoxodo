/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import TransportationType from '../../../support/page-objects/user/setting/transportation-type.po'
import Random from "../../../support/page-objects/random.po"
import TitleBar from "../../../support/page-objects/user/setting/titlebar.po";
describe('Transportation Type', () => {
  var sidebar = new Sidebar();
  var transportationType = new TransportationType();
  var random = new Random();

  beforeEach(() => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    cy.login();
  })

  afterEach(() => {
    cy.logout();
  })



  it('Visits and Validates components of Transportation Type page', () => {
    sidebar.settings().click();
    sidebar.transportationType().click();
    cy.url().should('include', 'transportation-types');
    transportationType.titleBarIcon()
    transportationType.titleBarTitleName().should('include.text', ' Transportation Types ')
    transportationType.titleBarSearchBar()
    transportationType.titleBarAddButton()
    transportationType.serviceIdColumn().should('have.text', 'Service ID')
    transportationType.serviceNameColumn().should('have.text', 'Service Name');
    transportationType.carrierCodeColumn().should('have.text', 'Carrier Code');
    transportationType.carrierNameColumn().should('have.text', 'Carrier Name');
    transportationType.statusColumn().should('have.text', 'Status');
    transportationType.actionColumn();
    transportationType.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        transportationType.tableRow().each(($tr) => {
          cy.get($tr).children().should('have.length', 6)
        })
        transportationType.actionButtons().each(($e) => {
          cy.get($e).children().should('have.length', 2)
        })
      }
    })
  })

  it('Validates the addition of new Transportation Type', () => {
    sidebar.settings().click();
    sidebar.transportationType().click();
    transportationType.titleBarAddButton().click();
    transportationType.titleIcon();
    transportationType.title().should('include.text', 'Add Transportation');
    transportationType.crossIcon();
    transportationType.serviceIdLabel();
    transportationType.serviceIdInput().type(random.number(5));
    transportationType.servieceNameLable();
    transportationType.serviceNameInput().type(random.stringUppercase(5));
    transportationType.carrierCodeLabel();
    transportationType.carrierCodeInput().type(random.alphaneumeric(5));
    transportationType.carrierNameLable();
    transportationType.carrierNameInput().type(random.stringUppercase(5));
    transportationType.statusLabel();
    if (random.randomItem([0, 1]) == 0) {
      transportationType.statusInput().uncheck({ force: true });
    }
    transportationType.activeLabel();
    transportationType.addButton().click();
    transportationType.toastmessage().should('have.text', 'Transportation type successfully added')
  })


  it('Edits the existing Transportation Type', () => {
    sidebar.settings().click();
    sidebar.transportationType().click();
    transportationType.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount - 1)
        transportationType.editIcon(row).click()
        transportationType.titleIcon();
        transportationType.title().should('include.text', 'Transportation Details');
        transportationType.crossIcon();
        transportationType.serviceIdLabel();
        transportationType.servieceNameLable();
        transportationType.serviceNameInput().clear().type(random.stringUppercase(5));
        transportationType.carrierCodeLabel();
        transportationType.carrierCodeInput().clear().type(random.alphaneumeric(5));
        transportationType.carrierNameLable();
        transportationType.carrierNameInput().clear().type(random.stringUppercase(5));
        if (random.randomItem([0, 1]) == 0) {
          transportationType.statusInput().uncheck({ force: true });
        }
        transportationType.activeLabel();
        transportationType.addButton().click();
        transportationType.toastmessage().should('have.text', 'Transportation type successfully updated')

      }
    })
  })


  it('validates the functionality of cancel buttons', () => {
    sidebar.settings().click();
    sidebar.transportationType().click();
    transportationType.titleBarAddButton().click()
    transportationType.modal().should('be.visible');
    transportationType.crossIcon().click();
    transportationType.modal().should('not.be.visible');
    transportationType.titleBarAddButton().click();
    transportationType.modal().should('be.visible');
    transportationType.cancelButton().click()
    transportationType.modal().should('not.be.visible');
  })

})