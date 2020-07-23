/// <reference types="Cypress" />

import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Random from "../../../support/page-objects/random.po"
import ProductionRequest from "../../../support/page-objects/user/production/productionRequest.po";
import TopBar from "../../../support/page-objects/user/topbar.po";

context('Production Request', () => {
    var sidebar = new Sidebar();
    var random = new Random();
    var productionRequest = new ProductionRequest


    beforeEach(() => {
        cy.login()
    })

    /* afterEach(() => {
        cy.logout()
    }) */


    specify('Visits and validates the production request page', () => {
        sidebar.production().click()
        sidebar.productionRequest().click()
        cy.wait(1000)
        cy.url().should("include", "production-requests");
        productionRequest.titleBar()
        productionRequest.searchIcon()
        productionRequest.importButton()
        productionRequest.addButton()
        productionRequest.statusButton()
        cy.wait(1000);
        //checking for the table in the default page
        productionRequest.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionRequest.tableHeader();
                productionRequest.tableColumnHeader(0).should("have.text", "PO#");
                productionRequest.tableColumnHeader(1).should("have.text", "Start Date");
                productionRequest.tableColumnHeader(2).should("have.text", "End Date");
                productionRequest.tableColumnHeader(3).should("have.text", "Status");
                productionRequest.tableColumnHeader(4).should("have.text", "Action");
                productionRequest.tableColumnHeader(5).should("have.text", "Status");
                productionRequest.tableColumnHeader(6).should("exist");
            } else {
                cy.log("Table is not found");
                productionRequest.noRecords().should("include.text", "No data, yet. Looks like you haven't added any record.  CREATE ONE NOW ");
            }
        });

        //clicing the status button
        productionRequest.statusButton().click()
        //checking for the lists of the buttons there 
        productionRequest.allStatus()
        productionRequest.notStartedStatus()
        productionRequest.supplyToProductionStatus()
        productionRequest.receiveFromProductionStatus()
        productionRequest.completedStatus()
        productionRequest.cancelledStatus()

        //clicking on the allstatus
        productionRequest.allStatus().click()
        productionRequest.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionRequest.tableHeader();
                productionRequest.tableColumnHeader(0).should("have.text", "PO#");
                productionRequest.tableColumnHeader(1).should("have.text", "Start Date");
                productionRequest.tableColumnHeader(2).should("have.text", "End Date");
                productionRequest.tableColumnHeader(3).should("have.text", "Status");
                productionRequest.tableColumnHeader(4).should("have.text", "Action");
                productionRequest.tableColumnHeader(5).should("have.text", "Status");
                productionRequest.tableColumnHeader(6).should("exist");
            } else {
                cy.log("Table is not found");
                productionRequest.noRecords().should("include.text", "No data, yet. Looks like you haven't added any record.  CREATE ONE NOW ");
            }
        });

        //clicking on the notStartedStatus
        productionRequest.statusButton().click()
        productionRequest.notStartedStatus().click()
        productionRequest.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionRequest.tableHeader();
                productionRequest.tableColumnHeader(0).should("have.text", "PO#");
                productionRequest.tableColumnHeader(1).should("have.text", "Start Date");
                productionRequest.tableColumnHeader(2).should("have.text", "End Date");
                productionRequest.tableColumnHeader(3).should("have.text", "Status");
                productionRequest.tableColumnHeader(4).should("have.text", "Action");
                productionRequest.tableColumnHeader(5).should("have.text", "Status");
                productionRequest.tableColumnHeader(6).should("exist");
            } else {
                cy.log("Table is not found");
                productionRequest.noRecords().should("include.text", "No data, yet. Looks like you haven't added any record.  CREATE ONE NOW ");
            }
        });

        //clicking on the supplyToProductionStatus
        productionRequest.statusButton().click()
        productionRequest.supplyToProductionStatus().click()
        productionRequest.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionRequest.tableHeader();
                productionRequest.tableColumnHeader(0).should("have.text", "PO#");
                productionRequest.tableColumnHeader(1).should("have.text", "Start Date");
                productionRequest.tableColumnHeader(2).should("have.text", "End Date");
                productionRequest.tableColumnHeader(3).should("have.text", "Status");
                productionRequest.tableColumnHeader(4).should("have.text", "Action");
                productionRequest.tableColumnHeader(5).should("have.text", "Status");
                productionRequest.tableColumnHeader(6).should("exist");
            } else {
                cy.log("Table is not found");
                productionRequest.noRecords().should("include.text", "No data, yet. Looks like you haven't added any record.  CREATE ONE NOW ");
            }
        });

        //clicking on the receiveFromProductionStatus
        productionRequest.statusButton().click()
        productionRequest.receiveFromProductionStatus().click()
        productionRequest.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionRequest.tableHeader();
                productionRequest.tableColumnHeader(0).should("have.text", "PO#");
                productionRequest.tableColumnHeader(1).should("have.text", "Start Date");
                productionRequest.tableColumnHeader(2).should("have.text", "End Date");
                productionRequest.tableColumnHeader(3).should("have.text", "Status");
                productionRequest.tableColumnHeader(4).should("have.text", "Action");
                productionRequest.tableColumnHeader(5).should("have.text", "Status");
                productionRequest.tableColumnHeader(6).should("exist");
            } else {
                cy.log("Table is not found");
                productionRequest.noRecords().should("include.text", "No data, yet. Looks like you haven't added any record.  CREATE ONE NOW ");
            }
        });

        //clicking on the completedStatus
        productionRequest.statusButton().click()
        productionRequest.completedStatus().click()
        productionRequest.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionRequest.tableHeader();
                productionRequest.tableColumnHeader(0).should("have.text", "PO#");
                productionRequest.tableColumnHeader(1).should("have.text", "Start Date");
                productionRequest.tableColumnHeader(2).should("have.text", "End Date");
                productionRequest.tableColumnHeader(3).should("have.text", "Status");
                productionRequest.tableColumnHeader(4).should("have.text", "Action");
                productionRequest.tableColumnHeader(5).should("have.text", "Status");
                productionRequest.tableColumnHeader(6).should("exist");
            } else {
                cy.log("Table is not found");
                productionRequest.noRecords().should("include.text", "No data, yet. Looks like you haven't added any record.  CREATE ONE NOW ");
            }
        });

        //clicking on the cancelledStatus
        productionRequest.statusButton().click()
        productionRequest.cancelledStatus().click()
        productionRequest.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionRequest.tableHeader();
                productionRequest.tableColumnHeader(0).should("have.text", "PO#");
                productionRequest.tableColumnHeader(1).should("have.text", "Start Date");
                productionRequest.tableColumnHeader(2).should("have.text", "End Date");
                productionRequest.tableColumnHeader(3).should("have.text", "Status");
                productionRequest.tableColumnHeader(4).should("have.text", "Action");
                productionRequest.tableColumnHeader(5).should("have.text", "Status");
                productionRequest.tableColumnHeader(6).should("exist");
            } else {
                cy.log("Table is not found");
                productionRequest.noRecords().should("include.text", "No data, yet. Looks like you haven't added any record.  CREATE ONE NOW ");
            }
        });


    })

    specify('Clicking the add button # This is only to check whether the popup is working or not', () => {
        sidebar.production().click()
        sidebar.productionRequest().click()
        cy.wait(1000)
        cy.url().should("include", "production-requests");
        productionRequest.addButton().click()
        productionRequest.newProdcutionRequestText()
        productionRequest.productionRequestnformationTab1()
        productionRequest.outputItemsTab2()
        productionRequest.inputItemsTab3()
        productionRequest.productionOrderNumber()
        productionRequest.startDate()
        productionRequest.endDate()
        productionRequest.closeButton()
        productionRequest.cancelAddButton()
        productionRequest.nextButton()
        productionRequest.outputItemsTab2().click()
        productionRequest.inputItemsTab3().click()
        productionRequest.productionRequestnformationTab1().click()
        productionRequest.cancelAddButton().click()

    }) 

    specify('Clicking the import button # This is only to check whether the popup is working or not', () => {
        sidebar.production().click()
        sidebar.productionRequest().click()
        cy.wait(1000)
        cy.url().should("include", "production-requests");
        productionRequest.importButton().click()
        productionRequest.importPrText()
        productionRequest.uploadTab1()
        productionRequest.reviewAndCompleteTab2()
        productionRequest.downloadButton()
        productionRequest.uploadButton()
        productionRequest.closeButton()
        productionRequest.cancelImportButton()
        productionRequest.nextButton()
        productionRequest.cancelImportButton().click()
        productionRequest.cancelConfirmButton()
        productionRequest.cancelConfirmButton().click()
    })
    
})