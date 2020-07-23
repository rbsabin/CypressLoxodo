/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Titlebar from "../../../support/page-objects/user/setting/titlebar.po"
import ContainerStatus from '../../../support/page-objects/user/setting/container-status.po'
import Random from "../../../support/page-objects/random.po"
describe('Container Status', () => {
  var sidebar = new Sidebar();
  var titlebar = new Titlebar();
  var containerStatus = new ContainerStatus();
  var random = new Random();

  beforeEach(() => {
    cy.login();
  })

  afterEach(() => {
    cy.logout();
  })



  it('Visits and Validates components of Container Status page', () => {
    sidebar.settings().click();
    sidebar.containerStatus().click();
    cy.url().should('include', 'container-status');
    titlebar.checkContents('Container Status');
    containerStatus.nameColumn().should('have.text', 'Name');
    containerStatus.inboundOutboundColumn().should('have.text', 'Inbound/Outbound');
    containerStatus.availableToLoadColumn().should('have.text', 'Available To Load?');
    containerStatus.actionColumn();
    containerStatus.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        containerStatus.tableRow().each(($tr) => {
          cy.get($tr).children().should('have.length', 4)
        })
        containerStatus.actionButtons().each(($e) => {
          cy.get($e).children().should('have.length', 2)
        })
      }
    })
  })

  it('Validates the addition of new Container Status', () => {
    sidebar.settings().click();
    sidebar.containerStatus().click();
    titlebar.addButton().click();
    containerStatus.titleIcon();
    containerStatus.title().should('have.text', 'Add Container Status');
    containerStatus.crossIcon();
    containerStatus.nameLabel();
    containerStatus.nameInput().type(random.stringUppercase(5));
    containerStatus.inboundOutboundLabel();
    containerStatus.inboundOutboundInput().select(random.randomItem(['Inbound','Outbound','Both']));
    containerStatus.availableToLoadlabel();
    containerStatus.availableToLoadInput().select(random.randomItem(['Yes','No']))
    containerStatus.addButton().click();
    containerStatus.toastmessage().should('have.text', 'Container status successfully added')
  })

  it('Edits the existing Container Status', () => {
    sidebar.settings().click();
    sidebar.containerStatus().click();
    containerStatus.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount-1)
        containerStatus.editIcon(row).click()
        containerStatus.titleIcon();
        containerStatus.title().should('have.text', 'Edit Container Status');
        containerStatus.crossIcon();
        containerStatus.nameLabel();
        containerStatus.nameInput().clear().type(random.stringUppercase(5));
        containerStatus.inboundOutboundLabel();
        containerStatus.inboundOutboundInput().select(random.randomItem(['Inbound','Outbound','Both']));
        containerStatus.availableToLoadlabel();
        containerStatus.availableToLoadInput().select(random.randomItem(['Yes','No']))
        containerStatus.addButton().click();
        containerStatus.toastmessage().should('have.text', 'Container status successfully updated')
      }
    })
  })




  it('Deletes the existing Container Status', () => {
    sidebar.settings().click();
    sidebar.containerStatus().click();
    containerStatus.table().then($table => {
      const rowsCount = $table.find('tbody').find('tr').length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount - 1)
        containerStatus.deleteIcon(row).click()
        containerStatus.popUp().should('be.visible')
        containerStatus.warningIcon()
        containerStatus.areYouSure().contains('Confirmation')
        containerStatus.warningMessage().contains('Are you sure you want to delete this container status?')
        containerStatus.closeButton().click()
        containerStatus.popUp().should('not.be.visible')                                                         //validates cancel button functionality
        containerStatus.deleteIcon(row).click()
        containerStatus.deleteButton().click()
        cy.wait(1000)
        cy.get("body").then($body => {
          if ($body.find('.toast-error').length > 0) {
            containerStatus.toastmessage().should('include.text', "Cannot delete container status. It's already in use.");
          } else {
            containerStatus.toastmessage().should('have.text', 'Container status successfully deleted');
          }
        });
      }
    })
  })

  it('validates the functionality of cancel buttons', () => {
    sidebar.settings().click();
    sidebar.containerStatus().click();
    titlebar.addButton().click();
    containerStatus.modal().should('be.visible');
    containerStatus.crossIcon().click();
    containerStatus.modal().should('not.be.visible');
    titlebar.addButton().click();
    containerStatus.modal().should('be.visible');
    containerStatus.cancelButton().click()
    containerStatus.modal().should('not.be.visible');
  })

})