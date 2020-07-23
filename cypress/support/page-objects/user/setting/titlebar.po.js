/// <reference types="Cypress"/>

class TitleBar {
  titleIcon() {
    return cy.get('h5 .mr-2').should('exist');
  }

  title() {
    return cy.get('h5.m0.ellipsis').should('exist')
  }

  listItemCount() {
    return cy.get('.badge').should('exist')
  }



  searchBar() {
    return cy.get('input#mat-input-8').should('exist')
  }

  addButton() {
    return cy.get('.d-none > .border').should('exist')
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
    return cy.get('tbody > tr').eq(row).find('td').eq(4).find('[mattooltip="Edit"]')
  }

  
  deleteIcon(row){
    return cy.get('tbody > tr').eq(row).find('td').eq(4).find('.text-danger')
  }

  checkContents(title) {
    this.titleIcon();
    // this.title().should('include.text', title);
    this.title();
    this.listItemCount();
    this.searchBar();
    this.addButton();
  }

}

export default TitleBar