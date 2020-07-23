/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Random from "../../../support/page-objects/random.po"
import Inventory from "../../../support/page-objects/user/itemManagement/inventory.po";
import TopBar from "../../../support/page-objects/user/topbar.po";

context('All Item', () => {
    var sidebar = new Sidebar();
    var topbar = new TopBar()
    var random = new Random();
    var inventory = new Inventory()


    beforeEach(() => {
        cy.login()
    })

    afterEach(() => {
      cy.logout()
    })



    specify('Visits and validates the inventory page', () => {
        sidebar.itemManagement().click()
        sidebar.inventory().click()
        cy.wait(1000)
        cy.url().should("include", "inventory");
        inventory.searchIcon()
        inventory.importButton()
        inventory.titleBar()
        cy.wait(1000);

        inventory.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                inventory.tableHeader();
                inventory.tableColumnHeader(0).should("exist")
            } else {
                cy.log("Table is not found");
                //inventory.noRecords().should("include.text", "No items found.");
        }

    });
    })

    specify('validate the import button', () => {
        sidebar.itemManagement().click()
        sidebar.inventory().click()
        cy.wait(1000)
        cy.url().should("include", "inventory");
        inventory.importButton().click()
        inventory.importItemInventory()
        inventory.downloadButton()
        inventory.uploadButton()
        inventory.cancelButton()
        inventory.cancelButton().click()
        inventory.okayCancelButton()
        inventory.okayCancelButton().click()

    })



})