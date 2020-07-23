/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Random from "../../../support/page-objects/random.po"
import Warehouse from "../../../support/page-objects/user/warehouse-setup/warehouse.po"
context('Warehouse', () => {
  var sidebar = new Sidebar();
  var random = new Random();
  var warehouse = new Warehouse()

  beforeEach(() => {
    cy.login()
  })

  // afterEach(() => {
  //   cy.logout()
  // })


  specify('Visits and Validates the component of warehouse page', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.url().should('include', 'warehouses');
    warehouse.titleBarIcon();
    warehouse.titleBarTitleName().should('include.text', 'Warehouses');
    warehouse.wizardButton();
    warehouse.importButton();
    warehouse.addWarehouseButton()
    cy.wait(1000)
    warehouse.table().then($table => {
      warehouse.tableHead().children().should('have.length', 8)
      warehouse.iconColumn();
      warehouse.codeColumn().should('have.text', 'Code')
      warehouse.whsCodeColumn().should('have.text', 'WHS Code')
      warehouse.nameColumn().should('have.text', 'Name');
      warehouse.pickTaskTypeColumn().should('have.text', 'Pick Task Type')
      warehouse.batchFefoColumn().should('have.text', 'Batch Fefo')
      warehouse.statusColumn().should('have.text', 'Status')
      warehouse.actionColumn()
      warehouse.tableRow().each(($e) => {
        cy.get($e).children().should('have.length', 8)
      })
    })

  })






  specify('Validates the addition of new Warehouse', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    warehouse.addWarehouseButton().click();
    warehouse.titleIcon();
    warehouse.title().should('have.text', 'Add New Warehouse');
    warehouse.crossIcon();
    warehouse.codeLabel();
    warehouse.codeInput().type(random.alphaneumeric(5));
    warehouse.whsCodeLable();
    warehouse.whsCodeInput().type(random.alphaneumeric(5));
    warehouse.nameLabel();
    warehouse.nameInput().type(random.stringUppercase(5));
    warehouse.addButton().click();
    warehouse.toastmessage().should('have.text', 'Warehouse successfully added');
  })


  specify('Edits the existing Warehouse', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(1000)
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.actionButton(row).click()
      warehouse.editButton().click()
      warehouse.titleIcon();
      warehouse.title().should('have.text', 'Edit Warehouse');
      warehouse.crossIcon();
      warehouse.codeLabel();
      warehouse.codeInput().clear().type(random.alphaneumeric(5));
      warehouse.whsCodeLable();
      warehouse.whsCodeInput().clear().type(random.alphaneumeric(5));
      warehouse.nameLabel();
      warehouse.nameInput().clear().type(random.stringUppercase(5));
      warehouse.pickOrderTypeLabel()
      warehouse.pickTaskTypeSelect().select(random.randomItem(['Pick To Clean','Full Pick']))
      warehouse.pickOrderTypeLabel()
      warehouse.pickOrderTypeSelect().select(random.randomItem(['Wave Pick','Wave Pick To Order','Pick To Order']))
      warehouse.serialValidationLabel()
      warehouse.serialValidationSelect().select(random.randomItem(['Full Validation','List Validation','No Validation']))
      warehouse.batchFifoLabel()
      if (random.randomItem([0, 1]) == 1) {
        warehouse.batchFifoSlider().check({force:true})
      }
      warehouse.crossZonePickingLabel()
      if (random.randomItem([0, 1]) == 1) {
        warehouse.crossZonePickingSlider().check({force:true})
      }
      warehouse.autoHandelSerialLabel()
      if (random.randomItem([0, 1]) == 1) {
        warehouse.autoHandelSerialSlider().check({force:true})
      }
      warehouse.putAwayGenerationLabel()
      warehouse.putAwayGenerationSelect().select(random.randomItem(['Random','Consolidate Inventory']))
      warehouse.shipingIntegrationLable()
      warehouse.shipingIntegrationSelect().select(random.randomItem(['Use Loxodo Ship Tasks (Default)','PaceJet Integration']))
      warehouse.shipDirectlyFromPackinglabel()
      if (random.randomItem([0, 1]) == 1) {
        warehouse.shipDirectlyFromPackingSlider().check({force:true})
      }
      warehouse.extIdLabel()
      warehouse.extIdInput().clear().type(random.number(5))
      warehouse.companyNameLabel()
      warehouse.companyNameInput().clear().type(random.stringUppercase(5))
      warehouse.careoflabel()
      warehouse.careOfInput().clear().type(random.stringUppercase(5))
      warehouse.address1Input()
      warehouse.address1Input().clear().type(random.alphaneumeric(6))
      warehouse.address2Input()
      warehouse.address2Input().clear().type(random.alphaneumeric(5))
      warehouse.address3Input()
      warehouse.address3Input().clear().type(random.alphaneumeric(4))
      warehouse.address4Input()
      warehouse.address4Input().clear().type(random.alphaneumeric(7))
      warehouse.cityLabel()
      warehouse.cityInput().clear().type(random.string(5))
      warehouse.stateLabel()
      warehouse.stateInput().clear().type(random.string(5))
      warehouse.zipCodeLabel()
      warehouse.zipCodeInput().clear().type(random.number(5))
      warehouse.countryLabel()
      warehouse.countryInput().clear().type(random.string(6))
      warehouse.phoneNoLabel()
      warehouse.phoneNoInput().clear().type(random.number(10))
      warehouse.emailAddressLabel()
      warehouse.emailAddressInput().clear().type(random.alphaneumeric(5) + '@loxodo.com')
      warehouse.saveChangesButton().click()
    })

  })








  specify.skip('Deletes the existing Warehouse', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(1000)
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.actionButton(row).click()
      warehouse.deleteButton().click()
      warehouse.popUp().should('be.visible')
      warehouse.warningIcon()
      warehouse.areYouSure().contains('Delete Warehouse?')
      warehouse.warningMessage().contains('The selected warehouse will be deleted permanently!')
      warehouse.closeButton().click()     //validates cancel button functionality
      warehouse.popUp().should('not.be.visible')
      warehouse.actionButton(row).click()
      warehouse.deleteButton().click()
      warehouse.deleteConfirmButton().click()
      cy.wait(1000)
      cy.get("body").then($body => {
        if ($body.find('.toast-error').length > 0) {
          warehouse.toastmessage().should('include.text', 'The statement has been terminated');
        } else {
          warehouse.toastmessage().should('have.text', 'Warehouse successfully deleted');
        }
      });
    })
  })

  specify('validates the functionality of cancel buttons', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    warehouse.addWarehouseButton().click();
    warehouse.modal().should('be.visible');
    warehouse.crossIcon().click();
    warehouse.modal().should('not.be.visible');
    warehouse.addWarehouseButton().click();
    warehouse.modal().should('be.visible');
    warehouse.cancelButton().click()
    warehouse.modal().should('not.be.visible');
  })

  specify('validates warehouse import functionality',()=>{
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    warehouse.importButton().click()
    cy.wait(1000)
    warehouse.importModel().should('be.visible')
    warehouse.uploadLabel().should('include.text','Upload')
    warehouse.downloadCsvButton()
    warehouse.uploadCsvButton()
    warehouse.preformattedCsvText().should('include.text','Preformatted CSV file template')
    warehouse.importCancelButton()
    warehouse.importNextButton()
    const fileName = 'WHSImport.csv';
    const fileType = 'OpenOffice.org 1.1 Spreadsheet (.csv)';
    const fileInput = 'input[type=file]';
    cy.upload_file(fileName, fileType, fileInput);
    cy.wait(10000)
    warehouse.importNextButton().click({force:true})

    //TODO need to work on csv upload
  })
})