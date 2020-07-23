/// <reference types="Cypress" />

import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Random from "../../../support/page-objects/random.po"
import ProductionPutAwayTask from "../../../support/page-objects/user/production/productionPutAwayTask.po";
import TopBar from "../../../support/page-objects/user/topbar.po";

context('Production Request', () => {
    var sidebar = new Sidebar();
    var random = new Random();
    var productionPutAwayTask = new ProductionPutAwayTask

    beforeEach(() => {
        cy.login()
    })
    /* afterEach(() => {
            cy.logout()
        }) */

    specify('Visits and validates the production put away task page', () => {
        sidebar.production().click()
        sidebar.productionPutAwayTask().click()
        cy.wait(1000)
        cy.url().should("include", "putaway");
        productionPutAwayTask.titleBar()
        productionPutAwayTask.button1()
        productionPutAwayTask.button2()
        productionPutAwayTask.adHocButton()
        productionPutAwayTask.directedButton()
        productionPutAwayTask.searchIcon()
        //check for the lists of the items in the table in the default page
        productionPutAwayTask.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionPutAwayTask.tableHeader();
                productionPutAwayTask.tableColumnHeader(1).should("have.text", " Code ");
                productionPutAwayTask.tableColumnHeader(2).should("have.text", " Name ");
                productionPutAwayTask.tableColumnHeader(3).should("have.text", " Base UOM ");
                productionPutAwayTask.tableColumnHeader(4).should("have.text", " Batched/Serialized ");
                productionPutAwayTask.tableColumnHeader(5).should("have.text", " Date Added ");
                productionPutAwayTask.tableColumnHeader(6).should("have.text", "Status");
                productionPutAwayTask.tableColumnHeader(7).should("have.text", "Action");
                productionPutAwayTask.tableColumnHeader(0).should("exist");
            } else {
                cy.log("Table is not found");
                productionPutAwayTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
            }
        });

        productionPutAwayTask.button1().click()
        productionPutAwayTask.allPutAwayTasks()
        productionPutAwayTask.myPutAwayTasks()
        productionPutAwayTask.myPutAwayTasks().click()
        //check for the lists of the items in the table in the my putaway tasks page
        productionPutAwayTask.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionPutAwayTask.tableHeader();
                productionPutAwayTask.tableColumnHeader(1).should("have.text", " Code ");
                productionPutAwayTask.tableColumnHeader(2).should("have.text", " Name ");
                productionPutAwayTask.tableColumnHeader(3).should("have.text", " Base UOM ");
                productionPutAwayTask.tableColumnHeader(4).should("have.text", " Batched/Serialized ");
                productionPutAwayTask.tableColumnHeader(5).should("have.text", " Date Added ");
                productionPutAwayTask.tableColumnHeader(6).should("have.text", "Status");
                productionPutAwayTask.tableColumnHeader(7).should("have.text", "Action");
                productionPutAwayTask.tableColumnHeader(0).should("exist");
            } else {
                cy.log("Table is not found");
                productionPutAwayTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
            }
        });

        productionPutAwayTask.button2().click()
        productionPutAwayTask.allStatus()
        productionPutAwayTask.availableStatus()
        productionPutAwayTask.inProcessingStatus()
        productionPutAwayTask.notStartedStatus()
        productionPutAwayTask.cancelledStatus()
        productionPutAwayTask.completedStatus()
        productionPutAwayTask.allStatus().click()
        //check for the lists of the items in the table in the all section
        productionPutAwayTask.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionPutAwayTask.tableHeader();
                productionPutAwayTask.tableColumnHeader(1).should("have.text", " Code ");
                productionPutAwayTask.tableColumnHeader(2).should("have.text", " Name ");
                productionPutAwayTask.tableColumnHeader(3).should("have.text", " Base UOM ");
                productionPutAwayTask.tableColumnHeader(4).should("have.text", " Batched/Serialized ");
                productionPutAwayTask.tableColumnHeader(5).should("have.text", " Date Added ");
                productionPutAwayTask.tableColumnHeader(6).should("have.text", "Status");
                productionPutAwayTask.tableColumnHeader(7).should("have.text", "Action");
                productionPutAwayTask.tableColumnHeader(0).should("exist");
            } else {
                cy.log("Table is not found");
                productionPutAwayTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
            }
        });
        //check for the lists of the items in the table in the available section
        productionPutAwayTask.button2().click()
        productionPutAwayTask.availableStatus().click()
        productionPutAwayTask.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionPutAwayTask.tableHeader();
                productionPutAwayTask.tableColumnHeader(1).should("have.text", " Code ");
                productionPutAwayTask.tableColumnHeader(2).should("have.text", " Name ");
                productionPutAwayTask.tableColumnHeader(3).should("have.text", " Base UOM ");
                productionPutAwayTask.tableColumnHeader(4).should("have.text", " Batched/Serialized ");
                productionPutAwayTask.tableColumnHeader(5).should("have.text", " Date Added ");
                productionPutAwayTask.tableColumnHeader(6).should("have.text", "Status");
                productionPutAwayTask.tableColumnHeader(7).should("have.text", "Action");
                productionPutAwayTask.tableColumnHeader(0).should("exist");
            } else {
                cy.log("Table is not found");
                productionPutAwayTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
            }
        });
        //check for the lists of the items in the table in the notStartedStatus section
        productionPutAwayTask.button2().click()
        productionPutAwayTask.notStartedStatus().click()
        productionPutAwayTask.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionPutAwayTask.tableHeader();
                productionPutAwayTask.tableColumnHeader(1).should("have.text", " Code ");
                productionPutAwayTask.tableColumnHeader(2).should("have.text", " Name ");
                productionPutAwayTask.tableColumnHeader(3).should("have.text", " Base UOM ");
                productionPutAwayTask.tableColumnHeader(4).should("have.text", " Batched/Serialized ");
                productionPutAwayTask.tableColumnHeader(5).should("have.text", " Date Added ");
                productionPutAwayTask.tableColumnHeader(6).should("have.text", "Status");
                productionPutAwayTask.tableColumnHeader(7).should("have.text", "Action");
                productionPutAwayTask.tableColumnHeader(0).should("exist");
            } else {
                cy.log("Table is not found");
                productionPutAwayTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
            }
        });
        //check for the lists of the items in the table in the inProcessingStatus section
        productionPutAwayTask.button2().click()
        productionPutAwayTask.inProcessingStatus().click()
        productionPutAwayTask.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionPutAwayTask.tableHeader();
                productionPutAwayTask.tableColumnHeader(1).should("have.text", " Code ");
                productionPutAwayTask.tableColumnHeader(2).should("have.text", " Name ");
                productionPutAwayTask.tableColumnHeader(3).should("have.text", " Base UOM ");
                productionPutAwayTask.tableColumnHeader(4).should("have.text", " Batched/Serialized ");
                productionPutAwayTask.tableColumnHeader(5).should("have.text", " Date Added ");
                productionPutAwayTask.tableColumnHeader(6).should("have.text", "Status");
                productionPutAwayTask.tableColumnHeader(7).should("have.text", "Action");
                productionPutAwayTask.tableColumnHeader(0).should("exist");
            } else {
                cy.log("Table is not found");
                productionPutAwayTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
            }

        });
        //check for the lists of the items in the table in the cancelledStatus section
        productionPutAwayTask.button2().click()
        productionPutAwayTask.cancelledStatus().click()
        productionPutAwayTask.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionPutAwayTask.tableHeader();
                productionPutAwayTask.tableColumnHeader(1).should("have.text", " Code ");
                productionPutAwayTask.tableColumnHeader(2).should("have.text", " Name ");
                productionPutAwayTask.tableColumnHeader(3).should("have.text", " Base UOM ");
                productionPutAwayTask.tableColumnHeader(4).should("have.text", " Batched/Serialized ");
                productionPutAwayTask.tableColumnHeader(5).should("have.text", " Date Added ");
                productionPutAwayTask.tableColumnHeader(6).should("have.text", "Status");
                productionPutAwayTask.tableColumnHeader(7).should("have.text", "Action");
                productionPutAwayTask.tableColumnHeader(0).should("exist");
            } else {
                cy.log("Table is not found");
                productionPutAwayTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
            }
        });
        //check for the lists of the items in the table in the completedStatus section
        productionPutAwayTask.button2().click()
        productionPutAwayTask.completedStatus().click()
        productionPutAwayTask.body().then(($body) => {
            if ($body.find("table").length > 0) {
                cy.log("Table is found");
                productionPutAwayTask.tableHeader();
                productionPutAwayTask.tableColumnHeader(1).should("have.text", " Code ");
                productionPutAwayTask.tableColumnHeader(2).should("have.text", " Name ");
                productionPutAwayTask.tableColumnHeader(3).should("have.text", " Base UOM ");
                productionPutAwayTask.tableColumnHeader(4).should("have.text", " Batched/Serialized ");
                productionPutAwayTask.tableColumnHeader(5).should("have.text", " Date Added ");
                productionPutAwayTask.tableColumnHeader(6).should("have.text", "Status");
                productionPutAwayTask.tableColumnHeader(7).should("have.text", "Action");
                productionPutAwayTask.tableColumnHeader(0).should("exist");
            } else {
                cy.log("Table is not found");
                productionPutAwayTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
            }
        });
    })


    specify('Validates the pop up of ad-hoc button', () => {
        sidebar.production().click()
        sidebar.productionPutAwayTask().click()
        cy.wait(1000)
        cy.url().should("include", "putaway");
        productionPutAwayTask.adHocButton()
        productionPutAwayTask.adHocButton().click()
        productionPutAwayTask.adHocPutAwayHeader()
        productionPutAwayTask.pleaseProceedToText()
        productionPutAwayTask.receivingZone()
        productionPutAwayTask.confirmButton()
        productionPutAwayTask.adHocCancelButton()
        productionPutAwayTask.adHocCancelButton().click()

    })

    specify('Validates the pop up of directed button', () => {
        sidebar.production().click()
        sidebar.productionPutAwayTask().click()
        cy.wait(1000)
        cy.url().should("include", "putaway");

        productionPutAwayTask.directedButton()
        productionPutAwayTask.directedButton().click()
        productionPutAwayTask.createDirectedPutAwayHeader()
        productionPutAwayTask.directedAddButton()
        productionPutAwayTask.cancelDirectedButton()
        productionPutAwayTask.createRequestDirectedButton()
        productionPutAwayTask.cancelDirectedButton().click()

    })
})