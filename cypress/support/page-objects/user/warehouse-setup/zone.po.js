///<reference types="Cypress"/>
class Zone{
warehouseSelect(){
  return cy.get('.dropdown > .nav-link > .nav-item-title').should('exist')
}

addZone(){
  return cy.get('.zone-nav-list-wrap > .text-right > .btn').should('exist')
}

//table 
table() {
  return cy.get('table').should('exist')
}


tableHeader(){
  return cy.get('table > thead > tr').should('exist')
}

tableColumnHeader(columnNumber){
  return this.tableHeader().find('th').eq(columnNumber)
}

tableRow(){
  return cy.get('table > tbody > tr').should('exist')
}

tableColumnData(columnNumber){
  return this.tableRow().find('td').eq(columnNumber)
}

tableBody() {
  return cy.get('tbody').should('exist');
}

tableRow() {
  return cy.get('tbody > tr').should('exist');
}

zoneName(row){
  return this.tableRow().eq(row).find('td').eq(2)
}


actionButton(row) {
  return cy.get('tbody > tr').eq(row).find('td').eq(8).find('div > div:nth-child(2) > button')
}

editButton() {
  return cy.get('.mat-menu-content > :nth-child(1)').should('exist')
}

deleteButton() {
  return cy.get('.mat-menu-content > :nth-child(2)').should('exist')
}



//add zone modal
modalTitle(){
  return cy.get('.mat-dialog-content > .ff-theme > .mb-3 > .text-dark').should('exist')
}

configTable(){
  return cy.get('#cdk-step-content-2-0 > form > table').should('exist')
}

configTableHeader(){
  return cy.get('form > table > thead > tr').should('exist')
}

configTableColumnHeader(columnNumber){
  return this.configTableHeader().find('th').eq(columnNumber)
}

configTableRow(){
  return cy.get('form > table > tbody > tr').should('exist')
}

configTableColumnData(columnNumber){
  return this.configTableRow().find('td').eq(columnNumber)
}

cancelButton(){
  return cy.get('#cdk-step-content-0-0 > .ng-untouched.ng-star-inserted > :nth-child(2) > .btn-default').should('exist')
}

cancelPopup(){
 return  cy.get('.swal2-popup').should('exist')
}

generateButton(){
  return cy.get('.ng-star-inserted.ng-dirty > :nth-child(2) > .btn-primary').should('exist')
}

zonePreview(){
  return cy.get('.card-levels').should('exist')
}

backButton(){
  return cy.get('form.ng-untouched > :nth-child(2) > .btn-default').should('exist')
}

finishAndSaveButton(){
  return cy.get('form.ng-untouched > :nth-child(2) > .btn-primary').should('exist');
}

//edit zone modal
editModal() {
  return cy.get('.mat-dialog-container');
}

editModalTitle() {
  return cy.get('#mat-dialog-title-1 > .fs-14').should('exist')
}

titleIcon() {
  return cy.get('#mat-dialog-title-1 > :nth-child(1)').should('exist')
}

crossIcon() {
  return cy.get('.mat-button-wrapper > .text-muted').should('exist')
}

codeLabel() {
  return cy.get(':nth-child(1) > .col-form-label').should('exist')
}
codeInput() {
  return cy.get('input[formcontrolname="code"]').should('exist')
}

nameLabel() {
  return cy.get(':nth-child(2) > .col-form-label').should('exist')
}
nameInput() {
  return cy.get('input[formcontrolname="name"]').should('exist')
}

typeLabel() {
  return cy.get(':nth-child(3) > .col-form-label').should('exist')
}
typeInput() {
  return cy.get('select[formcontrolname="type"]').should('exist')
}

typeOptions(){
  return cy.get('select[formcontrolname="type"] > option').should('exist')
}

cancelEditProcessButton() {
  return cy.get('.btn-default').should('exist')
}

saveChangsButton() {
  return cy.get('.btn-primary').should('exist')
}

//delete popup
popUp() {
  return cy.get('.swal2-popup')
}
warningIcon() {
  return cy.get('.swal2-warning').should('exist')
}

areYouSure() {
  return cy.get('#swal2-title').should('exist')
}

warningMessage() {
  return cy.get('#swal2-content').should('exist')
}

closeButton() {
  return cy.get('.swal2-cancel').should('exist')
}

deleteConfirmButton() {
  return cy.get('.swal2-confirm').should('exist')
}


//toast message
toastError() {
  return cy.get('div.toast-error')
}

toastSuccess() {
  return cy.get('div.toast-success')
}

toastmessage() {
  return cy.get('.toast-message').should('exist')
}



}

export default Zone