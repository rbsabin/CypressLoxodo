///<reference types="Cypress"/>

class AllItem {

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
  cancelButton(){
    return cy.get('.mat-button-wrapper > .text-muted').should("exist")
  }
  cancelConfirmButton(){
    return cy.get('.swal2-confirm').should("exist");
  }
  addNewItemTitle(){
    return cy.get('#mat-dialog-title-1 > .fs-14').should("exist")
  }
  itemInformationtext(){
    return cy.get('#cdk-step-label-0-0').should("exist")
  }
  uomConversionText(){
    return cy.get('#cdk-step-label-0-1').should("exist")
  }
  uomCharacteristicsText(){
    return cy.get('#cdk-step-label-0-2').should("exist")
  }
  itemInformationmodule1(){
    return cy.get('.col').should("exist")
  }
  itemInformationmodule2(){
    return cy.get('.form-classic > :nth-child(2) > :nth-child(1)').should("exist")
  }
  itemInformationmodule3(){
    return cy.get('.form-classic > :nth-child(2) > :nth-child(2)').should("exist")
  }
  importDropDownitem1(){
    return cy.get('.mat-menu-content > :nth-child(1)').should("exist")
  }
  importDropDownitem2(){
    return cy.get('.mat-menu-content > :nth-child(2)').should("exist")
  }
  importDropDownitem3(){
    return cy.get('.mat-menu-content > :nth-child(3)').should("exist")
  }
  importDropDownitem4(){
    return cy.get('.mat-menu-content > :nth-child(4)').should("exist")
  }
itemCodeInputBox(){
  return cy.get('.col > :nth-child(1) > .form-control').should("exist")
}
itemNameInputBox(){
  return cy.get('.col > :nth-child(2) > .form-control').should("exist")
}
baseUomDropDown(){
  return cy.get(':nth-child(2) > .form-group > .col-form-label').should("exist")
}
baseUomDropDowInput(){
  return cy.get(':nth-child(2) > .form-group > .col-md-8 > .form-control').should("exist")
}
baseUomDropDowInputOPtion() {
  return cy
    .get(":nth-child(2) > .form-group > .col-md-8 > .form-control option")
    .should("exist");
}
itemInformationProceedButton(){
  return cy.get('.mat-dialog-actions > .ng-star-inserted').should("exist")
} 
 uomCOnversionProceedButton(){
  return cy.get('.mat-dialog-actions > .ng-star-inserted').should("exist")
}
uomCharacteristicsAddButton(){
  return cy.get('.btn-primary').should("exist")
}


}
export default AllItem;