///<reference types="Cypress"/>
class BoxType {
  //title bar
  titleBarIcon() {
    return cy.get('h5 .mr-2').should('exist');
  }

  titleBarTitleName() {
    return cy.get('h5.m0.ellipsis').should('exist')
  }

  titleBarSearchBar() {
    return cy.get('input#mat-input-8').should('exist')
  }

  titleBarAddButton() {
    return cy.get('.d-none > .border').should('exist')
  }

  //list
  nameColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(1)').should('exist')
  }

  dimensionColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(2)').should('exist');
  }

  maxWeightColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(3)').should('exist')
  }

  volumeColumn() {
    return cy.get('.text-uppercase > :nth-child(4)').should('exist')
  }

  actionColumn() {
    return cy.get('[style="width:40px;"]').should('exist')
  }

  table() {
    return cy.get('.table-responsive').should('exist');
  }

  tableBody() {
    return cy.get('tbody').should('exist');
  }

  tableRow() {
    return cy.get('tbody > tr').should('exist');
  }

  actionButtons(){
    return cy.get('tbody > tr td:nth-child(5) > div')
  }

  editIcon(row){
    return cy.get('tbody > tr').eq(row).find('td').eq(4).find('[mattooltip="Edit"]')
  }

  
  deleteIcon(row){
    return cy.get('tbody > tr').eq(row).find('td').eq(4).find('.text-danger')
  }

  //box type model
  modal(){
   return cy.get('.mat-dialog-container');
  }

  title() {
    return cy.get('#mat-dialog-title-0 > .fs-14').should('exist');
  }

  titleIcon() {
    return cy.get('#mat-dialog-title-0 > :nth-child(1) > .mr-2').should('exist')
  }

  crossIcon() {
    return cy.get('.mat-button-wrapper > .text-muted').should('exist')
  }

  nameLabel() {
    return cy.get(':nth-child(1) > .col-form-label').should('exist')
  }

  nameInput() {
    return cy.get("input[formcontrolname='name']").should('exist')
  }

  heightLabel() {
    return cy.get('[formgroupname="height"] > .col-form-label').should('exist')
  }
  heightInput() {
    return cy.get('[formgroupname="height"] > .col-md-9 > .d-flex > :nth-child(1) > input').should('exist')
  }
  heightUom() {
    return cy.get('[formgroupname="height"] > .col-md-9 > .d-flex > :nth-child(2) > select').should('exist')
  }

  lengthClassUomOptions() {
    return cy.get('[formgroupname="height"] > .col-md-9 > .d-flex > :nth-child(2) > select option').should('exist')
  }

  lengthLabel() {
    return cy.get('[formgroupname="length"] > .col-form-label').should('exist')
  }
  lengthInput() {
    return cy.get('[formgroupname="length"] > .col-md-9 > .d-flex > :nth-child(1) > input').should('exist')
  }

  lengthUom() {
    return cy.get('[formgroupname="length"] > .col-md-9 > .d-flex > :nth-child(2) > select').should('exist')
  }


  widthLabel() {
    return cy.get('[formgroupname="width"] > .col-form-label').should('exist')
  }
  widthInput() {
    return cy.get('[formgroupname="width"] > .col-md-9 > .d-flex > :nth-child(1) > input').should('exist')
  }
  widthUom() {
    return cy.get('[formgroupname="width"] > .col-md-9 > .d-flex > :nth-child(2) > select').should('exist')
  }


  maxWeightLabel() {
    return cy.get('[formgroupname="max_weight"] > .col-form-label').should('exist')
  }

 
  maxWeightInput() {
    return cy.get('[formgroupname="max_weight"] > .col-md-9 > .d-flex > :nth-child(1) > input').should('exist')
  }

  maxWeightUom() {
    return cy.get('[formgroupname="max_weight"] > .col-md-9 > .d-flex > :nth-child(2) > select').should('exist')
  }

  weightClassUomOptions() {
    return cy.get('[formgroupname="max_weight"] > .col-md-9 > .d-flex > :nth-child(2) > select option').should('exist')
  }

  volumeLabel() {
    return cy.get('[formgroupname="volume"] > .col-form-label').should('exist')
  }
  volumeInput() {
    return cy.get('[formgroupname="volume"] > .col-md-9 > .d-flex > :nth-child(1) > input').should('exist')
  }

  volumeUom() {
    return cy.get('[formgroupname="volume"] > .col-md-9 > .d-flex > :nth-child(2) > select').should('exist')
  }

  volumeClassUomOptions() {
    return cy.get('[formgroupname="volume"] > .col-md-9 > .d-flex > :nth-child(2) > select option').should('exist')
  }


  cancelButton() {
    return cy.get('.btn-default').should('exist')
  }

  addButton() {
    return cy.get('.btn-primary').should('exist')
  }

  toastError() {
    return cy.get('div.toast-error')
  }

  toastSuccess() {
    return cy.get('div.toast-success')
  }

  toastmessage() {
    return cy.get('.toast-message').should('exist')
  }

  //delete popup
  popUp(){
    return cy.get('.swal2-popup')
  }
  warningIcon(){
    return cy.get('.swal2-warning').should('exist')
  }

  areYouSure(){
    return cy.get('#swal2-title').should('exist')
  }

  warningMessage(){
    return cy.get('#swal2-content').should('exist')
  }

  closeButton(){
    return cy.get('.swal2-cancel').should('exist')
  }

  deleteButton(){
    return cy.get('.swal2-confirm').should('exist')
  }

}

export default BoxType