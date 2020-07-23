///<reference types="Cypress"/>

class ReceiveFromProductionTask {
    button1(){
        return cy.get(':nth-child(1) > .ml-3 > .border').should("exist")
    }
    button2(){
        return cy.get(':nth-child(2) > .ml-3 > .border').should("exist")
    }
    allReceiveTask(){
        return cy.get('.mat-menu-content > :nth-child(1)').should("exist")
    }
    myReceiveTask(){
        return cy.get('.mat-menu-content > :nth-child(2)').should("exist")
    }
    allStatus(){
        return cy.get('.mat-menu-content > :nth-child(1)').should("exist")
    }
    availableStatus(){
        return cy.get('.mat-menu-content > :nth-child(2)').should("exist")
    }
    notStartedStatus(){
        return cy.get('.mat-menu-content > :nth-child(3)').should("exist")
    }
    inProcessingStatus(){
        return cy.get('.mat-menu-content > :nth-child(4)').should("exist")
    }
    completedStatus(){
        return cy.get('.mat-menu-content > :nth-child(5)').should("exist")
    }
    cancelledStatus(){
        return cy.get('.mat-menu-content > :nth-child(6)').should("exist")
    }
}
export default ReceiveFromProductionTask;