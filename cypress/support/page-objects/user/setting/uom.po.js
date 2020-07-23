/// <reference types="Cypress"/>

class UnitsOfMeasurement {
  codeColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(1)').should('exist')
  }

  nameColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(2)').should('exist');
  }

  uomClassColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(3)').should('exist')
  }

  primaryColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(4)').should('exist')
  }

  typeColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(5)').should('exist')
  }

  statusColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(6)').should('exist')
  }

  actionColumn() {
    return cy.get('[style="width:40px;"]').should('exist');
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
    return cy.get('tbody > tr td:nth-child(7) > div')
  }

  editIcon(row){
    return cy.get('tbody > tr').eq(row).find('td').eq(6).find('[mattooltip="Edit"]')
  }

  
  deleteIcon(row){
    return cy.get('tbody > tr').eq(row).find('td').eq(4).find('.text-danger')
  }

  //Uom modal
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

  codeLabel() {
    return cy.get(':nth-child(1) > .col-form-label').should('exist')
  }
  codeInput() {
    return cy.get(':nth-child(1) > .col-md-9 > input').should('exist')
  }

  nameLabel() {
    return cy.get(':nth-child(2) > .col-form-label').should('exist')
  }
  nameInput() {
    return cy.get(':nth-child(2) > .col-md-9 > input').should('exist')
  }

  uomClassLabel() {
    return cy.get(':nth-child(3) > .col-form-label').should('exist')
  }

  uomClassInput() {
    return cy.get(':nth-child(3) > .col-md-9 > select').should('exist')
  }


  primaryLabel() {
    return cy.get(':nth-child(4) > .col-form-label').should('exist')
  }

  primaryInput() {
    return cy.get(':nth-child(4) > .col-md-9 > select').should('exist')
  }


  typeLabel() {
    return cy.get(':nth-child(4) > .col-form-label').should('exist')
  }

  typeInput() {
    return cy.get(':nth-child(5) > .col-md-9 > select').should('exist')
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

export default UnitsOfMeasurement