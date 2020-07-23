/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Titlebar from "../../../support/page-objects/user/setting/titlebar.po"
import UnitsOfMeasurement from '../../../support/page-objects/user/setting/uom.po'
import Random from "../../../support/page-objects/random.po"
describe('Units of Measurement', () => {
  var sidebar = new Sidebar();
  var titlebar = new Titlebar();
  var uom = new UnitsOfMeasurement();
  var random = new Random();

  beforeEach(() => {
    cy.login();
  })

  afterEach(() => {
    cy.logout();
  })



  it('Visits and Validates components of Units of Measure page', () => {
    sidebar.settings().click();
    sidebar.unitOfMeasure().click();
    cy.url().should('include', 'uoms');
    titlebar.checkContents('Units of Measure');
    uom.codeColumn().should('have.text', 'Code');
    uom.nameColumn().should('have.text', 'Name');
    uom.uomClassColumn().should('have.text', 'UoM Class');
    uom.primaryColumn().should('have.text', 'Primary');
    uom.statusColumn().should('have.text', 'Status');
    uom.actionColumn();
    uom.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        uom.tableRow().each(($tr) => {
          cy.get($tr).children().should('have.length', 7)
        })
        uom.actionButtons().each(($e) => {
          cy.get($e).children().should('have.length', 1)
        })
      }
    })
  })

  it('Validates the addition of new Unit of Meaasure', () => {
    sidebar.settings().click();
    sidebar.unitOfMeasure().click();
    titlebar.addButton().click();
    uom.titleIcon();
    uom.title().should('have.text', 'Add Units of Measure');
    uom.crossIcon();
    uom.codeLabel();
    uom.codeInput().type(random.number(5));
    uom.nameLabel();
    uom.nameInput().type(random.stringUppercase(5));
    uom.uomClassLabel();
    uom.uomClassInput().select(random.randomItem(['Area','Energy','Length','Quantity','Time','Volume','Weight','Temperature']));
    uom.primaryLabel();
    uom.primaryInput().select(random.randomItem(['Yes','No']))
    uom.typeLabel();
    uom.typeInput().select(random.randomItem(['Metric','Imperial']))
    uom.addButton().click();
    uom.toastmessage().should('have.text', 'UOM successfully added')
  })

  it('Edits the existing Unit of Measure', () => {
    sidebar.settings().click();
    sidebar.unitOfMeasure().click();
    uom.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount - 1)
        uom.editIcon(row).click()
        uom.titleIcon();
        uom.title().should('have.text', 'Edit Units of Measure');
        uom.crossIcon();
        uom.codeLabel();
        uom.nameLabel();
        uom.nameInput().clear().type(random.stringUppercase(5));
        uom.uomClassLabel();
        uom.uomClassInput().select(random.randomItem(['Area','Energy','Length','Quantity','Time','Volume','Weight','Temperature']));
        uom.primaryLabel();
        uom.primaryInput().select(random.randomItem(['Yes','No']))
        uom.typeLabel();
        uom.typeInput().select(random.randomItem(['Metric','Imperial']))
        uom.addButton().click();
        uom.toastmessage().should('have.text', 'UOM successfully updated')

      }
    })
  })

  it('validates the functionality of cancel buttons', () => {
    sidebar.settings().click();
    sidebar.unitOfMeasure().click();
    titlebar.addButton().click();
    uom.modal().should('be.visible');
    uom.crossIcon().click();
    uom.modal().should('not.be.visible');
    titlebar.addButton().click();
    uom.modal().should('be.visible');
    uom.cancelButton().click()
    uom.modal().should('not.be.visible');
  })

})