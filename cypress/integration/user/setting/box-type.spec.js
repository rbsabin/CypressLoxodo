/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import BoxType from '../../../support/page-objects/user/setting/box-type.po'
import Random from "../../../support/page-objects/random.po"
describe('Box Type', () => {
  var sidebar = new Sidebar();
  var boxType = new BoxType();
  var random = new Random();

  beforeEach(() => {
    cy.login();
  })

  afterEach(() => {
    cy.logout();
  })



  it('Visits and Validates components of Box Types page', () => {
    sidebar.settings().click();
    sidebar.boxType().click();
    cy.url().should('include', 'box-types');
    boxType.titleBarIcon();
    boxType.titleBarTitleName().should('include.text', 'Box Types');
    boxType.titleBarSearchBar();
    boxType.titleBarAddButton();
    boxType.nameColumn().should('have.text', 'Name');
    boxType.dimensionColumn().should('have.text', 'Dimension');
    boxType.maxWeightColumn().should('have.text', 'Max Weight');
    boxType.volumeColumn().should('have.text', 'Volume');
    boxType.actionColumn();
    boxType.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        boxType.tableRow().each(($tr) => {
          cy.get($tr).children().should('have.length', 5)
        })
        boxType.actionButtons().each(($e) => {
          cy.get($e).children().should('have.length', 2)
        })
      }
    })
  })

  it('Validates the addition of new Box Type', () => {
    sidebar.settings().click();
    sidebar.boxType().click();
    boxType.titleBarAddButton().click();
    boxType.titleIcon();
    boxType.title().should('have.text', 'Add Box Type');
    boxType.crossIcon();
    boxType.nameLabel();
    boxType.nameInput().type(random.stringUppercase(5));
    boxType.heightLabel();
    boxType.heightInput().clear().type(random.naturalNumber(1));
    boxType.lengthLabel();
    boxType.lengthInput().clear().type(random.naturalNumber(1));
    boxType.widthLabel();
    boxType.widthInput().clear().type(random.naturalNumber(1));
    boxType.maxWeightLabel();
    boxType.maxWeightInput().clear().type(random.naturalNumber(1));
    boxType.volumeLabel();
    boxType.volumeInput();

    boxType.heightUom().then($select => {
      var optionsCount = $select.find('option').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        boxType.lengthClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
          boxType.heightUom().select(uom);
          boxType.lengthUom().select(uom);
          boxType.widthUom().select(uom);
        })
      }
    })

    boxType.maxWeightUom().then($select => {
      var optionsCount = $select.find('option').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        boxType.weightClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
          boxType.maxWeightUom().select(uom);
        })
      }
    })

    boxType.volumeUom().then($select => {
      var optionsCount = $select.find('option').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        boxType.volumeClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
          boxType.volumeUom().select(uom);
        })
      }
    })

    boxType.addButton().click();
    boxType.toastmessage().should('have.text', 'New Box Type successfully added');
  })




  it('Edits the existing Box Type', () => {
    sidebar.settings().click();
    sidebar.boxType().click();
    boxType.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount - 1)
        boxType.editIcon(row).click()
        boxType.titleIcon();
        boxType.title().should('have.text', 'Edit Box Type');
        boxType.crossIcon();
        boxType.nameLabel();
        boxType.nameInput().clear().type(random.stringUppercase(5));
        boxType.heightLabel();
        boxType.heightInput().clear().type(random.naturalNumber(1));
        boxType.lengthLabel();
        boxType.lengthInput().clear().type(random.naturalNumber(1));
        boxType.widthLabel();
        boxType.widthInput().clear().type(random.naturalNumber(1));
        boxType.heightUom().then($select => {
          var optionsCount = $select.find('option').length
          if (optionsCount > 0) {
            var optionKey = random.randomNumberBetween(0, optionsCount - 1)
            boxType.lengthClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
              boxType.heightUom().select(uom);
              boxType.lengthUom().select(uom);
              boxType.widthUom().select(uom);
            })
          }
        })
        boxType.maxWeightLabel();
        boxType.maxWeightInput().clear().type(random.naturalNumber(1));
        boxType.maxWeightUom().then($select => {
          var optionsCount = $select.find('option').length
          if (optionsCount > 0) {
            var optionKey = random.randomNumberBetween(0, optionsCount - 1)
            boxType.weightClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
              boxType.maxWeightUom().select(uom);
            })
          }
        })
        boxType.volumeLabel();
        boxType.volumeInput();
        boxType.volumeUom().then($select => {
          var optionsCount = $select.find('option').length
          if (optionsCount > 0) {
            var optionKey = random.randomNumberBetween(0, optionsCount - 1)
            boxType.volumeClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
              boxType.volumeUom().select(uom);
            })
          }
        })
        boxType.addButton().click();
        boxType.toastmessage().should('have.text', 'Box Type successfully updated');
      }
    })
  })



  it.skip('Deletes the existing Box Type', () => {
    sidebar.settings().click();
    sidebar.boxType().click();
    boxType.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount - 1)
        boxType.deleteIcon(row).click()
        boxType.popUp().should('be.visible')
        boxType.warningIcon()
        boxType.areYouSure().contains('Are you sure?')
        boxType.warningMessage().contains('The selected box type will be deleted permanently!')
        boxType.closeButton().click()
        boxType.popUp().should('not.be.visible')                                                         //validates cancel button functionality
        boxType.deleteIcon(row).click()
        boxType.deleteButton().click()
        cy.wait(1000)
        cy.get("body").then($body => {
          if ($body.find('.toast-error').length > 0) {
            boxType.toastmessage().should('include.text', 'The statement has been terminated');
          } else {
            boxType.toastmessage().should('have.text', 'Box Type successfully deleted');
          }
        });
      }
    })
  })

  it('validates the functionality of cancel buttons', () => {
    sidebar.settings().click();
    sidebar.boxType().click();
    boxType.titleBarAddButton().click();
    boxType.modal().should('be.visible');
    boxType.crossIcon().click();
    boxType.modal().should('not.be.visible');
    boxType.titleBarAddButton().click();
    boxType.modal().should('be.visible');
    boxType.cancelButton().click()
    boxType.modal().should('not.be.visible');
  })

})