/// <reference types="Cypress" />

import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Random from "../../../support/page-objects/random.po"
import ReceiveFromProductionTask from "../../../support/page-objects/user/production/receiveFromProductionTask.po";
import TopBar from "../../../support/page-objects/user/topbar.po";

context('Receive From Production Task', () => {
    var sidebar = new Sidebar();
    var random = new Random();
    var receiveFromProductionTask = new ReceiveFromProductionTask


    beforeEach(() => {
        cy.login()
    })

    /* afterEach(() => {
        cy.logout()
    }) */

    specify('Visits and validates the receive from production task page', () => {
        sidebar.production().click()
        sidebar.receiveFromProductionTask().click()
        cy.url().should("include", "production-receipt");
        cy.wait(1000)
        receiveFromProductionTask.button1()
        receiveFromProductionTask.button2()
        receiveFromProductionTask.button1().click()
        receiveFromProductionTask.allReceiveTask()
        receiveFromProductionTask.myReceiveTask()
        receiveFromProductionTask.myReceiveTask().click()

        //checking all the status button
        receiveFromProductionTask.button2().click()
        receiveFromProductionTask.allStatus()
        receiveFromProductionTask.availableStatus()
        receiveFromProductionTask.notStartedStatus()
        receiveFromProductionTask.inProcessingStatus()
        receiveFromProductionTask.completedStatus()
        receiveFromProductionTask.cancelledStatus()
        
        //clicking the all status button
        receiveFromProductionTask.allStatus().click()
        //there should be code to check the list of the items here 

        //clicking the available status button
        receiveFromProductionTask.button2().click()
        receiveFromProductionTask.availableStatus().click()
        //there should be code to check the list of the items here 

        //clicking the notStartedStatus button
        receiveFromProductionTask.button2().click()
        receiveFromProductionTask.notStartedStatus().click()
        //there should be code to check the list of the items here 

        //clicking the inProcessingStatus button
        receiveFromProductionTask.button2().click()
        receiveFromProductionTask.inProcessingStatus().click()
        //there should be code to check the list of the items here 

        //clicking the completedStatus button
        receiveFromProductionTask.button2().click()
        receiveFromProductionTask.completedStatus().click()
        //there should be code to check the list of the items here 

        //clicking the cancelledStatus button
        receiveFromProductionTask.button2().click()
        receiveFromProductionTask.cancelledStatus().click()
        //there should be code to check the list of the items here 
    })
})
