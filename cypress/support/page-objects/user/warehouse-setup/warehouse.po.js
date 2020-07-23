///<reference types="Cypress"/>

class Warehouse {
  //title bar
  titleBarIcon() {
    return cy.get('h5 >span').should('exist');
  }

  titleBarTitleName() {
    return cy.get('h5').should('exist')
  }

  wizardButton() {
    return cy.get('.ml-auto > [type="button"]')
  }

  importButton() {
    return cy.get('.ml-auto > :nth-child(2)')
  }

  addWarehouseButton() {
    return cy.get('.btn-success')
  }



  //table

  table() {
    return cy.get('table').should('exist')
  }
  tableHead() {
    return cy.get('table > thead >tr').should('exist')
  }

  iconColumn() {
    return cy.get('thead > tr > :nth-child(1)').should('exist')
  }

  codeColumn() {
    return cy.get('thead > tr > :nth-child(2)').should('exist')
  }

  whsCodeColumn() {
    return cy.get('thead > tr > :nth-child(3)').should('exist')
  }

  nameColumn() {
    return cy.get('thead > tr > :nth-child(4)').should('exist')
  }

  pickTaskTypeColumn() {
    return cy.get('thead > tr > :nth-child(5)').should('exist')
  }

  batchFefoColumn() {
    return cy.get('thead > tr > :nth-child(6)').should('exist')
  }

  statusColumn() {
    return cy.get('thead > tr > :nth-child(7)').should('exist')
  }

  actionColumn() {
    return cy.get('thead > tr > :nth-child(8)').should('exist')
  }


  tableBody() {
    return cy.get('tbody').should('exist');
  }

  tableRow() {
    return cy.get('tbody > tr').should('exist');
  }

  warehouseName(row){
    return cy.get('tbody > tr').eq(row).find('td').eq(3)
  }


  actionButton(row) {
    return cy.get('tbody > tr').eq(row).find('td').eq(7).find('button')
  }

  editButton() {
    return cy.get('.mat-menu-content > :nth-child(1)').should('exist')
  }

  deleteButton() {
    return cy.get('.mat-menu-content > :nth-child(2)').should('exist')
  }


  //warehouse add modal
  modal() {
    return cy.get('.mat-dialog-container');
  }

  title() {
    return cy.get('#mat-dialog-title-0 > .fs-14').should('exist');
  }

  titleIcon() {
    cy.get('#mat-dialog-title-0 > :nth-child(1)')
  }

  crossIcon() {
    return cy.get('.mat-button-wrapper > .text-muted').should('exist')
  }

  codeLabel() {
    return cy.get(':nth-child(1) > .col-form-label').should('exist')
  }

  codeInput() {
    return cy.get("input[formcontrolname='code']").should('exist')
  }

  whsCodeLable() {
    cy.get(':nth-child(2) > .col-form-label').should('exist')
  }

  whsCodeInput() {
    return cy.get('input[formcontrolname="whs_code"]').should('exist')
  }
  nameLabel() {
    return cy.get(':nth-child(3) > .col-form-label').should('exist')
  }


  nameInput() {
    return cy.get('input[formcontrolname="name"]').should('exist')
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

  //warehouse edit modal
  pickTaskTypeLabel() {
    return cy.get(':nth-child(3) > :nth-child(1) > .col-form-label').should('exist')
  }

  pickTaskTypeSelect() {
    return cy.get('select[formcontrolname="pick_task_type"]')
  }

  pickOrderTypeLabel() {
    return cy.get(':nth-child(3) > :nth-child(2) > .col-form-label').should('exist')
  }

  pickOrderTypeSelect() {
    return cy.get('select[formcontrolname="pick_order_type"]')
  }

  serialValidationLabel() {
    return cy.get(':nth-child(3) > :nth-child(2) > .col-form-label').should('exist')
  }

  serialValidationSelect() {
    return cy.get('select[formcontrolname="serial_validation"]')
  }

  batchFifoLabel() {
    return cy.get('.col-md-8 > :nth-child(1) > :nth-child(1) > .fs-14').should('exist')
  }

  batchFifoSlider() {
    return cy.get('#mat-slide-toggle-1-input').should('exist')
  }

  crossZonePickingLabel() {
    return cy.get(':nth-child(1) > :nth-child(2) > .fs-14').should('exist')
  }

  crossZonePickingSlider() {
    return cy.get('#mat-slide-toggle-2 input').should('exist')
  }

  autoHandelSerialLabel() {
    return cy.get(':nth-child(2) > .col-md-6 > .fs-14').should('exist')
  }

  autoHandelSerialSlider() {
    return cy.get('#mat-slide-toggle-3 input').should('exist')
  }

  putAwayGenerationLabel() {
    return cy.get(':nth-child(5) > .form-group > .col-form-label').should('exist')
  }

  putAwayGenerationSelect() {
    return cy.get('select[formcontrolname="putaway_generate_type"]').should('exist')
  }

  shipingIntegrationLable() {
    return cy.get(':nth-child(7) > :nth-child(1) > .col-form-label').should('exist')
  }

  shipingIntegrationSelect() {
    return cy.get('select[formcontrolname="ship_integration"]').should('exist')
  }

  shipDirectlyFromPackinglabel() {
    return cy.get(':nth-child(7) > :nth-child(1) > .col-form-label').should('exist')
  }

  shipDirectlyFromPackingSlider() {
    return cy.get('#mat-slide-toggle-4 input').should('exist')
  }

  extIdLabel() {
    return cy.get('.form-classic.ng-untouched > :nth-child(1) > :nth-child(1) > .form-group > .text-muted').should('exist')
  }

  extIdInput() {
    return cy.get('input[formcontrolname="ext_id"]').should('exist')
  }

  companyNameLabel() {
    return cy.get(':nth-child(1) > :nth-child(2) > .form-group > .text-muted').should('exist')
  }
  companyNameInput() {
    return cy.get('input[formcontrolname="company_name"]').should('exist')
  }

  careoflabel() {
    return cy.get(':nth-child(1) > :nth-child(3) > .form-group > .text-muted').should('exist')
  }

  careOfInput() {
    return cy.get('input[formcontrolname="careof"]').should('exist')
  }

  address1Label() {
    return cy.get('mat-dialog-container#mat-dialog-1 div.form-classic.mt-2.mb-3.ng-untouched.ng-pristine.ng-valid > div:nth-child(2) > label').should('exist')
  }

  address1Input() {
    return cy.get('input[formcontrolname="address1"]').should('exist')
  }
  address2Label() {
    return cy.get('mat-dialog-container#mat-dialog-1 div.form-classic.mt-2.mb-3.ng-untouched.ng-pristine.ng-valid > div:nth-child(3) > label').should('exist')
  }

  address2Input() {
    return cy.get('input[formcontrolname="address2"]').should('exist')
  }
  address3Label() {
    return cy.get('mat-dialog-container#mat-dialog-1 div:nth-child(4) > label').should('exist')
  }

  address3Input() {
    return cy.get('input[formcontrolname="address3"]').should('exist')
  }
  address4Label() {
    return cy.get('mat-dialog-container#mat-dialog-1 div:nth-child(5) > label').should('exist')
  }

  address4Input() {
    return cy.get('input[formcontrolname="address4"]').should('exist')
  }

  cityLabel() {
    return cy.get(':nth-child(6) > :nth-child(1) > .form-group > .text-muted').should('exist')
  }

  cityInput() {
    return cy.get('input[formcontrolname="city"]').should('exist')
  }

  stateLabel() {
    return cy.get(':nth-child(6) > :nth-child(2) > .form-group > .text-muted').should('exist')
  }

  stateInput() {
    return cy.get('input[formcontrolname="state"]').should('exist')
  }

  zipCodeLabel() {
    return cy.get(':nth-child(6) > :nth-child(3) > .form-group > .text-muted').should('exist')
  }

  zipCodeInput() {
    return cy.get('input[formcontrolname="zipcode"]').should('exist')
  }

  countryLabel() {
    return cy.get(':nth-child(6) > :nth-child(4) > .form-group > .text-muted').should('exist')
  }

  countryInput() {
    return cy.get('input[formcontrolname="country"]').should('exist')
  }

  phoneNoLabel() {
    return cy.get(':nth-child(6) > :nth-child(5) > .form-group > .text-muted').should('exist')
  }

  phoneNoInput() {
    return cy.get('input[formcontrolname="phone_number"]').should('exist')
  }

  emailAddressLabel() {
    return cy.get(':nth-child(6) > :nth-child(6) > .form-group > .text-muted').should('exist')
  }

  emailAddressInput() {
    return cy.get('input[formcontrolname="email"]').should('exist')
  }

  saveChangesButton() {
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


  // warehouse import section
  importModel(){
    return cy.get('#mat-dialog-0').should('exist')
  }

  uploadLabel(){
    return cy.get('.label-btn').should('exist')
  }

  downloadCsvButton(){
    return cy.get(':nth-child(1) > .btn').should('exist')
  }

  uploadCsvButton(){
    return cy.get('.row > :nth-child(2) > .d-block').should('exist')
  }

  preformattedCsvText(){
    return cy.get('.row > :nth-child(1) > .mt-2').should('exist')
  }

  importCancelButton(){
    return cy.get('.btn-default').should('exist')
  }

  importNextButton(){
    return cy.get('.btn-primary').should('exist')
  }

}

export default Warehouse