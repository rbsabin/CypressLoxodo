///<reference types="Cypress"/>

class ReceiveTask{
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
    return cy.get('.fs-24').should('exist');
  }

  titleBarTitleName() {
    return cy.get('h5').should('exist')
  }

  titleBarReveiveTasksButton(){
    return cy.get(':nth-child(1) > .ml-3 > .border').should('exist')
  }

  titleBarStatusButton() {
    return cy.get(':nth-child(2) > .ml-3 > .border').should('exist')
  }

  titleBarSearchBar() {
    return cy.get('input#mat-input-8').should('exist')
  }

  allZonesButton() {
    return cy.get('div.ng-star-inserted > .border').should('exist')
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


  actionButtons() {
    return cy.get('tbody > tr td:nth-child(5) > div')
  }

  editIcon(row) {
    return cy.get('tbody > tr').eq(row).find('td').eq(10).find('[mattooltip="Edit"]')
  }


  cancelIcon(row) {
    return cy.get('tbody > tr').eq(row).find('td').eq(10).find('.text-danger')
  }

  accrodionIcon(row) {
    return cy.get('tbody > tr').eq(row).find('td').eq(10).find('.table-accordion-btn')
  }



}

export default ReceiveTask