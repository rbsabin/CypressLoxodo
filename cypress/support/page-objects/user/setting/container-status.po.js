/// <reference types="Cypress" />
class ContainerStatus {
  nameColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(1)').should('exist')
  }

  inboundOutboundColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(2)').should('exist');
  }

  availableToLoadColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(3)').should('exist')
  }

  actionColumn() {
    return cy.get('[style="width: 60px;"]').should('exist');
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
    return cy.get('tbody > tr td:nth-child(4) > div')
  }

  editIcon(row){
    return cy.get('tbody > tr').eq(row).find('td').eq(3).find('[mattooltip="Edit"]')
  }

  
  deleteIcon(row){
    return cy.get('tbody > tr').eq(row).find('td').eq(3).find('.text-danger')
  }

  //container status modal
  modal() {
    return cy.get('.mat-dialog-container');
  }

  title() {
    return cy.get('#mat-dialog-title-0 > .fs-14').should('exist');
  }

  titleIcon() {
    return cy.get('#mat-dialog-title-0 > .fs-14').should('exist')
  }

  crossIcon() {
    return cy.get('.mat-button-wrapper > .text-muted').should('exist')
  }

  nameLabel() {
    return cy.get(':nth-child(1) > .col-form-label').should('exist')
  }
  nameInput() {
    return cy.get(':nth-child(1) > .col-md-9 > input').should('exist')
  }

  inboundOutboundLabel() {
    return cy.get(':nth-child(2) > .col-form-label').should('exist')
  }

  inboundOutboundInput() {
    return cy.get(':nth-child(2) > .col-md-9 > select').should('exist')
  }

  availableToLoadlabel() {
    return cy.get(':nth-child(3) > .col-form-label').should('exist')
  }

  availableToLoadInput() {
    return cy.get(':nth-child(3) > .col-md-9 > select').should('exist')
  }


  cancelButton() {
    return cy.get('.btn-default').should('exist')
  }

  addButton() {
    return cy.get('.btn-primary').should('exist')
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

export default ContainerStatus