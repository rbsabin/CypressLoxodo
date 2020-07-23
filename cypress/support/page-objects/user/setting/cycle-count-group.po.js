/// <reference types="Cypress"/>

class CycleCountGroup {
  idColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(1)').should('exist')
  }

  frequencyColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(2)').should('exist');
  }

  maxItemPerCountColumn() {
    return cy.get('.nowrap').should('exist')
  }

  actionColumn() {
    return cy.get('[style="width:40px;"]')
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
    return cy.get('tbody > tr').eq(row).find('td').eq(4).find('.text-danger')
  }

  //cycle count group modal
  modal() {
    return cy.get('.mat-dialog-container');
  }

  title() {
    return cy.get('#mat-dialog-title-0 > .fs-14').should('exist');
  }

  titleIcon() {
    return cy.get('#mat-dialog-title-0 > :nth-child(1) > .fa').should('exist')
  }

  crossIcon() {
    return cy.get('.mat-button-wrapper > .text-muted').should('exist')
  }

  idLabel() {
    return cy.get(':nth-child(1) > .col-form-label').should('exist')
  }
  idInput() {
    return cy.get('mat-dialog-container#mat-dialog-0 div:nth-child(1) > div > input').should('exist')
  }

  frequencyLabel() {
    return cy.get(':nth-child(2) > .col-form-label').should('exist')
  }

  frequencyInput() {
    return cy.get('mat-dialog-container#mat-dialog-0 select').should('exist')
  }

  maxCountlabel() {
    return cy.get(':nth-child(3) > .col-form-label').should('exist')
  }

  maxCountInput() {
    return cy.get('mat-dialog-container#mat-dialog-0 div:nth-child(3) > div > input').should('exist')
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


}

export default CycleCountGroup