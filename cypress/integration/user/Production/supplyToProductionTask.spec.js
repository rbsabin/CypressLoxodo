/// <reference types="Cypress" />

import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Random from "../../../support/page-objects/random.po"
import SupplyToProductionTask from "../../../support/page-objects/user/production/supplyToProductionTask.po";
import TopBar from "../../../support/page-objects/user/topbar.po";

context('Production Request', () => {
  var sidebar = new Sidebar();
  var random = new Random();
  var supplyToProductionTask = new SupplyToProductionTask

  beforeEach(() => {
    cy.login()
  })

  /* afterEach(() => {
      cy.logout()
  }) */

  specify('Visits and validates the supply to production task page', () => {
    sidebar.production().click()
    sidebar.supplyToProductionTask().click()
    cy.wait(1000)
    cy.url().should("include", "supply-to-production");
    supplyToProductionTask.titleBar()
    supplyToProductionTask.searchIcon()
    cy.wait(1000);
    //checking for the list of tasks there are in the default page
    supplyToProductionTask.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
      } else {
        cy.log("Table is not found");
        supplyToProductionTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
      }
    });

    //checking the all pick tasks button 2 components
    supplyToProductionTask.allPickTasksButton1()
    supplyToProductionTask.availableButton2()
    supplyToProductionTask.allPickTasksButton1().click()
    supplyToProductionTask.allProductionSupplyTasks()
    supplyToProductionTask.myProductionSupplyTasks()
    //clicking the my task button
    supplyToProductionTask.myProductionSupplyTasks().click()
    supplyToProductionTask.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
      } else {
        cy.log("Table is not found");
        supplyToProductionTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
      }
    });
    //clicking on the status button and checking for the list of buttons present there
    supplyToProductionTask.availableButton2().click()
    supplyToProductionTask.allstatus()
    supplyToProductionTask.availableStatus()
    supplyToProductionTask.notStartedStatus()
    supplyToProductionTask.inProcessingStatus()
    supplyToProductionTask.completedStatus()
    supplyToProductionTask.cancelledStatus()

    //clicking on the allStatus button
    supplyToProductionTask.allstatus().click()
    supplyToProductionTask.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
      } else {
        cy.log("Table is not found");
        supplyToProductionTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
      }
    });

    //clicking on the availablestatus 
    supplyToProductionTask.availableButton2().click()
    supplyToProductionTask.availableStatus().click()
    supplyToProductionTask.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
      } else {
        cy.log("Table is not found");
        supplyToProductionTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
      }
    });

    //clicking on the notStartedStatus 
    supplyToProductionTask.availableButton2().click()
    supplyToProductionTask.notStartedStatus().click()
    supplyToProductionTask.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
      } else {
        cy.log("Table is not found");
        supplyToProductionTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
      }
    });

    //clicking on the inProcessingStatus 
    supplyToProductionTask.availableButton2().click()
    supplyToProductionTask.inProcessingStatus().click()
    supplyToProductionTask.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
      } else {
        cy.log("Table is not found");
        supplyToProductionTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
      }
    });

    //clicking on the completedStatus 
    supplyToProductionTask.availableButton2().click()
    supplyToProductionTask.completedStatus().click()
    supplyToProductionTask.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
      } else {
        cy.log("Table is not found");
        supplyToProductionTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
      }
    });

    //clicking on the cancelledStatus 
    supplyToProductionTask.availableButton2().click()
    supplyToProductionTask.cancelledStatus().click()
    supplyToProductionTask.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
      } else {
        cy.log("Table is not found");
        supplyToProductionTask.noRecords().should("include.text", "No tasks to show just yet. When you have a task, it will be listed here. ");
      }
    });
  })
})