/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Random from "../../../support/page-objects/random.po"
import Warehouse from "../../../support/page-objects/user/warehouse-setup/warehouse.po"
import Zone from "../../../support/page-objects/user/warehouse-setup/zone.po"

context('Zone', () => {
  var sidebar = new Sidebar();
  var random = new Random();
  var warehouse = new Warehouse();
  var zone = new Zone();

  beforeEach(() => {
    cy.login()
  })

  afterEach(() => {
    cy.logout()
  })

  specify('validate the components of zone page', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(1000)
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.warehouseName(row).click();
      cy.wait(2000)
      zone.table().then($table => {
        zone.warehouseSelect()
        zone.addZone()
        zone.tableHeader()
        zone.tableColumnHeader(0).should('exist')
        zone.tableColumnHeader(1).should('have.text', 'Code')
        zone.tableColumnHeader(2).should('have.text', 'Name')
        zone.tableColumnHeader(3).should('have.text', 'Type')
        zone.tableColumnHeader(4).should('have.text', 'Zone Type')
        zone.tableColumnHeader(5).should('have.text', 'Status')
        zone.tableColumnHeader(6).should('exist')
      })
    })
  })


  specify('Add new zone to Warehouse', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(1000)
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.warehouseName(row).click();
      zone.addZone().click()
      //cancel functionality starts
      zone.cancelButton().click()
      zone.cancelPopup().should('be.visible')
      zone.cancelPopup().find('.swal2-warning')
      zone.cancelPopup().find('#swal2-content').should('have.text', 'You’re about to exit the Zone Setup Wizard. None of the changes made will be saved. Are you sure you want to continue?')
      zone.cancelPopup().find('.swal2-confirm').click()
      //cancel functionality ends

      zone.addZone().click()
      zone.modalTitle().should('have.text', 'Zone Setup Wizard')
      zone.configTableHeader();
      zone.configTableColumnHeader(0).should('have.text', 'LOCATION ')
      zone.configTableColumnHeader(1).should('have.text', 'PREFIX ')
      zone.configTableColumnHeader(2).should('have.text', 'DIGIT ')
      zone.configTableColumnHeader(3).should('have.text', 'START ')
      zone.configTableColumnHeader(4).should('have.text', 'COUNT ')
      zone.configTableColumnData(0).find('input').clear().type('Zone');
      zone.configTableColumnData(1).find('input').clear().type('Z');
      zone.configTableColumnData(2).find('input').clear().type(2);
      zone.configTableColumnData(4).find('input').clear().type(1);
      zone.generateButton().click()
      zone.zonePreview()
      zone.backButton().click()
      zone.generateButton().click()
      zone.zonePreview().find('.card-level-item').should('have.length.greaterThan', 0)
      zone.finishAndSaveButton().click()
      cy.wait(1000)
      cy.get("body").then($body => {
        if ($body.find('.toast-error').length > 0) {
          zone.toastmessage().should('have.text', 'Sorry! No zones added');
        } else {
          zone.toastmessage().should('include.text', 'new zone(s) successfully added');
        }
      });
    })
  })


  specify('Edit Zone', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(2000)
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.warehouseName(row).click();
      cy.wait(2000)
      zone.table().then($table => {
        zone.warehouseSelect()
        zone.addZone()
        const rowsCount = $table.find('tbody').find('tr').length
        const row = random.randomNumberBetween(0, rowsCount - 1)
        zone.actionButton(row).click()
        zone.editButton().click()
        zone.editModal().should('be.visible')
        zone.cancelEditProcessButton().click()
        zone.editModal().should('not.be.visible')
        zone.actionButton(row).click()
        zone.editButton().click()
        zone.editModal().should('be.visible')
        zone.editModalTitle().should('have.text', 'Edit Zone')
        zone.titleIcon()
        zone.crossIcon()
        zone.codeLabel()
        zone.codeInput()
        zone.nameLabel()
        zone.nameInput()
        zone.typeLabel()
        zone.typeInput().then($select => {
          var optionsCount = $select.find('option').length
          if (optionsCount > 0) {
            var optionKey = random.randomNumberBetween(0, optionsCount - 1)
            zone.typeOptions().eq(optionKey).invoke('val').then((uom) => {
              zone.typeInput().select(uom);
            })
          }
        })

        zone.saveChangsButton().click()
        zone.toastmessage().should('have.text', 'Zone successfully updated')
      })
    })
  })


  specify('Delete Zone', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(2000)
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.warehouseName(row).click();
      cy.wait(2000)
      zone.table().then($table => {
        zone.warehouseSelect()
        zone.addZone()
        const rowsCount = $table.find('tbody').find('tr').length
        const row = random.randomNumberBetween(0, rowsCount - 1)
        zone.actionButton(row).click()
        zone.deleteButton().click()
        zone.popUp().should('be.visible')
        zone.warningIcon()
        zone.areYouSure().contains('Delete Zone?')
        zone.warningMessage().contains('The selected zone will be deleted permanently!')
        zone.closeButton().click()     //validates cancel button functionality
        zone.popUp().should('not.be.visible')
        zone.actionButton(row).click()
        zone.deleteButton().click()
        zone.deleteConfirmButton().click()
        cy.wait(1000)
        cy.get("body").then($body => {
          if ($body.find('.toast-error').length > 0) {
            warehouse.toastmessage().should('include.text', 'The statement has been terminated')
          } else {
            warehouse.toastmessage().should('have.text', 'Zone successfully deleted')
          }
        })
      })
    })
  })
})