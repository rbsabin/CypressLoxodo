///<reference types="Cypress"/>

class ProductionRequest {
    titleBar() {
        return cy.get(".m0").should("exist");
    }
    searchIcon() {
        return cy.get('#mat-input-8').should("exist");
    }
    importButton() {
        return cy.get('.d-none > .border').should("exist");

    }
    addButton() {
        return cy.get('.btn-success').should("exist");
    }

    statusButton() {
        return cy.get('.ml-3 > .border').should("exist")
    }
    //status buttons
allStatus(){
    return cy.get('.mat-menu-content > :nth-child(1)').should("exist")
}
notStartedStatus(){
    return cy.get('.mat-menu-content > :nth-child(2)').should("exist")
}
supplyToProductionStatus(){
    return cy.get('.mat-menu-content > :nth-child(3)').should("exist")
}
receiveFromProductionStatus(){
    return cy.get('.mat-menu-content > :nth-child(4)').should("exist")
}
completedStatus(){
    return cy.get('.mat-menu-content > :nth-child(5)').should("exist")
}
cancelledStatus(){
    return cy.get('.mat-menu-content > :nth-child(6)').should("exist")
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
    newProdcutionRequestText() {
        return cy.get('#mat-dialog-title-0 > .fs-14').should("exist");
    }
    productionRequestnformationTab1() {
        return cy.get('#cdk-step-label-0-0').should("exist");
    }
    outputItemsTab2() {
        return cy.get('#cdk-step-label-0-1').should("exist");
    }
    inputItemsTab3() {
        return cy.get('#cdk-step-label-0-2').should("exist");
    }
    closeButton() {
        return cy.get('.btn-success > .mat-button-wrapper > .mat-icon').should("exist");
    }
    nextButton() {
        return cy.get('.mat-dialog-actions > :nth-child(3)').should("exist");
    }
    cancelAddButton() {
        return cy.get('.mat-dialog-actions > .d-inline-block').should("exist");
    }
    productionOrderNumber() {
        return cy.get(':nth-child(1) > .form-group > .col-form-label').should("exist");
    }
    startDate() {
        return cy.get(':nth-child(2) > :nth-child(1) > .col-form-label').should("exist");
    }
    endDate() {
        return cy.get(':nth-child(2) > .col-form-label').should("exist");
    }
    importPrText(){
        return cy.get('.fs-18').should("exist")
    }
    uploadTab1(){
        return cy.get('#cdk-step-label-0-0').should("exist")
    }
    reviewAndCompleteTab2(){
        return cy.get('#cdk-step-label-0-1').should("exist")
    }
    downloadButton(){
        return cy.get('#cdk-step-label-0-1').should("exist")
    }
    uploadButton(){
        return cy.get('.row > :nth-child(2) > .d-block').should("exist")
    }
    cancelImportButton(){
        return cy.get('.btn-default').should("exist")
    }
    closeButton(){
        return cy.get('.position-abs > .mat-icon-button').should("exist")
    }
    nextButton(){
        return cy.get('.btn-primary').should("exist")
    }
    cancelConfirmButton(){
        return cy.get('.swal2-confirm').should("exist")
    }


}
export default ProductionRequest;