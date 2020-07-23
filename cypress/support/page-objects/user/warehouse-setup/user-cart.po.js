///<reference types="Cypress"/>
class UserCart{
  //title bar
  titleBarIcon() {
    return cy.get('h5 >span').should('exist');
  }

  titleBarTitleName() {
    return cy.get('h5').should('exist')
  }

  cartCount(){
    return cy.get('.badge').should('exist')
  }

  titleBarSearchBar() {
    return cy.get('input#mat-input-8').should('exist')
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

  accordionDropDown(row) {
    return cy.get('tbody').find('.table-accordion-header').eq(row).find('td').eq(2)
  }

  accordionProfilePic(row) {
    return cy.get('tbody').find('.table-accordion-header').eq(row).find('td').eq(0).find('.avatar')
  }
  
 


}

export default UserCart