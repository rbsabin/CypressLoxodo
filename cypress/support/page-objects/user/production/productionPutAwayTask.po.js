///<reference types="Cypress"/>

class ProductionPutAwayTask {
    titleBar() {
        return cy.get(".m0").should("exist");
    }
    button1(){
        return cy.get(':nth-child(1) > .ml-3 > .border').should("exist")
    }
    button2(){
        return cy.get(':nth-child(2) > .ml-3 > .border').should("exist")
    }
    adHocButton(){
        return cy.get('.col-auto > :nth-child(1)').should("exist")
    }
    directedButton(){
        return cy.get('.col-auto > :nth-child(2)').should("exist")
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

    allPutAwayTasks() {
        return cy.get('.mat-menu-content > :nth-child(1)').should("exist")
    }
    myPutAwayTasks() {
        return cy.get('.mat-menu-content > :nth-child(2)').should("exist")
    }
    allStatus() {
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
adHocPutAwayHeader(){
    return cy.get('#mat-dialog-title-0 > .fw-600').should("exist")
}
pleaseProceedToText(){
    return cy.get('.fs-20').should("exist")
}
receivingZone(){
    return cy.get('.bin-location-box > .fs-30').should("exist")
}
confirmButton(){
    return cy.get('#input0').should("exist")
}
adHocCancelButton(){
    return cy.get('.btn-default').should("exist")
}
createDirectedPutAwayHeader(){
    return cy.get('#mat-dialog-title-0').should("exist")
} 
directedAddButton(){
    return cy.get('.ml-auto > .btn').should("exist")
}
cancelDirectedButton() { 
    return cy.get('.btn-default').should("exist")
}
createRequestDirectedButton(){ 
    return cy.get('.btn-primary').should("exist")
    }
}

export default ProductionPutAwayTask;    