///<reference types='Cypress'/>
 class TransportationType{
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
  serviceIdColumn() {
    return cy.get('thead > :nth-child(1) > :nth-child(1)').should('exist')
  }

  serviceNameColumn() {
    return cy.get('thead > :nth-child(1) > :nth-child(2)').should('exist');
  }

  carrierCodeColumn() {
    return cy.get('thead > :nth-child(1) > :nth-child(3)').should('exist')
  }

  carrierNameColumn() {
    return cy.get('thead > :nth-child(1) > :nth-child(4)').should('exist')
  }

  statusColumn() {
    return cy.get('thead > :nth-child(1) > :nth-child(5)')
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
    return cy.get('tbody > tr td:nth-child(6) > div')
  }

  editIcon(row){
    return cy.get('tbody > tr').eq(row).find('td').eq(5).find('[mattooltip="Edit"]')
  }

  
  deleteIcon(row){
    return cy.get('tbody > tr').eq(row).find('td').eq(4).find('.text-danger')
  }

  //User Group modal
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

  serviceIdLabel() {
    return cy.get(':nth-child(1) > :nth-child(1) > .form-group > .col-form-label').should('exist')
  }
  serviceIdInput() {
    return cy.get(':nth-child(1) > :nth-child(1) > .form-group > .col-md-8 > input').should('exist')
  }

  servieceNameLable() {
    return cy.get(':nth-child(1) > :nth-child(2) > .form-group > .col-form-label').should('exist')
  }
  serviceNameInput() {
    return cy.get(':nth-child(1) > :nth-child(2) > .form-group > .col-md-8 > input').should('exist')
  }

  carrierCodeLabel() {
    return cy.get(':nth-child(2) > :nth-child(1) > .form-group > .col-form-label').should('exist')
  }
  carrierCodeInput() {
    return cy.get(':nth-child(2) > :nth-child(1) > .form-group > .col-md-8 > input').should('exist')
  }

  carrierNameLable() {
    return cy.get(':nth-child(2) > :nth-child(2) > .form-group > .col-form-label').should('exist')
  }
  carrierNameInput() {
    return cy.get(':nth-child(2) > :nth-child(2) > .form-group > .col-md-8 > input').should('exist')
  }

  statusLabel() {
    return cy.get(':nth-child(4) > .col-md-6 > .form-group > .col-form-label').should('exist')
  }

 
  statusInput() {
    return cy.get('#mat-slide-toggle-1-input').should('exist')
  }

  activeLabel() {
    return cy.get('.mat-slide-toggle-content').should('exist')
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

 export default TransportationType