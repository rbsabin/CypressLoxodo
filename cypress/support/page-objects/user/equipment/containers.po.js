///<reference types="Cypress"/>
class Containers {
  titleBarIcon() {
    return cy.get(".fs-24").should("exist");
  }
  titleBar() {
    return cy.get(".m0").should("exist");
  }
  countContainerData() {
    return cy.get(".badge").should("exist");
  }
  searchIcon() {
    return cy.get("#mat-input-8").should("exist");
  }
  addContainerBtn() {
    return cy.get(".d-none > .border").should("exist");
  }
  //data table
  body() {
    return cy.get("body");
  }
  table() {
    return cy.get("table").should("exist");
  }

  tableHeader() {
    return cy.get("table > thead > tr").should("exist");
  }

  tableColumnHeader(columnNumber) {
    return this.tableHeader().find("th").eq(columnNumber);
  }
  noRecords() {
    return cy.get(".empty-state-content").should("exist");
  }
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
  //add new containers
  addContainerTitle() {
    return cy.get("#mat-dialog-title-0 > .fs-14").should("exist");
  }

  closeAddmodal() {
    return cy.get(".ml-auto > .mat-icon-button").should("exist");
  }
  addModal() {
    return cy.get("#mat-dialog-0").should("exist");
  }
  code() {
    return cy.get(":nth-child(1) > .col-form-label").should("exist");
  }

  codeInputBox() {
    return cy.get(":nth-child(1) > .col-md-9 > .form-control").should("exist");
  }

  name() {
    return cy.get(":nth-child(2) > .col-form-label").should("exist");
  }

  nameInputBox() {
    return cy.get(":nth-child(2) > .col-md-9 > .form-control").should("exist");
  }

  containerType() {
    return cy.get(":nth-child(3) > .col-form-label").should("exist");
  }

  containerTypeInput() {
    return cy.get(":nth-child(3) > .col-md-9 > .form-control").should("exist");
  }

  containerTypeOPtion() {
    return cy
      .get(":nth-child(3) > .col-md-9 > .form-control option")
      .should("exist");
  }

  height() {
    return cy.get('[formgroupname="height"] > .col-form-label').should("exist");
  }
  heightInput() {
    return cy
      .get(
        '[formgroupname="height"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  heightUOM() {
    return cy
      .get(
        '[formgroupname="height"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }
  heightUOMOptions() {
    return cy
      .get(
        '[formgroupname="height"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control option'
      )
      .should("exist");
  }

  length() {
    return cy.get('[formgroupname="length"] > .col-form-label').should("exist");
  }

  lenghtInput() {
    return cy.get('[formgroupname="length"] > .col-form-label').should("exist");
  }

  lenghtUOM() {
    return cy
      .get(
        '[formgroupname="length"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }

  width() {
    return cy.get('[formgroupname="width"] > .col-form-label').should("exist");
  }

  widthInput() {
    return cy
      .get(
        '[formgroupname="width"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  widthUOM() {
    return cy
      .get(
        '[formgroupname="width"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }

  weight() {
    return cy.get('[formgroupname="weight"] > .col-form-label').should("exist");
  }

  weightInput() {
    return cy
      .get(
        '[formgroupname="weight"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  weightUOM() {
    return cy
      .get(
        '[formgroupname="weight"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }

  volume() {
    return cy.get('[formgroupname="volume"] > .col-form-label').should("exist");
  }

  volumeInput() {
    return cy
      .get(
        '[formgroupname="volume"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  volumeUOM() {
    return cy
      .get(
        '[formgroupname="volume"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }

  insideLenght() {
    return cy
      .get('[formgroupname="inside_length"] > .col-form-label')
      .should("exist");
  }

  insideLenghtInput() {
    return cy
      .get(
        '[formgroupname="inside_length"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  insideLenghtUOM() {
    return cy
      .get(
        '[formgroupname="inside_length"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }

  insideWidth() {
    return cy
      .get('[formgroupname="inside_width"] > .col-form-label')
      .should("exist");
  }

  insideWidthInput() {
    return cy
      .get(
        '[formgroupname="inside_width"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  insideWidthUOM() {
    return cy
      .get(
        '[formgroupname="inside_width"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }

  insideHeight() {
    return cy
      .get('[formgroupname="inside_height"] > .col-form-label')
      .should("exist");
  }

  insideHeightInput() {
    return cy
      .get(
        '[formgroupname="inside_height"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  insideHeightUOM() {
    return cy
      .get(
        '[formgroupname="inside_height"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }
  insideVolume() {
    return cy
      .get('[formgroupname="inside_volume"] > .col-form-label')
      .should("exist");
  }

  insideVolumeInput() {
    return cy
      .get(
        '[formgroupname="inside_volume"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  insideVolumeUOM() {
    return cy
      .get(
        '[formgroupname="inside_volume"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }

  doorWidth() {
    return cy
      .get('[formgroupname="door_width"] > .col-form-label')
      .should("exist");
  }

  doorWidthInput() {
    return cy
      .get(
        '[formgroupname="door_width"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  doorWidthUOM() {
    return cy
      .get(
        '[formgroupname="door_width"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }

  doorHeight() {
    return cy
      .get('[formgroupname="door_height"] > .col-form-label')
      .should("exist");
  }

  doorHeightInput() {
    return cy
      .get(
        '[formgroupname="door_height"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  doorHeightUOM() {
    return cy
      .get(
        '[formgroupname="door_height"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }

  capacity() {
    return cy
      .get('[formgroupname="capacity"] > .col-form-label')
      .should("exist");
  }

  capacityInput() {
    return cy
      .get(
        '[formgroupname="capacity"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  capacityUOM() {
    return cy
      .get(
        '[formgroupname="capacity"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }

  tareWeight() {
    return cy
      .get('[formgroupname="tare_weight"] > .col-form-label')
      .should("exist");
  }

  tareWeightInput() {
    return cy
      .get(
        '[formgroupname="tare_weight"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  tareWeightUOM() {
    return cy
      .get(
        '[formgroupname="tare_weight"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }

  tareWeightUOMOption() {
    return cy
      .get(
        '[formgroupname="tare_weight"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control option'
      )
      .should("exist");
  }

  maxCargoWeight() {
    return cy
      .get('[formgroupname="max_cargo_weight"] > .col-form-label')
      .should("exist");
  }

  maxCargoWeightInput() {
    return cy
      .get(
        '[formgroupname="max_cargo_weight"] > .col-md-9 > .d-flex > :nth-child(1) > .form-control'
      )
      .should("exist");
  }

  maxCargoWeightUOM() {
    return cy
      .get(
        '[formgroupname="max_cargo_weight"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control'
      )
      .should("exist");
  }
  maxCargoWeightUOMOption() {
    return cy
      .get(
        '[formgroupname="max_cargo_weight"] > .col-md-9 > .d-flex > :nth-child(2) > .form-control option'
      )
      .should("exist");
  }

  status() {
    return cy.get(":nth-child(20) > .col-form-label").should("exist");
  }

  statusInput() {
    return cy.get(":nth-child(20) > .col-md-9 > .form-control").should("exist");
  }
  statusInputOption() {
    return cy
      .get(":nth-child(20) > .col-md-9 > .form-control option")
      .should("exist");
  }
  addNewContainerBtn() {
    return cy.get(".btn-primary").should("exist");
  }
  cancelBtn() {
    return cy.get(".btn-default").should("exist");
  }
  toastMessage() {
    return cy.get(".toast-message").should("exist");
  }
  // edit functionality
  editIcon() {
    return cy
      .get(
        ":nth-child(1) > :nth-child(5) > .action-buttons > :nth-child(1) > .mat-icon-button"
      )
      .should("exist");
  }
  editContainerTitle() {
    return cy.get("#mat-dialog-title-0 > .fs-14").should("exist");
  }
  closeEditContainerIcon() {
    return cy.get(".ml-auto > .mat-icon-button").should("exist");
  }
  saveChangeBtn() {
    return cy.get(".btn-primary").should("exist");
  }
  editContainerTypes() {
    return cy.get(":nth-child(2) > .col-md-9 > .form-control").should("exist");
  }
  editContainerTypesOptions() {
    return cy.get(":nth-child(2) > .col-md-9 > .form-control option");
  }
  // Delete functionality
  deleteIcon() {
    return cy
      .get(
        ":nth-child(1) > :nth-child(5) > .action-buttons > :nth-child(2) > .text-danger > .mat-button-wrapper > .mat-icon"
      )
      .should("exist");
  }
  deleteConfirmModal() {
    return cy.get(".swal2-popup").should("exist");
  }

  deleteConfirmationMessage() {
    return cy.get("#swal2-content").should("exist");
  }

  deleteCancelBtn() {
    return cy.get(".swal2-cancel").should("exist");
  }

  deleteConfirmBtn() {
    return cy.get(".swal2-confirm").should("exist");
  }
  containerCodeId() {
    return cy.get("tbody > :nth-child(1) > :nth-child(1)").should("exist");
  }
}
export default Containers;
