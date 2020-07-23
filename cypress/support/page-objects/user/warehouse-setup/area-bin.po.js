///<reference types="Cypress"/>
class AreaBin{
  warehouseSelect(){
    return cy.get('.dropdown > .nav-link > .nav-item-title').should('exist')
  }

  addBinAndArea(){
    return cy.get('.zone-nav-list-wrap > .text-right > .btn').should('exist')
  }

  body(){
    return cy.get('body')
  }
  
  //table 
  table() {
    return cy.get('table').should('exist')
  }

  noRecords(){
    return cy.get('.empty-state-content > .mb-3').should('exist')
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
  
  binName(row){
    return this.tableRow().eq(row).find('td').eq(3)
  }
  
  
  
  threeDots(row) {   //for area
    return cy.get('tbody > tr > td').find('button[mattooltip="Options"]').eq(row)
  }
  
  threeDotEditButton() { //for area
    return cy.get('.mat-menu-content > :nth-child(1)').should('exist')
  }
  
  threeDotDeleteButton() {  //for area
    return cy.get('.mat-menu-content > :nth-child(2)').should('exist')
  }

  editButton(row){ //for bin
    return cy.get('tbody').find('.table-accordion-header').eq(row).find('td').eq(8).find('button[mattooltip="Edit"]').should('exist')
  }


  deleteButton(row){ //for bin
    return cy.get('tbody').find('.table-accordion-header').eq(row).find('td').eq(8).find('.text-danger').should('exist')
  }



  
  
  
  //add Area & Bin 
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
  
  configTableColumnData(rowNumber,columnNumber){
    return this.configTableRow().eq(rowNumber).find('td').eq(columnNumber)
  }

  areaButton(){
    return cy.get('.zone-nav-list-wrap > .text-right > .btn').should('exist')
  }

  binButton(){
    return cy.get('.zone-nav-list-wrap > .text-right > .btn')
  }
  
  cancelButton(){
    return cy.get('.btn-default').should('exist')
  }
  
  cancelPopup(){
   return  cy.get('.swal2-popup').should('exist')
  }
  
  generateButton(){
    return cy.get('.btn-primary').should('exist')
  }
  
  areaPreview(){
    return cy.get(':nth-child(2) > .card-levels').should('exist')
  }

  binPreview(){
    return cy.get(':nth-child(4) > .card-levels').should('exist')
  }
  
  backButton(){
    return cy.get('.btn-default').should('exist')
  }
  
  finishAndSaveButton(){
    return cy.get('.btn-primary').should('exist');
  }
  
  //edit bin modal
  editModal() {
    return cy.get('.mat-dialog-container');
  }
  
  editModalTitle() {
    return cy.get('.fs-14').should('exist')
  }
  
  titleIcon() {
    return cy.get('#mat-dialog-title-0 > :nth-child(1) > .fa').should('exist')
  }
  
  crossIcon() {
    return cy.get('.mat-button-wrapper > .text-muted').should('exist')
  }

  binInformationButton(){
    return cy.get('#mat-tab-label-1-0').should('exist')
  }

  ladgerButton(){
    return cy.get('#mat-tab-label-1-1').should('exist')
  }

  
  
  barCodeLabel() {
    return cy.get(':nth-child(1) > .col-form-label').should('exist')
  }
  barCodeInput() {
    return cy.get('input[formcontrolname="barcode"]').should('exist')
  }
  
  nameLabel() {
    return cy.get(':nth-child(2) > .col-form-label').should('exist')
  }
  nameInput() {
    return cy.get('input[formcontrolname="name"]').should('exist')
  }
  
  typeLabel() {
    return cy.get(':nth-child(4) > .col-form-label').should('exist')
  }
  typeInput() {
    return cy.get('select[formcontrolname="type"]').should('exist')
  }
  
  typeOptions(){
    return cy.get('select[formcontrolname="type"] > option').should('exist')
  }

  pickSeqlabel(){
    return cy.get(':nth-child(5) > .col-form-label').should('exist')

  }
  
  pickSeqInput(){
    return cy.get('input[formcontrolname="pick_seq"]').should('exist')

  }

  putSeqlabel(){
    return cy.get(':nth-child(6) > .col-form-label').should('exist')

  }
  
  putSeqInput(){
    return cy.get('input[formcontrolname="put_seq"]').should('exist')

  }

  heightLabel(){
    return cy.get('[formgroupname="height"] > .col-form-label').should('exist')
  }

  heightInput(){
    return cy.get('[formgroupname="height"] > .col-md-9 > .d-flex > :nth-child(1) > input').should('exist')
  }

  widthLabel(){
    return cy.get('[formgroupname="width"] > .col-form-label').should('exist')
  }

  widthInput(){
    return cy.get('[formgroupname="width"] > .col-md-9 > .d-flex > :nth-child(1) > input').should('exist')
  }

  lengthLabel(){
    return cy.get('[formgroupname="length"] > .col-form-label').should('exist')
  }

  lengthInput(){
    return cy.get('[formgroupname="length"] > .col-md-9 > .d-flex > :nth-child(1) > input').should('exist')
  }

  heightUom(){
    return cy.get('[formgroupname="height"] [formcontrolname="uom"]').should('exist')
  }

  lengthUom(){
    return cy.get('[formgroupname="length"] [formcontrolname="uom"]').should('exist')
  }

  widthUom(){
    return cy.get('[formgroupname="width"] [formcontrolname="uom"]').should('exist')
  }

  
  lengthClassUomOptions() {
    return cy.get('[formgroupname="length"] [formcontrolname="uom"] option').should('exist')
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



  //For bin submenu only
  editIcon(row){
    return cy.get('tbody').find('.table-accordion-header').eq(row).find('td').eq(8).find('[mattooltip="Edit"]')
  }

  accordionIcon(row){
    return cy.get('tbody').find('.table-accordion-header').eq(row).find('td').eq(8).find('.table-accordion-btn')
  }
  
  
}  

export default AreaBin