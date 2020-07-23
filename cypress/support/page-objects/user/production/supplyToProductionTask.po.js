///<reference types="Cypress"/>

class SupplyToProductionTask {
    titleBar() {
        return cy.get(".m0").should("exist");
    }
    searchIcon() {
        return cy.get('#mat-input-8').should("exist");
    }

    body() {
        return cy.get("body");
      }
      table() {
        return cy.get("table").should("exist");
      }
    
      tableHeader() {
        return cy.get("table > thead > tr").should("exist");
      }
    
      tableColumnHeader(columnNumber) {
        return this.tableHeader().find("th").eq(columnNumber);
      }
      noRecords() {
        return cy.get(".empty-state-content").should("exist");
      }
      tableColumnData(columnNumber) {
        return this.tableRow().find("td").eq(columnNumber);
      }
    
      tableBody() {
        return cy.get("tbody").should("exist");
      }
    
      tableRow() {
        return cy.get("tbody > tr").should("exist");
      }
      actionButtons() {
        return cy.get('.isOpen > [style="width:40px;"]').should("exist");
      }


    allPickTasksButton1() {
        return cy.get(':nth-child(1) > .ml-3 > .border').should("exist")
    }
    availableButton2() {
        return cy.get(':nth-child(2) > .ml-3 > .border').should("exist")
    }
    allProductionSupplyTasks() {
        return cy.get(':nth-child(2) > .ml-3 > .border').should("exist")
    }
    myProductionSupplyTasks() {
        return cy.get('.mat-menu-content > :nth-child(2)').should("exist")
    }
    allstatus() {
        return cy.get('.mat-menu-content > :nth-child(1)').should("exist")
    }
    availableStatus() {
        return cy.get('.mat-menu-content > :nth-child(2)').should("exist")
    }
    notStartedStatus() {
        return cy.get('.mat-menu-content > :nth-child(3)').should("exist")
    }
    inProcessingStatus() {
        return cy.get('.mat-menu-content > :nth-child(4)').should("exist")
    }
    completedStatus() {
        return cy.get('.mat-menu-content > :nth-child(5)').should("exist")
    }
    cancelledStatus() {
        return cy.get('.mat-menu-content > :nth-child(6)').should("exist")
    }
}
export default SupplyToProductionTask;