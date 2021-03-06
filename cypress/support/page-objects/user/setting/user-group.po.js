///<reference types="Cypress"/>

class UserGroup{

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
  userGroupColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(1)').should('exist')
  }

  zoneColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(2)').should('exist');
  }

  membersColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(3)').should('exist')
  }

  dateCreatedColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(4)').should('exist')
  }

  statusColumn() {
    return cy.get('thead > .text-uppercase > :nth-child(5)').should('exist')
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

  nameLabel() {
    return cy.get(':nth-child(1) > .col-form-label').should('exist')
  }
  nameInput() {
    return cy.get(':nth-child(1) > .col-md-9 > input').should('exist')
  }

  stateLabel() {
    return cy.get(':nth-child(2) > .col-form-label').should('exist')
  }
  stateInput() {
    return cy.get(':nth-child(2) > .col-md-9 > select').should('exist')
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

export default UserGroup