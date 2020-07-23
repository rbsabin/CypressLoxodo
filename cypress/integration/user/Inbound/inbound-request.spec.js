/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Random from "../../../support/page-objects/random.po"
import InboundRequest from "../../../support/page-objects/user/Inbound/inbound-request.po"
import TopBar from "../../../support/page-objects/user/topbar.po";
context('Inbound Request', () => {
  var sidebar = new Sidebar();
  var topbar = new TopBar()
  var random = new Random();
  var request = new InboundRequest()


  beforeEach(() => {
    cy.login()
  })

  // afterEach(() => {
  //   cy.logout()
  // })

  specify('Visits and validates the inbound request page', () => {
    sidebar.inbound().click()
    sidebar.inboundRequest().click()
    cy.wait(1000)
    topbar.warehouse().click()
    cy.wait(1000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      cy.log(optionsCount)
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
      }
    })
    cy.wait(2000)
    request.titleBarIcon()
    request.titleBarTitleName().should('include.text', 'Inbound Delivery Requests')
    request.titleBarStatusButton()
    request.titleBarSearchBar()
    request.titleBarImportButton()
    request.titleBarAddButton()
    request.filterButton()
    request.filterDropDown()
    request.body().then($body => {
      if ($body.find('table').length > 0) {
        request.tableHeader()
        request.tableColumnHeader(0).should('include.text', 'PO ID')
        request.tableColumnHeader(1).should('have.text', 'Customer')
        request.tableColumnHeader(2).should('have.text', 'Description')
        request.tableColumnHeader(3).should('have.text', 'Date Created')
        request.tableColumnHeader(4).should('have.text', 'Start Date')
        request.tableColumnHeader(5).should('have.text', 'Ship End Date')
        request.tableColumnHeader(6).should('have.text', 'Ship To')
        request.tableColumnHeader(7).should('have.text', 'Delivery')
        request.tableColumnHeader(8).should('have.text', 'Transpo')
        request.tableColumnHeader(9).should('have.text', 'Status')
        request.tableColumnHeader(10).should('include.text', 'Action')
      } else {
        request.noRecords().should('have.text', "Looks like you haven't added any record.")
      }
    })
  })

  specify('Add new inbound request', () => {
    sidebar.inbound().click()
    sidebar.inboundRequest().click()
    cy.wait(2000)
    topbar.warehouse().click()
    cy.wait(2000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      cy.log(optionsCount)
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
      }
    })
    cy.wait(2000)
    request.titleBarAddButton().click()
    request.modal().should('be.visible')
    request.modalTitle().should('include.text', 'NEW INBOUND DELIVERY')
    request.inboundDeliveryText().should('include.text', 'Inbound Delivery Information')
    request.addressText().should('include.text', 'Address')
    request.lineItemsText().should('include.text', 'Line Items')
    request.externalIdLabel().should('have.text', 'EXTERNAL ID *')
    request.externalIdInput().type(random.number(5))
    request.poIdLabel().should('include.text', 'PO ID *')
    request.poIdInput().type(random.number(5))
    request.customerOrderLabel().should('have.text', 'CUSTOMER ORDER # ')
    request.customerOrderInput().type(random.number(10))
    request.supplierIdLabel()
    request.supplierIdInput().type(random.alphaneumeric(5))
    request.descriptionLabel()
    request.descriptionInput().type(random.string(25))
    request.deliveryOptionLabel()
    request.deleveryOptionInput().type(random.string(10))
    request.transportationLabel()
    cy.wait(2000)
    request.transportationSelect().then($select => {
      var optionsCount = $select.find('option').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        request.transportationSelectOptions().eq(optionKey).invoke('val').then((transportation) => {
          request.transportationSelect().select(transportation);
        })
      }
    })
    request.docDateLabel().should('have.text', 'DOC DATE*')
    request.docDateInput()
    request.startDateLabel().should('have.text', 'START DATE*')
    request.startDateInput()
    request.startDateCalander().click()
    request.calanderNextButton().click()
    cy.wait(1000)
    request.startDate().click()
    request.shipEndDateLabel().should('have.text', 'SHIP END DATE*')
    request.shipEndDateInput()
    request.shipDateCalander().click()
    request.calanderNextButton().click()
    request.shipEndDate().click();
    request.warehouseIdLabel().should('have.text', 'WAREHOUSE ID*')
    request.warehouseIdSelect()
    // request.warehouseIdSelect().then($select => {
    //   var optionsCount = $select.find('option').length
    //   if (optionsCount > 0) {
    //     var optionKey = random.randomNumberBetween(0, optionsCount - 1)
    //     request.warehouseIdSelectOptions().eq(optionKey).invoke('val').then((warehouse) => {
    //       request.warehouseIdSelect().select(warehouse);
    //     })
    //   }
    // })
    request.trackingIdLabel()
    request.trackingIdInput().type(random.alphaneumeric(10))
    request.nextButton().click()

    //address section
    request.shipingAddressLabel().should('include.text', 'Shipping Address')
    request.shipingCompanyName().type(random.stringUppercase(5))
    request.shipingCareOF().type(random.stringUppercase(5))
    request.shipingEmailAddress().type(random.stringLowercase(5) + '@loxodo.com')
    request.shipingPhoneNo().type(random.naturalNumber(10))
    request.shipingAddress1().type(random.alphaneumeric(6))
    request.shipingAddress2().type(random.alphaneumeric(5))
    request.shipingCity().type(random.string(5))
    request.shipingState().type(random.string(8))
    request.shipingZipCode().type(random.naturalNumber(5))
    request.shipingCountry().type(random.stringUppercase(5))

    request.supplierAddressLabel().should('include.text', 'Supplier Address')
    request.supplierCompanyName().type(random.stringUppercase(5))
    request.supplierCareOF().type(random.stringUppercase(5))
    request.supplierEmailAddress().type(random.stringLowercase(5) + '@loxodo.com')
    request.supplierPhoneNo().type(random.naturalNumber(10))
    request.supplierAddress1().type(random.alphaneumeric(6))
    request.supplierAddress2().type(random.alphaneumeric(5))
    request.supplierCity().type(random.string(5))
    request.supplierState().type(random.string(8))
    request.supplierZipCode().type(random.naturalNumber(5))
    request.supplierCountry().type(random.stringUppercase(5))
    request.nextButton().click()
    request.lineItemsLabel().should('have.text', 'Line Items')
    request.noItem().should('have.text', ' No line items to show just yet. ')
    request.itemAddButton().click()
    cy.wait(1000)
    request.itemTable().then($table => {
      request.itemCodeColumn().should('include.text', 'Item Code')
      request.itemNameColumn().should('include.text', 'Item Name')
      request.quantiryColumn().should('include.text', 'Qty')
      request.uomColumn().should('include.text', 'UOM')
      request.actionColumn()
      request.searchItem(random)
      request.itemQuantity().clear().type(random.randomNumberBetween(1, 9))
      request.backButton().click()
      request.backButton().click()
      request.nextButton().click()
      request.nextButton().click()
      request.saveButton().click()
      request.toastmessage().should('have.text', 'New Inbound Delivery Request Successfully Added')

    })


  })


  specify('Edit inbound request', () => {
    sidebar.inbound().click()
    sidebar.inboundRequest().click()
    cy.wait(1000)
    topbar.warehouse().click()
    cy.wait(2000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
      }
    })
    cy.wait(2000)
    request.body().then($body => {
      if ($body.find('table').length > 0) {
        request.tableHeader()
        request.table().then($table => {
          const rowsCount = $table.find('tbody').find('.table-accordion-header').length;
          const row = random.randomNumberBetween(0, rowsCount - 1)
          request.editIcon(row).click()
          request.editExternalIdLabel().should('have.text', 'EXTERNAL ID *')
          request.editExternalIdInput().clear().type(random.number(5))
          request.editPoIdLabel().should('have.text', 'PO ID *')
          request.editPoIdInput().clear().type(random.number(5))
          request.editTransportationSelect().then($select => {
            var optionsCount = $select.find('option').length
            if (optionsCount > 0) {
              var optionKey = random.randomNumberBetween(0, optionsCount - 1)
              request.editTransportationSelectOption().eq(optionKey).invoke('val').then((transportation) => {
                request.editTransportationSelect().select(transportation);
              })
            }
          })

          request.editDocDateLabel().should('have.text', 'DOC DATE*')
          request.editDocDateInput()
          request.editStartDateLabel().should('have.text', 'START DATE*')
          request.editStartDateInput()
          request.editStartDateCalander().click()
          request.calanderNextButton().click()
          request.startDate().click()
          request.editShipEndDateLabel().should('have.text', 'SHIP END DATE*')
          request.shipEndDateInput()
          request.editShipEndDateCalander().click()
          request.calanderNextButton().click()
          request.shipEndDate().click();
          request.editWarehouseIdLabel().should('have.text', 'WAREHOUSE ID*')
          request.editAddressPanelLabel().click()
          request.editShipingEmailAddress().clear().type(random.stringLowercase(5) + '@loxodo.com')
          request.editSupplierPhoneNo().clear().type(random.naturalNumber(10))
          request.editLineItemPanelLabel().click()
          request.editItemQuantityInput().clear().type(random.randomNumberBetween(1, 9))
          request.informationPanelLabel().click()
          request.saveButtonInEditPanel().click()
          request.toastmessage().should('have.text', 'Inbound Delivery Request Successfully Updated')
        })
      } else {
        request.noRecords().should('have.text', "Looks like you haven't added any record.")
      }

    })

  })


  specify('Cancel Button Functionality', () => {
    sidebar.inbound().click()
    sidebar.inboundRequest().click()
    cy.wait(1000)
    topbar.warehouse().click()
    cy.wait(1000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
      }
    })
    cy.wait(2000)
    request.body().then($body => {
      if ($body.find('table').length > 0) {
        request.tableHeader()
        request.table().then($table => {
          const rowsCount = $table.find('tbody').find('.table-accordion-header').length;
          const row = random.randomNumberBetween(0, rowsCount - 1)
          request.editIcon(row).click()
          request.cancelButton().click()
          request.editIcon(row).click()
          request.crossIcon().click()
        })
      } else {
        request.noRecords().should('have.text', "Looks like you haven't added any record.")
      }

    })

  })


  specify.skip('Cancel Inbound Request', () => {
    sidebar.inbound().click()
    sidebar.inboundRequest().click()
    cy.wait(1000)
    topbar.warehouse().click()
    cy.wait(1000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
      }
    })
    cy.wait(2000)
    request.body().then($body => {
      if ($body.find('table').length > 0) {
        request.tableHeader()
        request.table().then($table => {
          const rowsCount = $table.find('tbody').find('.table-accordion-header').length;
          const row = random.randomNumberBetween(0, rowsCount - 1)
          request.cancelIcon(row).click()
          request.popUp().should('be.visible')
          request.warningIcon()
          request.areYouSure().contains('Are you sure?')
          request.warningMessage().contains('The selected record will be deleted permanently!')
          request.closeButton().click()     //validates cancel button functionality
          request.popUp().should('not.be.visible')
          request.cancelIcon(row).click()
          request.deleteConfirmButton().click()
          request.toastmessage().should('have.text', "Inbound Delivery Request Successfully Cancelled")
        })
      } else {
        request.noRecords().should('have.text', "Looks like you haven't added any record.")
      }
    })
  })


  specify('IDR Process Release', () => {
    sidebar.inbound().click()
    sidebar.inboundRequest().click()
    cy.wait(1000)
    topbar.warehouse().click()
    cy.wait(2000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
      }
    })
    cy.wait(2000)
    request.body().then($body => {
      if ($body.find('table').length > 0) {
        request.tableHeader()
        request.table().then($table => {
          const rowsCount = $table.find('tbody').find('.table-accordion-header').length;
          const row = random.randomNumberBetween(0, rowsCount - 1)
          request.releaseIcon(row).click()
          request.releaseModal().should('be.visible')
          request.releaseCancelButton().click()     //validates cancel button functionality
          request.releaseModal().should('not.be.visible')
          request.releaseIcon(row).click()
          cy.wait(1000)
          request.receivingZoneSelect().then($select => {
            var optionsCount = $select.find('option').length
            if (optionsCount > 0) {
              var optionKey = random.randomNumberBetween(1, optionsCount)
              request.receivingZoneSelectOption().eq(optionKey).invoke('val').then((zone) => {
                request.receivingZoneSelect().select(zone);
              })
            }
          })
          request.generateReceiveTaskButton().click()
          request.popUp().should('be.visible')
          request.warningIcon()
          request.areYouSure().contains('Start Receiving?')
          request.warningMessage().contains('Do you wish to start receiving this task?')
          request.confirmButton().click()
          request.popUp().should('be.visible')
          request.warningIcon()
          request.areYouSure().contains("You're about to take this task.")
          request.warningMessage().contains('The selected task will be assigned to you!')
          request.confirmButton().click()
          cy.wait(1000)
          request.binScanModal().should('be.visible')
          request.scanBinMessage().should('have.text', 'PLEASE SCAN BIN FROM')
          request.scanZone().find('.fs-30').invoke('text').then((zone) => {
            cy.wait(1000)
            cy.log(zone)
            request.confirmBinInput().type(zone + 'B01')
          });
          request.scanModalNextButton().click()
          request.itemScanModal().should('be.visible')
          request.itemCode().invoke('text').then((code) => {
            cy.wait(1000)
            request.itemScanInput().type(code).type('{enter}')
          });
          request.serialNoModal().should('be.visible')
          request.serialModaltitle().should('have.text', 'ADD SERIAL NUMBER')
          request.autoGenerateButton().click()
          request.serialPanelNextButton().click()
          cy.wait(1000)
          request.toastmessage().should('have.text', 'Receive Task is now In Process')
          cy.wait(1000)
          request.toastmessage().should('have.text', "Item(s) successfully confirmed and added to inventory")
          cy.wait(1000)
          request.toastmessage().should('have.text', "Receive Task Successfully Completed")
        })
      } else {
        request.noRecords().should('have.text', "Looks like you haven't added any record.")
      }
    })
  })


  specify('Email validation check', () => {
    sidebar.inbound().click()
    sidebar.inboundRequest().click()
    cy.wait(2000)
    topbar.warehouse().click()
    cy.wait(2000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      cy.log(optionsCount)
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
      }
    })
    cy.wait(2000)
    request.titleBarAddButton().click()
    request.modal().should('be.visible')
    request.modalTitle().should('include.text', 'NEW INBOUND DELIVERY')
    request.inboundDeliveryText().should('include.text', 'Inbound Delivery Information')
    request.addressText().should('include.text', 'Address')
    request.lineItemsText().should('include.text', 'Line Items')
    request.externalIdLabel().should('have.text', 'EXTERNAL ID *')
    request.externalIdInput().type(random.number(5))
    request.poIdLabel().should('include.text', 'PO ID *')
    request.poIdInput().type(random.number(5))
    request.customerOrderLabel().should('have.text', 'CUSTOMER ORDER # ')
    request.customerOrderInput().type(random.number(10))
    request.docDateLabel().should('have.text', 'DOC DATE*')
    request.docDateInput()
    request.startDateLabel().should('have.text', 'START DATE*')
    request.startDateInput()
    request.startDateCalander().click()
    request.calanderNextButton().click()
    cy.wait(1000)
    request.startDate().click()
    request.shipEndDateLabel().should('have.text', 'SHIP END DATE*')
    request.shipEndDateInput()
    request.shipDateCalander().click()
    request.calanderNextButton().click()
    request.shipEndDate().click();
    request.warehouseIdLabel().should('have.text', 'WAREHOUSE ID*')
    request.warehouseIdSelect()
    request.nextButton().click()

    //address section
    request.shipingAddressLabel().should('include.text', 'Shipping Address')
    request.shipingCompanyName().type(random.stringUppercase(5))
    request.shipingCareOF().type(random.stringUppercase(5))
    request.shipingEmailAddress().type(random.stringLowercase(5))
    request.shipingPhoneNo().type(random.naturalNumber(10))
    request.shipingAddress1().type(random.alphaneumeric(6))
    request.shipingAddress2().type(random.alphaneumeric(5))
    request.shipingCity().type(random.string(5))
    request.shipingState().type(random.string(8))
    request.shipingZipCode().type(random.naturalNumber(5))
    request.shipingCountry().type(random.stringUppercase(5))

    request.supplierAddressLabel().should('include.text', 'Supplier Address')
    request.supplierCompanyName().type(random.stringUppercase(5))
    request.supplierCareOF().type(random.stringUppercase(5))
    request.supplierEmailAddress().type(random.stringLowercase(5))
    request.supplierPhoneNo().type(random.naturalNumber(10))
    request.supplierAddress1().type(random.alphaneumeric(6))
    request.supplierAddress2().type(random.alphaneumeric(5))
    request.supplierCity().type(random.string(5))
    request.supplierState().type(random.string(8))
    request.supplierZipCode().type(random.naturalNumber(5))
    request.supplierCountry().type(random.stringUppercase(5))
    request.nextButton().click()
    request.popUp().should('be.visible')
    request.problemIcon()
    request.areYouSure().should('have.text', 'Oops...')
    request.warningMessage().should('have.text', 'Fill Out Required Fields!')
    request.confirmButton().click()
    request.crossIcon().click()
  })

  specify('Required form fields should be filled up', () => {
    sidebar.inbound().click()
    sidebar.inboundRequest().click()
    cy.wait(2000)
    topbar.warehouse().click()
    cy.wait(2000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      cy.log(optionsCount)
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
      }
    })
    cy.wait(2000)
    request.titleBarAddButton().click()
    request.modal().should('be.visible')
    request.modalTitle().should('include.text', 'NEW INBOUND DELIVERY')
    request.inboundDeliveryText().should('include.text', 'Inbound Delivery Information')
    request.addressText().should('include.text', 'Address')
    request.lineItemsText().should('include.text', 'Line Items')
    request.externalIdLabel().should('have.text', 'EXTERNAL ID *')
    request.nextButton().click()
    request.popUp().should('be.visible')
    request.problemIcon()
    request.areYouSure().should('have.text', 'Oops...')
    request.warningMessage().should('have.text', 'Fill Out Required Fields!')
    request.confirmButton().click()
    request.crossIcon().click()
  })


  specify.only('Search inbound delivery request', () => {
    sidebar.inbound().click()
    sidebar.inboundRequest().click()
    cy.wait(1000)
    topbar.warehouse().click()
    cy.wait(2000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
      }
    })
    cy.wait(2000)
    request.body().then($body => {
      if ($body.find('table').length > 0) {
        request.tableHeader()
        request.table().then($table => {
          const rowsCount = $table.find('tbody').find('.table-accordion-header').length;
          const row = random.randomNumberBetween(0, rowsCount - 1)
          request.poid(row).invoke('text').then((poid) => {
              cy.log(poid)
              request.titleBarSearchBar().type(poid.trim())
              cy.wait(1000)
              request.poText().should('have.length',1);
              request.poText().should('have.text',poid);
          })

        })
      } else {
        request.noRecords().should('have.text', "Looks like you haven't added any record.")
      }

    })

  })


})