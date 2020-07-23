/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Titlebar from "../../../support/page-objects/user/setting/titlebar.po"
import ContainerType from '../../../support/page-objects/user/setting/container-type.po'
import Random from "../../../support/page-objects/random.po"
describe('Container Type', () => {
  var sidebar = new Sidebar();
  var titlebar = new Titlebar();
  var containerType = new ContainerType();
  var random = new Random();

  beforeEach(() => {
    cy.login();
  })

  afterEach(() => {
    cy.logout();
  })



  it('Visits and Validates components of Container Types page', () => {
    sidebar.settings().click();
    sidebar.containerType().click();
    cy.url().should('include', 'container-types');
    titlebar.checkContents('Container Types');
    containerType.nameColumn().should('have.text', 'Name');
    containerType.dimensionColumn().should('have.text', 'Dimension');
    containerType.maxWeightColumn().should('have.text', 'Max Weight');
    containerType.volumeColumn().should('have.text', 'Volume');
    containerType.actionColumn();
    containerType.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        containerType.tableRow().each(($tr) => {
          cy.get($tr).children().should('have.length', 5)
        })
        containerType.actionButtons().each(($e) => {
          cy.get($e).children().should('have.length', 2)
        })
      }
    })
  })

  it('Validates the addition of new Container Type', () => {
    sidebar.settings().click();
    sidebar.containerType().click();
    titlebar.addButton().click();
    containerType.titleIcon();
    containerType.title().should('have.text', 'Add Container Type');
    containerType.crossIcon();
    containerType.nameLabel();
    containerType.nameInput().type(random.stringUppercase(5));
    containerType.heightLabel();
    containerType.heightInput().clear().type(random.naturalNumber(1));
    containerType.lengthLabel();
    containerType.lengthInput().clear().type(random.naturalNumber(1));
    containerType.widthLabel();
    containerType.widthInput().clear().type(random.naturalNumber(1));
    containerType.heightUom().then($select => {
      var optionsCount = $select.find('option').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        containerType.lengthClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
          containerType.heightUom().select(uom);
          containerType.lengthUom().select(uom);
          containerType.widthUom().select(uom);
        })
      }
    })
    containerType.maxWeightLabel();
    containerType.maxWeightInput().clear().type(random.naturalNumber(1));
    containerType.maxWeightUom().then($select => {
      var optionsCount = $select.find('option').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        containerType.weightClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
          containerType.maxWeightUom().select(uom);
        })
      }
    })
    containerType.volumeLabel();
    containerType.volumeInput();
    containerType.volumeUom().then($select => {
      var optionsCount = $select.find('option').length
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        containerType.volumeClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
          containerType.volumeUom().select(uom);
        })
      }
    })
    containerType.addButton().click();
    containerType.toastmessage().should('have.text', 'New container type successfully added');
  })

  it('Edits the existing Container Type', () => {
    sidebar.settings().click();
    sidebar.containerType().click();
    containerType.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount-1)
        containerType.editIcon(row).click()
        containerType.titleIcon();
        containerType.title().should('have.text', 'Edit Container Type');
        containerType.crossIcon();
        containerType.nameLabel();
        containerType.nameInput().clear().type(random.stringUppercase(5));
        containerType.heightLabel();
        containerType.heightInput().clear().type(random.naturalNumber(1));
        containerType.lengthLabel();
        containerType.lengthInput().clear().type(random.naturalNumber(1));
        containerType.widthLabel();
        containerType.widthInput().clear().type(random.naturalNumber(1));
        containerType.heightUom().then($select => {
          var optionsCount = $select.find('option').length
          if (optionsCount > 0) {
            var optionKey = random.randomNumberBetween(0, optionsCount - 1)
            containerType.lengthClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
              containerType.heightUom().select(uom);
              containerType.lengthUom().select(uom);
              containerType.widthUom().select(uom);
            })
          }
        })
        containerType.maxWeightLabel();
        containerType.maxWeightInput().clear().type(random.naturalNumber(1));
        containerType.maxWeightUom().then($select => {
          var optionsCount = $select.find('option').length
          if (optionsCount > 0) {
            var optionKey = random.randomNumberBetween(0, optionsCount - 1)
            containerType.weightClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
              containerType.maxWeightUom().select(uom);
            })
          }
        })
        containerType.volumeLabel();
        containerType.volumeInput();
        containerType.volumeUom().then($select => {
          var optionsCount = $select.find('option').length
          if (optionsCount > 0) {
            var optionKey = random.randomNumberBetween(0, optionsCount - 1)
            containerType.volumeClassUomOptions().eq(optionKey).invoke('val').then((uom) => {
              containerType.volumeUom().select(uom);
            })
          }
        })
        containerType.addButton().click();
        containerType.toastmessage().should('have.text', 'Container type successfully updated');
      }
    })
  })



  it.skip('Deletes the existing Container Type', () => {
    sidebar.settings().click();
    sidebar.containerType().click();
    containerType.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount - 1)
        containerType.deleteIcon(row).click()
        containerType.popUp().should('be.visible')
        containerType.warningIcon()
        containerType.areYouSure().contains('Confirmation')
        containerType.warningMessage().contains('Are you sure you want to delete this container type?')
        containerType.closeButton().click()
        containerType.popUp().should('not.be.visible')                                                         //validates cancel button functionality
        containerType.deleteIcon(row).click()
        containerType.deleteButton().click()
        cy.wait(1000)
        cy.get("body").then($body => {
          if ($body.find('.toast-error').length > 0) {
            containerType.toastmessage().should('include.text', "Cannot delete container type that is already assigned to a container");
          } else {
            containerType.toastmessage().should('have.text', 'Container type successfully deleted');
          }
        });
      }
    })
  })

  it('validates the functionality of cancel buttons', () => {
    sidebar.settings().click();
    sidebar.containerType().click();
    titlebar.addButton().click();
    containerType.modal().should('be.visible');
    containerType.crossIcon().click();
    containerType.modal().should('not.be.visible');
    titlebar.addButton().click();
    containerType.modal().should('be.visible');
    containerType.cancelButton().click()
    containerType.modal().should('not.be.visible');
  })

})