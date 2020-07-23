///<reference types="Cypress"/>

class PickingCart {
  //title bar
  titleBarIcon() {
    return cy.get(".mr-2").should("exist");
  }

  titleBarTitleName() {
    return cy.get("h5").should("exist");
  }
  searchButton() {
    return cy.get(".searchbox");
  }
  addPickingCartsButton() {
    return cy.get(".btn-success");
  }
  pickingCartPaginationBar() {
    return cy.get(".mat-paginator-container").should("exist");
  }
  //data table
  body() {
    return cy.get("body");
  }
  table() {
    return cy.get("table").should("exist");
  }

  noRecords() {
    return cy.get(".empty-state-content").should("exist");
  }

  tableHeader() {
    return cy.get("table > thead > tr").should("exist");
  }

  tableColumnHeader(columnNumber) {
    return this.tableHeader().find("th").eq(columnNumber);
  }

  // tableRow() {
  //   return cy.get("table > tbody > tr").should("exist");
  // }

  tableColumnData(columnNumber) {
    return this.tableRow().find("td").eq(columnNumber);
  }

  tableBody() {
    return cy.get("tbody").should("exist");
  }

  tableRow() {
    return cy.get("tbody > tr").should("exist");
  }
  actionButtons() {
    return cy.get('.isOpen > [style="width:40px;"]').should("exist");
  }
  //add new cart
  modal() {
    return cy.get("#mat-dialog-0");
  }
  titleIcon() {
    return cy.get("#mat-dialog-title-0 > :nth-child(1) > .mr-2");
  }
  title() {
    return cy.get("#mat-dialog-title-0 > .fs-14").should("exist");
  }
  closePickingCartModal() {
    return cy.get(".mat-button-wrapper > .text-muted").should("exist");
  }
  cartID() {
    return cy
      .get(":nth-child(1) > .form-group > .col-form-label")
      .should("exist");
  }
  idInput() {
    return cy
      .get(":nth-child(1) > .form-group > .col-md-8 > .form-control")
      .should("exist");
  }
  cartName() {
    return cy
      .get(":nth-child(2) > .form-group > .col-form-label")
      .should("exist");
  }
  nameInput() {
    return cy
      .get(":nth-child(2) > .form-group > .col-md-8 > .form-control")
      .should("exist");
  }
  cartType() {
    return cy
      .get(":nth-child(3) > .form-group > .col-form-label")
      .should("exist");
  }
  typeInput() {
    return cy
      .get(":nth-child(3) > .form-group > .col-md-8 > .form-control")
      .should("exist");
  }
  cartZone() {
    return cy
      .get(":nth-child(4) > .form-group > .col-form-label")
      .should("exist");
  }
  zoneInput() {
    return cy.get("#mat-input-9").should("exist");
  }
  userGroup() {
    return cy
      .get(":nth-child(5) > .form-group > .col-form-label")
      .should("exist");
  }
  userGroupInput() {
    return cy.get("#mat-input-10").should("exist");
  }
  cancleButton() {
    return cy.get(".btn-default").should("exist");
  }
  addButton() {
    return cy.get(".btn-primary").should("exist");
  }
  toastMessage() {
    return cy.get(".toast-success").should("exist");
  }
  //If cart type is static
  toteBarcode() {
    return cy.get('.no-shadow > [style="width: 150px;"]').should("exist");
  }
  toteName() {
    return cy.get(".no-shadow > :nth-child(2)").should("exist");
  }

  toteaddBtn() {
    return cy.get(".bg-success").should("exist");
  }
  toteID() {
    return cy.get(".animated > :nth-child(1) > .form-control").should("exist");
  }
  staticToteName() {
    return cy.get(".animated > :nth-child(2) > .form-control").should("exist");
  }
  crossIcon() {
    return cy
      .get(".text-danger > .mat-button-wrapper > .mat-icon")
      .should("exist");
  }
  cartCodeID() {
    return cy
      .get(".stickyTable > :nth-child(2) > :nth-child(1) > :nth-child(2)")
      .should("exist");
  }
  //edit picking cart
  editIcon() {
    return cy
      .get(
        ':nth-child(1) > [style="width: 40px;"] > .pull-right > .btn-hover > .mat-icon-button > .mat-button-wrapper > .mat-icon'
      )
      .should("exist");
  }
  ediTitleIcon() {
    return cy
      .get("#mat-dialog-title-0 > :nth-child(1) > .mr-2")
      .should("exist");
  }
  editTitle() {
    return cy.get("#mat-dialog-title-0 > .fs-14").should("exist");
  }
  printIcon() {
    return cy.get(".d-flex > .mat-icon-button").should("exist");
  }
  printLabelTitle() {
    return cy.get(".fs-18").should("exist");
  }
  printLabelCancelBtn() {
    return cy
      .get(
        "app-print-picking-cart-label-modal.ng-star-inserted > .mat-dialog-actions > .btn-default"
      )
      .should("exist");
  }
  closeEditModal() {
    return cy.get(".d-flex > .mat-icon-button").should("exist");
  }
  saveChangeBtn() {
    return cy.get(".btn-primary").should("exist");
  }
  editCancelBtn() {
    return cy.get(".btn-default").should("exist");
  }
  editToastMessage() {
    return cy.get(".toast-message").should("exist");
  }
  statusEdit() {
    return cy
      .get(":nth-child(1) > :nth-child(8) > .pull-right > .border")
      .should("exist");
  }
  activateBtn() {
    return cy.get(".mat-menu-content > :nth-child(1)").should("exist");
  }
  deactivateBtn() {
    return cy.get(".mat-menu-content > :nth-child(2)").should("exist");
  }
}

export default PickingCart;
