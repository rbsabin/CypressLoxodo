/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Topbar from "../../../support/page-objects/user/topbar.po"
import Random from "../../../support/page-objects/random.po"
import Warehouse from "../../../support/page-objects/user/warehouse-setup/warehouse.po"
import Zone from "../../../support/page-objects/user/warehouse-setup/zone.po"
import AreaBin from "../../../support/page-objects/user/warehouse-setup/area-bin.po"

context('Area and Bins', () => {
  var sidebar = new Sidebar();
  var random = new Random();
  var warehouse = new Warehouse();
  var zone = new Zone();
  var bin = new AreaBin()
  var topbar = new Topbar()

  beforeEach(() => {
    cy.login()
  })

  // afterEach(() => {
  //   cy.logout()
  // })

  specify('validate the components of area and bin  page', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(1000)
    //in warehouse page
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.warehouseName(row).click();
      cy.wait(2000)
      //in zone page
      zone.table().then($table => {
        zone.warehouseSelect()
        zone.addZone().should('include.text', 'ADD ZONE(S)')
        const rowsCount = $table.find('tbody').find('tr').length
        const row = random.randomNumberBetween(0, rowsCount - 1)
        zone.zoneName(row).click()
        cy.wait(1000)
        //in area and bin page
        bin.body().then($body => {
          if ($body.find('table').length > 0) {
            bin.tableHeader()
            bin.tableColumnHeader(0).should('exist')
            bin.tableColumnHeader(1).should('have.text', 'Code')
            bin.tableColumnHeader(2).should('have.text', 'Name')
            bin.tableColumnHeader(3).should('have.text', 'Type')
            bin.tableColumnHeader(4).should('have.text', 'Pick Seq')
            bin.tableColumnHeader(5).should('have.text', 'Put Seq')
            bin.tableColumnHeader(6).should('have.text', 'Bin Type')
            bin.tableColumnHeader(7).should('have.text', 'Status')
            bin.tableColumnHeader(8).should('exist')
          } else {
            bin.noRecords().should('have.text', 'Looks like you do not have any records.')
          }
        })
      })
    })
  })

  specify('Add area and bin to zone', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(1000)
    //in warehouse page
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.warehouseName(row).click();
      cy.wait(2000)
      //in zone page
      zone.table().then($table => {
        zone.warehouseSelect()
        zone.addZone().should('include.text', 'ADD ZONE(S)')
        const rowsCount = $table.find('tbody').find('tr').length
        const row = random.randomNumberBetween(0, rowsCount - 1)
        zone.zoneName(row).click()
        cy.wait(1000)
        //in area and bin page
        bin.addBinAndArea().click()
        //cancel functionality starts
        bin.cancelButton().click()
        bin.cancelPopup().should('be.visible')
        bin.cancelPopup().find('.swal2-warning')
        bin.cancelPopup().find('#swal2-content').should('have.text', 'You’re about to exit the Area & Bin Setup Wizard. None of the changes made will be saved. Are you sure you want to continue?')
        bin.cancelPopup().find('.swal2-confirm').click()
        //cancel functionality ends

        bin.addBinAndArea().click()
        bin.modalTitle().should('have.text', 'Area & Bin Setup Wizard')
        bin.configTableHeader();
        bin.configTableColumnHeader(0).should('have.text', 'LOCATION ')
        bin.configTableColumnHeader(1).should('have.text', 'PREFIX ')
        bin.configTableColumnHeader(2).should('have.text', 'DIGIT ')
        bin.configTableColumnHeader(3).should('have.text', 'START ')
        bin.configTableColumnHeader(4).should('have.text', 'COUNT ')
        bin.configTableColumnData(0, 0).find('input').clear().type('Area');
        bin.configTableColumnData(0, 1).find('input');
        bin.configTableColumnData(0, 2).find('input').clear().type(2);
        bin.configTableColumnData(0, 4).find('input').clear().type(1);
        bin.configTableColumnData(1, 0).find('input').clear().type('Bin');
        bin.configTableColumnData(1, 1).find('input');
        bin.configTableColumnData(1, 2).find('input').clear().type(2);
        bin.configTableColumnData(1, 4).find('input').clear().type(1);
        bin.generateButton().click()
        bin.areaPreview()
        bin.binPreview()
        bin.backButton().click()
        bin.generateButton().click()
        bin.areaPreview().find('.card-level-item').should('have.length.greaterThan', 0)
        bin.binPreview().find('.card-level-item').should('have.length.greaterThan', 0)
        bin.finishAndSaveButton().click()
        cy.wait(1000)
        cy.get("body").then($body => {
          if ($body.find('.toast-error').length > 0) {
            zone.toastmessage().should('have.text', 'No bins and areas are added');
          } else {
            zone.toastmessage().should('include.text', 'successfully added');
          }
        });

      })
    })
  })

  specify('Edit Bin', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(1000)
    //in warehouse page
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.warehouseName(row).click();
      cy.wait(2000)
      //in zone page
      zone.table().then($table => {
        zone.warehouseSelect()
        zone.addZone().should('include.text', 'ADD ZONE(S)')
        const rowsCount = $table.find('tbody').find('tr').length
        const row = random.randomNumberBetween(0, rowsCount - 1)
        zone.zoneName(row).click()
        cy.wait(1000)
        //in area and bin page
        bin.body().then($body => {
          if ($body.find('table').length > 0) {
            bin.tableHeader()
            bin.table().then($table => {
              const rowsCount = $table.find('tbody').find('.table-accordion-header').length;
              cy.log(rowsCount)
              const row = random.randomNumberBetween(0, rowsCount - 1)
              bin.editButton(row).click()

              cy.wait(1000)
              bin.editModal().should('be.visible')
              bin.editModalTitle().should('include.text', 'Edit Bin')
              bin.titleIcon()
              bin.crossIcon()
              bin.binInformationButton().click()
              bin.barCodeLabel()
              bin.barCodeInput()
              bin.nameLabel()
              bin.nameInput()
              bin.typeLabel()
              bin.typeInput()
              bin.pickSeqlabel()
              bin.pickSeqInput().clear().type(random.randomNumberBetween(0, 2))
              bin.putSeqlabel()
              bin.putSeqInput().clear().type(random.randomNumberBetween(0, 2))
              bin.heightLabel()
              bin.heightInput().clear().type(random.randomNumberBetween(1, 9))
              bin.lengthLabel()
              bin.lengthInput().clear().type(random.randomNumberBetween(1, 9))
              bin.widthLabel()
              bin.widthInput().clear().type(random.randomNumberBetween(1, 9))
              bin.heightUom()
              bin.lengthUom()
              bin.widthUom()
              bin.heightUom().then($select => {
                var optionsCount = $select.find('option').length
                if (optionsCount > 0) {
                  var optionKey = random.randomNumberBetween(0, optionsCount - 1)
                  bin.lengthClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
                    bin.heightUom().select(uom);
                    bin.lengthUom().select(uom);
                    bin.widthUom().select(uom);
                  })
                  bin.ladgerButton().click();


                  //  TODO //validating the ladger section


                  bin.binInformationButton().click()
                  bin.saveChangsButton().click()
                }
              })

            })




          } else {
            bin.noRecords().should('have.text', 'Looks like you do not have any records.')
          }
        })
      })
    })
  })

  specify('Delete Bin', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(1000)
    //in warehouse page
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.warehouseName(row).click();
      cy.wait(2000)
      //in zone page
      zone.table().then($table => {
        zone.warehouseSelect()
        zone.addZone().should('include.text', 'ADD ZONE(S)')
        const rowsCount = $table.find('tbody').find('tr').length
        const row = random.randomNumberBetween(0, rowsCount - 1)
        zone.zoneName(row).click()
        cy.wait(1000)
        //in area and bin page
        bin.body().then($body => {
          if ($body.find('table').length > 0) {
            bin.tableHeader()
            bin.table().then($table => {
              const rowsCount = $table.find('tbody').find('.table-accordion-header').length;
              cy.log(rowsCount)
              const row = random.randomNumberBetween(0, rowsCount - 1)
              bin.deleteButton(row).click()
              cy.wait(1000)
              bin.warningIcon()
              bin.areYouSure().contains('Delete Bin?')
              bin.warningMessage().contains('The selected bin will be deleted permanently!')
              bin.closeButton().click()     //validates cancel button functionality
              bin.popUp().should('not.be.visible')
              bin.deleteButton(row).click()
              bin.deleteConfirmButton().click()
              cy.wait(1000)
              cy.get("body").then($body => {
                if ($body.find('.toast-error').length > 0) {
                  bin.toastmessage().should('include.text', 'The statement has been terminated');
                } else {
                  bin.toastmessage().should('have.text', 'Bin successfully deleted');
                }
              });

            })




          } else {
            bin.noRecords().should('have.text', 'Looks like you do not have any records.')
          }
        })
      })
    })
  })



  specify('Edit Area', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(1000)
    //in warehouse page
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.warehouseName(row).click();
      cy.wait(2000)
      //in zone page
      zone.table().then($table => {
        zone.warehouseSelect()
        zone.addZone().should('include.text', 'ADD ZONE(S)')
        const rowsCount = $table.find('tbody').find('tr').length
        const row = random.randomNumberBetween(0, rowsCount - 1)
        zone.zoneName(row).click()
        cy.wait(1000)
        //in area and bin page
        bin.body().then($body => {
          if ($body.find('table').length > 0) {
            bin.tableHeader()
            bin.table().then($table => {
              const rowsCount = $table.find('tr').find('td').find('button[mattooltip="Options"]').length
              const row = random.randomNumberBetween(0, rowsCount - 1)
              bin.threeDots(row).click()
              bin.threeDotEditButton().click()
              cy.wait(1000)
              bin.editModal().should('be.visible')
              bin.editModalTitle().should('include.text', 'Edit Area')
              bin.titleIcon()
              bin.crossIcon()
              bin.saveChangsButton().click()
            })
          } else {
            bin.noRecords().should('have.text', 'Looks like you do not have any records.')
          }
        })
      })
    })
  })

  specify('Delete Area', () => {
    sidebar.warehouseSetup().click();
    sidebar.warehouse().click();
    cy.wait(1000)
    //in warehouse page
    warehouse.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length
      const row = random.randomNumberBetween(0, rowsCount - 1)
      warehouse.warehouseName(row).click();
      cy.wait(2000)
      //in zone page
      zone.table().then($table => {
        zone.warehouseSelect()
        zone.addZone().should('include.text', 'ADD ZONE(S)')
        const rowsCount = $table.find('tbody').find('tr').length
        const row = random.randomNumberBetween(0, rowsCount - 1)
        zone.zoneName(row).click()
        cy.wait(1000)
        //in area and bin page
        bin.body().then($body => {
          if ($body.find('table').length > 0) {
            bin.tableHeader()
            bin.table().then($table => {
              const rowsCount = $table.find('tr').find('td').find('button[mattooltip="Options"]').length
              const row = random.randomNumberBetween(0, rowsCount - 1)
              bin.threeDots(row).click()
              bin.threeDotDeleteButton().click()
              cy.wait(1000)
              bin.warningIcon()
              bin.areYouSure().contains('Delete Area?')
              bin.warningMessage().contains('The selected area will be deleted permanently!')
              bin.closeButton().click()     //validates cancel button functionality
              bin.popUp().should('not.be.visible')
              bin.threeDots(row).click()
              bin.threeDotDeleteButton().click()
              bin.deleteConfirmButton().click()
              cy.wait(1000)
              cy.get("body").then($body => {
                if ($body.find('.toast-error').length > 0) {
                  bin.toastmessage().should('include.text', 'The statement has been terminated');
                } else {
                  bin.toastmessage().should('have.text', 'Area successfully deleted');
                }
              });

            })

          } else {
            bin.noRecords().should('have.text', 'Looks like you do not have any records.')
          }
        })
      })
    })
  })



  specify('Bin list from bin submenu', () => {
    sidebar.warehouseSetup().click();
    sidebar.bin().click();
    cy.wait(1000)
    topbar.warehouse().click()
    cy.wait(1000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      cy.log(optionsCount)
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
        bin.body().then($body => {
          if ($body.find('table').length > 0) {
            bin.tableHeader()
            bin.tableColumnHeader(0).should('exist')
            bin.tableColumnHeader(1).should('have.text', 'Code')
            bin.tableColumnHeader(2).should('have.text', 'Bin Name')
            bin.tableColumnHeader(3).should('have.text', 'Location')
            bin.tableColumnHeader(4).should('have.text', 'Pick Seq.')
            bin.tableColumnHeader(5).should('have.text', 'Put Seq.')
            bin.tableColumnHeader(6).should('have.text', 'Dimension')
            bin.tableColumnHeader(7).should('have.text', 'Bin Type')
            bin.tableColumnHeader(8).should('exist')
          } else {
            bin.noRecords().should('have.text', 'Looks like you do not have any records.')
          }
        })

      }
    })
  })

  specify('Edit bin from bin submenu', () => {
    sidebar.warehouseSetup().click();
    sidebar.bin().click();
    cy.wait(1000)
    topbar.warehouse().click()
    cy.wait(1000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
        cy.wait(1000)
        bin.body().then($body => {
          cy.wait(1000)
          if ($body.find('table').length > 0) {
            bin.tableHeader()
            bin.table().then($table => {
              const rowsCount = $table.find('tbody').find('.table-accordion-header').length;
              const row = random.randomNumberBetween(0, rowsCount - 1)
              bin.editIcon(row).click()
              cy.wait(1000)
              bin.editModal().should('be.visible')
              bin.editModalTitle().should('have.text', 'Edit Bin')
              bin.titleIcon()
              bin.crossIcon()
              bin.binInformationButton().click()
              bin.barCodeLabel()
              bin.barCodeInput()
              bin.nameLabel()
              bin.nameInput()
              bin.typeLabel()
              bin.typeInput()
              bin.pickSeqlabel()
              bin.pickSeqInput().clear().type(random.randomNumberBetween(0, 2))
              bin.putSeqlabel()
              bin.putSeqInput().clear().type(random.randomNumberBetween(0, 2))
              bin.heightLabel()
              bin.heightInput().clear().type(random.randomNumberBetween(1, 9))
              bin.lengthLabel()
              bin.lengthInput().clear().type(random.randomNumberBetween(1, 9))
              bin.widthLabel()
              bin.widthInput().clear().type(random.randomNumberBetween(1, 9))
              bin.heightUom()
              bin.lengthUom()
              bin.widthUom()
              bin.heightUom().then($select => {
                var optionsCount = $select.find('option').length
                if (optionsCount > 0) {
                  var optionKey = random.randomNumberBetween(0, optionsCount - 1)
                  bin.lengthClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
                    bin.heightUom().select(uom);
                    bin.lengthUom().select(uom);
                    bin.widthUom().select(uom);
                  })
                  bin.ladgerButton().click();


                  //  TODO //validating the ladger section


                  bin.binInformationButton().click()
                  bin.saveChangsButton().click()
                }
              })

            })
          } else {
            bin.noRecords().should('have.text', 'Looks like you do not have any records.')
          }
        })

      }
    })
  })


  specify('Check bin inventories', () => {
    sidebar.warehouseSetup().click();
    sidebar.bin().click();
    cy.wait(1000)
    topbar.warehouse().click()
    cy.wait(1000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
        cy.wait(1000)
        bin.body().then($body => {
          cy.wait(1000)
          if ($body.find('table').length > 0) {
            bin.tableHeader()
            bin.table().then($table => {
              const rowsCount = $table.find('tbody').find('.table-accordion-header').length;
              const row = random.randomNumberBetween(0, rowsCount - 1)
              bin.accordionIcon(row).click()
              cy.wait(1000)

              // TODO //checking the bin inventories

              bin.accordionIcon(row).click()
            })
          } else {
            bin.noRecords().should('have.text', 'Looks like you do not have any records.')
          }
        })

      }
    })
  })
})
