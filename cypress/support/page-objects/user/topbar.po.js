/// <reference types="Cypress" />

class TopBar {
  sidebarToggle() {
    return cy.get('.sidebar-toggle > .mat-button-wrapper > .mat-icon',{timeout:5000}).should('exist');
  }

  tenant() {
    return cy.get('.page-indicator').should('exist');
  }

  warehouse() {
    return cy.get('button[mattooltip="Select Warehouse"] ').should('exist')
  }

  warehouseOptions(){
    return cy.get('.mat-menu-content')
  }

  warehouseOption(optionNo){
    return cy.get('.mat-menu-content > button').eq(optionNo)
  }

  logo() {
    return cy.get('a > img').should('exist');
  }

  searchHelp() {
    return cy.get('.btn-hover > .mat-button-wrapper > .mat-icon').should('exist');
  }

  profileImage() {
    return cy.get('.mat-button-wrapper > div > .avatar > .rounded-circle').should('exist');
  }

  username() {
    return cy.get('.username').should('exist').should('exist');
  }

  profileDropdown() {
    return cy.get(':nth-child(3) > .nav-btn').should('exist');
  }

  profileMenu() {
    return cy.get('.mat-menu-content > :nth-child(2)').should('exist')
  }
  dashboardMenu() {
    return cy.get('.mat-menu-content > :nth-child(3)').should('exist')
  }
  myCartMenu() {
    return cy.get('.mat-menu-content > :nth-child(4)').should('exist')
  }

  logoutMenu() {
    return cy.get('.mat-menu-content > :nth-child(6)').should('exist')
  }

  logout() {
    this.profileDropdown().click();
    this.logoutMenu().click()
  }


  //Profile popup
  profilePic() {
    return cy.get('div#mat-dialog-title-1 label').should('exist')
  }

  profileUsername() {
    return cy.get('div#mat-dialog-title-1 div.ln-normal > div').should('exist')
  }
  profileRole() {
    return cy.get('div#mat-dialog-title-1 div.ln-normal > span').should('exist')
  }

  basicInfo() {
    return cy.get('div#mat-tab-label-1-0').should('exist')
  }

  accountInfo() {
    return cy.get('div#mat-tab-label-1-1').should('exist')
  }

  activityInfo() {
    return cy.get('div#mat-tab-label-1-2').should('exist')
  }
  
  cancelButton() {
    return cy.get('mat-dialog-container#mat-dialog-1 button[type="button"].btn.btn-default.mat-button.mat-button-base.cdk-focused.cdk-mouse-focused > span').should('exist')
  }

  saveChangesButton() {
    return cy.get('mat-dialog-container#mat-dialog-1 button[type="submit"].btn.btn-primary.mat-button.mat-button-base.cdk-focused.cdk-mouse-focused > span').should('exist')
  }

}

export default TopBar