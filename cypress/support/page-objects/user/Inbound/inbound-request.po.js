///<reference types="Cypress"/>


class InboundRequest {

  warehouseSelect() {
    return cy.get('.dropdown > .nav-link > .nav-item-title').should('exist')
  }

  addBinAndArea() {
    return cy.get('.zone-nav-list-wrap > .text-right > .btn').should('exist')
  }

  body() {
    return cy.get('body')
  }

  //title bar
  titleBarIcon() {
    return cy.get('.m0 > .flipX').should('exist');
  }

  titleBarTitleName() {
    return cy.get('h5').should('exist')
  }

  titleBarStatusButton() {
    return cy.get('.ml-3 > .border')
  }

  titleBarSearchBar() {
    return cy.get('input#mat-input-8').should('exist')
  }

  titleBarImportButton() {
    return cy.get('.ml-auto > :nth-child(2)')
  }

  titleBarAddButton() {
    return cy.get('.btn-success')
  }

  // content area
  filterButton() {
    return cy.get('.btn-group > .filterOptions-btn').should('exist')
  }

  filterDropDown() {
    return cy.get('.px-2').should('exist')
  }

  noRecords() {
    return cy.get('.empty-state-content > .mb-3').should('exist')
  }


  //table 
  table() {
    return cy.get('#wrapper div.page-content.ng-star-inserted > div table').should('exist')
  }


  tableHeader() {
    return cy.get('table > thead > tr').should('exist')
  }

  tableColumnHeader(columnNumber) {
    return this.tableHeader().find('th').eq(columnNumber)
  }

  tableRow() {
    return cy.get('table > tbody > tr').should('exist')
  }

  tableColumnData(columnNumber) {
    return this.tableRow().find('td').eq(columnNumber)
  }

  tableBody() {
    return cy.get('tbody').should('exist');
  }

  tableRow() {
    return cy.get('tbody > tr').should('exist');
  }

  poid(row) {
    return cy.get('tbody .table-accordion-header').eq(row).find('td.text-dark.cursor-pointer').eq(0).find('strong')
  }

  poText(){
    return cy.get(' tbody > tr > td.text-dark.cursor-pointer > strong').should('exist')
  }

  actionButtons() {
    return cy.get('tbody > tr td:nth-child(5) > div')
  }

  editIcon(row) {
    return cy.get('tbody > tr').eq(row).find('td').eq(10).find('[mattooltip="Edit"]')
  }

  poid(row) {
    return cy.get('tbody > tr').eq(row).find('td').eq(0).find('strong')
  }


  cancelIcon(row) {
    return cy.get('tbody > tr').eq(row).find('td').eq(10).find('.text-danger')
  }

  accrodionIcon(row) {
    return cy.get('tbody > tr').eq(row).find('td').eq(10).find('.table-accordion-btn')
  }

  releaseIcon(row) {
    return cy.get('tbody > tr').eq(row).find('td').eq(9).find('.btn')
  }


  //release Modal
  releaseModal(){
    return cy.get('.mat-dialog-container')
  }

  releaseCancelButton(){
    return cy.get('.btn-default').should('exist')
  }

  receivingZoneSelect(){
    return cy.get('.animatedFast > select').should('exist')
  }

  receivingZoneSelectOption(){
    return cy.get('.animatedFast > select option').should('exist')
  }

  generateReceiveTaskButton(){
    return cy.get('.mat-dialog-actions > .btn-primary').should('exist')
  }

  



  //Add request modal
  modal() {
    return cy.get('#mat-dialog-0').should('exist')
  }

  modalTitle() {
    return cy.get('#mat-dialog-title-0 > .fs-14').should('exist')
  }

  crossIcon() {
    return cy.get('.mat-button-wrapper > .text-muted').should('exist')
  }

  inboundDeliveryText() {
    return cy.get('mat-step-header[tabindex="0"]').should('exist')
  }

  addressText() {
    return cy.get('mat-step-header[aria-posinset="2"]').should('exist')
  }

  lineItemsText() {
    return cy.get('mat-step-header[aria-posinset="3"]').should('exist')
  }

  externalIdLabel() {
    return cy.get(':nth-child(1) > :nth-child(1) > .col-form-label').should('exist')
  }

  externalIdInput() {
    return cy.get(':nth-child(1) > :nth-child(1) > .col-md-8 > input').should('exist')
  }

  poIdLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(1) > div:nth-child(2) > label').should('exist')
  }

  poIdInput() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(2) > div > input').should('exist')
  }
  customerOrderLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(1) > div:nth-child(3) > label').should('exist')
  }
  customerOrderInput() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(3) > div > input').should('exist')
  }

  supplierIdLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(1) > div:nth-child(4) > label').should('exist')
  }
  supplierIdInput() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(4) > div > input').should('exist')
  }

  descriptionLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(1) > div:nth-child(5) > label').should('exist')
  }
  descriptionInput() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(5) > div > input').should('exist')
  }

  deliveryOptionLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(1) > div:nth-child(6) > label').should('exist')
  }
  deleveryOptionInput() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(1) > div:nth-child(6) > div > input').should('exist')
  }

  transportationLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(2) > div:nth-child(1) > label').should('exist')
  }

  transportationSelect() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(1) > div > select').should('exist')
  }

  transportationSelectOptions() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(1) > div > select option').should('exist')
  }

  docDateLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(2) > div:nth-child(2) > label').should('exist')
  }

  docDateInput() {
    return cy.get('#mat-input-12').should('exist')
  }

  startDateLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(2) > div:nth-child(3) > label').should('exist')
  }

  startDateInput() {
    return cy.get('#mat-input-13').should('exist')
  }

  startDateCalander() {
    return cy.get(':nth-child(3) > .col-md-8 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button > .mat-button-wrapper > .mat-datepicker-toggle-default-icon').should('exist')
  }

  startDate() {
    return cy.get('div > mat-month-view > table > tbody > tr:nth-child(3) > td:nth-child(4)').should('exist');
  }

  calanderNextButton() {
    return cy.get('.mat-calendar-next-button').should('exist')
  }

  shipEndDateLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(2) > div:nth-child(4) > label').should('exist')
  }

  shipEndDateInput() {
    return cy.get('#mat-input-14').should('exist')
  }

  shipDateCalander() {
    return cy.get(':nth-child(4) > .col-md-8 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button').should('exist')
  }

  shipEndDate() {
    return cy.get('mat-month-view > table > tbody > tr:nth-child(5) > td:nth-child(5)')
  }

  warehouseIdLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(2) > div:nth-child(5) > label').should('exist')
  }

  warehouseIdSelect() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(5) > div > select')
  }

  warehouseIdSelectOptions() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(5) > div > select option')
  }

  trackingIdLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(2) > div:nth-child(6) > label').should('exist')
  }

  trackingIdInput() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(2) > div:nth-child(6) > div > input').should('exist')
  }

  nextButton() {
    return cy.get('.mat-dialog-actions > :nth-child(3)').should('exist')
  }

  shipingAddressLabel() {
    return cy.get('[formgroupname="shiptoaddress"] > .fs-16').should('exist')
  }

  supplierAddressLabel() {
    return cy.get('.billing_address_form_group > :nth-child(1) > .fs-16').should('exist')
  }

  shipingCompanyName() {
    return cy.get('div[formgroupname="shiptoaddress"] [formcontrolname="companyName"]').should('exist')
  }

  shipingCareOF() {
    return cy.get('div[formgroupname="shiptoaddress"] [formcontrolname="careOf"]').should('exist')
  }

  shipingEmailAddress() {
    return cy.get('div[formgroupname="shiptoaddress"] [formcontrolname="email"]').should('exist')
  }

  shipingPhoneNo() {
    return cy.get('div[formgroupname="shiptoaddress"] [formcontrolname="phone"]').should('exist')
  }

  shipingAddress1() {
    return cy.get('div[formgroupname="shiptoaddress"] [placeholder="Address 1"]').should('exist')
  }

  shipingAddress2() {
    return cy.get('div[formgroupname="shiptoaddress"] [placeholder="Address 2"]').should('exist')
  }

  shipingCity() {
    return cy.get('div[formgroupname="shiptoaddress"] [placeholder="City"]').should('exist')
  }

  shipingState() {
    return cy.get('div[formgroupname="shiptoaddress"] [placeholder="Region / State"]').should('exist')
  }

  shipingZipCode() {
    return cy.get('div[formgroupname="shiptoaddress"] [placeholder="Zip Code"]').should('exist')
  }

  shipingCountry() {
    return cy.get('div[formgroupname="shiptoaddress"] [placeholder="Country"]').should('exist')
  }



  supplierCompanyName() {
    return cy.get('div[formgroupname="billtoaddress"] [formcontrolname="companyName"]').should('exist')
  }

  supplierCareOF() {
    return cy.get('div[formgroupname="billtoaddress"] [formcontrolname="careOf"]').should('exist')
  }

  supplierEmailAddress() {
    return cy.get('div[formgroupname="billtoaddress"] [formcontrolname="email"]').should('exist')
  }

  supplierPhoneNo() {
    return cy.get('div[formgroupname="billtoaddress"] [formcontrolname="phone"]').should('exist')
  }

  supplierAddress1() {
    return cy.get('div[formgroupname="billtoaddress"] [placeholder="Address 1"]').should('exist')
  }

  supplierAddress2() {
    return cy.get('div[formgroupname="billtoaddress"] [placeholder="Address 2"]').should('exist')
  }

  supplierCity() {
    return cy.get('div[formgroupname="billtoaddress"] [placeholder="City"]').should('exist')
  }

  supplierState() {
    return cy.get('div[formgroupname="billtoaddress"] [placeholder="Region / State"]').should('exist')
  }

  supplierZipCode() {
    return cy.get('div[formgroupname="billtoaddress"] [placeholder="Zip Code"]').should('exist')
  }

  supplierCountry() {
    return cy.get('div[formgroupname="billtoaddress"] [placeholder="Country"]').should('exist')
  }

  //line items section

  lineItemsLabel() {
    return cy.get('.dialog-nomarginX > .d-flex > :nth-child(1)').should('exist')
  }

  itemAddButton() {
    return cy.get('.ml-auto > .btn').should('exist')
  }

  noItem() {
    return cy.get('.dialog-nomarginX > .empty-state > .empty-state-content > .mb-3').should('exist')
  }

  itemTable() {
    return cy.get('div.p-3.ng-star-inserted > table').should('exist')
  }




  itemCodeColumn() {
    return cy.get('thead > tr > :nth-child(1)').should('exist')
  }

  itemNameColumn() {
    return cy.get('thead > tr > :nth-child(2)').should('exist')
  }

  quantiryColumn() {
    return cy.get('thead > tr > :nth-child(3)').should('exist')
  }

  uomColumn() {
    return cy.get('thead > tr > :nth-child(4)').should('exist')
  }

  actionColumn() {
    return cy.get('thead > tr > :nth-child(5)').should('exist')
  }

  itemSearchInput() {
    return cy.get('#mat-input-15').should('exist')
  }

  lineItemOptionPanel() {
    return cy.get('#mat-autocomplete-2').should('exist')
  }

  itemOption() {
    return cy.get('div.mat-autocomplete-panel > mat-option:nth-of-type(1)').should('exist')
  }

  itemQuantity() {
    return cy.get('.table-accordion-header > :nth-child(3) > .form-control').should('exist')
  }

  saveButton() {
    return cy.get('.mat-dialog-actions > .d-inline-block').should('exist')
  }

  backButton() {
    return cy.get('.mat-dialog-actions > :nth-child(2)')
  }

  searchItem(random) {
    this.itemSearchInput().type(random.stringLowercase(1))
    cy.wait(500)
    this.lineItemOptionPanel().then($panel => {
      if ($panel.find('.mat-option').length > 0) {
        this.itemOption().click()

      } else {
        this.itemSearchInput().clear()
        this.searchItem(random)
      }
    })
    // if(this.lineItemOptionPanel().length>0){
    //   cy.log(random.string(1))
    //   // this.itemOption().click()
    // }else{
    //   this.itemSearchInput().clear()
    //   // this.searchItem(random)
    // }
  }



  //Edit Modal
  externalIdLabel() {
    return cy.get(':nth-child(1) > :nth-child(1) > .col-form-label').should('exist')
  }

  externalIdInput() {
    return cy.get(':nth-child(1) > :nth-child(1) > .col-md-8 > input').should('exist')
  }

  poIdLabel() {
    return cy.get('#cdk-step-content-0-0 div:nth-child(1) > div:nth-child(2) > label').should('exist')
  }

  editExternalIdLabel() {
    return cy.get(':nth-child(1) > :nth-child(1) > .col-form-label').should('exist')
  }

  editExternalIdInput() {
    return cy.get(':nth-child(1) > :nth-child(1) > .col-md-8 > input').should('exist')
  }

  editPoIdLabel() {
    return cy.get(':nth-child(1) > :nth-child(2) > .col-form-label').should('exist')
  }

  editPoIdInput() {
    return cy.get(':nth-child(2) > .col-md-8 > input').should('exist')
  }
  editTransportationSelect() {
    return cy.get(':nth-child(2) > :nth-child(1) > .col-md-8 > select').should('exist')
  }

  editTransportationSelectOption() {
    return cy.get(':nth-child(2) > :nth-child(1) > .col-md-8 > select option').should('exist')
  }

  editDocDateLabel() {
    return cy.get(':nth-child(2) > :nth-child(2) > .col-form-label').should('exist')
  }

  editDocDateInput() {
    return cy.get('#mat-input-12').should('exist')
  }

  editStartDateLabel() {
    return cy.get(':nth-child(2) > :nth-child(3) > .col-form-label').should('exist')
  }

  editStartDateInput() {
    return cy.get('#mat-input-13').should('exist')
  }

  editStartDateCalander() {
    return cy.get(':nth-child(3) > .col-md-8 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button > .mat-button-wrapper > .mat-datepicker-toggle-default-icon').should('exist')
  }

  editCalanderNextButton() {
    return cy.get('.mat-calendar-next-button').should('exist')
  }

  editStartDate() {
    return cy.get('div > mat-month-view > table > tbody > tr:nth-child(4) > td:nth-child(4)').should('exist');
  }

  editShipEndDateLabel() {
    return cy.get(':nth-child(2) > :nth-child(4) > .col-form-label').should('exist')
  }

  editShipEndDateInput() {
    return cy.get('#mat-input-14').should('exist')
  }

  editShipEndDateCalander() {
    return cy.get(':nth-child(4) > .col-md-8 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button').should('exist')
  }

  editShipEndDate() {
    return cy.get('mat-month-view > table > tbody > tr:nth-child(5) > td:nth-child(4)')
  }
  editWarehouseIdLabel() {
    return cy.get(':nth-child(2) > :nth-child(5) > .col-form-label').should('exist')
  }

  editAddressPanelLabel() {
    return cy.get('#mat-tab-label-1-1').should('exist')
  }

  editShipingEmailAddress() {
    return cy.get('[formgroupname="shiptoaddress"] > :nth-child(4) > .col-md-8 > .form-control').should('exist')
  }

  editSupplierPhoneNo() {
    return cy.get('.billing_address_form_group > :nth-child(5) > .col-md-8 > .form-control').should('exist')
  }

  editLineItemPanelLabel() {
    return cy.get('#mat-tab-label-1-2').should('exist')
  }


  editItemQuantityInput() {
    return cy.get('.table-accordion-header > :nth-child(3) > .form-control').should('exist')
  }

 

  



  informationPanelLabel() {
    return cy.get('#mat-tab-label-1-0').should('exist')
  }

  addressPanelLabel() {
    return cy.get('#mat-tab-label-1-1').should('exist')
  }

  lineItemPanelLabel() {
    return cy.get('#mat-tab-label-1-2').should('exist')
  }

  saveButtonInEditPanel() {
    return cy.get('.mat-dialog-actions > .btn-primary').should('exist')
  }




  //confirm popup (Used in multiple places)
  popUp() {
    return cy.get('.swal2-popup',{timeout:5000})
  }
  warningIcon() {
    return cy.get('.swal2-warning').should('exist')
  }

  problemIcon(){
    return cy.get('.swal2-x-mark').should('exist')
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

  confirmButton() {
    return cy.get('.swal2-confirm').should('exist')
  }

  

  //bin scan Modal
  binScanModal(){
   return cy.get('#mat-dialog-2',{timeout:500}).should('be.visible')
  }
  scanBinMessage(){
    return cy.get('.pt-3 > .fs-20').should('exist')
  }

  scanZone(){
    return cy.get('.bin-location-box').should('exist')
  }

  
  confirmBinInput(){
    return cy.get('#input0').should('exist')
  }

  scanModalNextButton(){
    return cy.get('.mat-dialog-actions > .btn-primary').should('exist')
  }

  //item scan modal

  itemScanModal(){
    return cy.get('#mat-dialog-2').should('exist')
  }

  itemScanInput(){
    return cy.get('#input1').should('exist')
  }

  itemCode(){
   return cy.get('.mr-auto > .d-block').should('exist')
  }

  //add serial no modal
  serialNoModal(){
    return cy.get('#mat-dialog-3').should('exist')
  }

  serialModaltitle(){
    return cy.get('#mat-dialog-title-3 > .fs-16').should('exist')
  }

  autoGenerateButton(){
    return cy.get('.mat-dialog-actions > .btn-success').should('exist')
  }

  serialPanelNextButton(){
    return cy.get('.next2').should('exist')
  }



 





  cancelButton() {
    return cy.get('.btn-default').should('exist')
  }


  addButton() {
    return cy.get('.btn-primary').should('exist')
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

export default InboundRequest