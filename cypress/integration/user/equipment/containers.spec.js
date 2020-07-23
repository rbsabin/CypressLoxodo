/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po";
import Random from "../../../support/page-objects/random.po";
import Containers from "../../../support/page-objects/user/equipment/containers.po";
context("Containers", () => {
  var sidebar = new Sidebar();
  var random = new Random();
  var containers = new Containers();

  beforeEach(() => {
    cy.login();
  });

  afterEach(() => {
    cy.logout();
  });

  specify("Visits and Validates the component of Containers", () => {
    sidebar.equipment().click();
    sidebar.container().click();
    cy.url().should("include", "container");
    containers.titleBarIcon();
    containers.titleBar().should("include.text", "Containers");
    containers.countContainerData();
    containers.searchIcon();
    containers.addContainerBtn();
    cy.wait(1000);
    containers.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
        containers.tableHeader();
        containers.tableColumnHeader(0).should("have.text", "Code");
        containers.tableColumnHeader(1).should("have.text", "Name");
        containers.tableColumnHeader(2).should("have.text", "Type");
        containers.tableColumnHeader(3).should("have.text", "Status");
        containers.tableColumnHeader(4).should("exist");
      } else {
        cy.log("Table is not found");
        containers.noRecords().should("include.text", "No container found.");
      }
    });
  });
  specify("Validates the addition of new Containers", () => {
    sidebar.equipment().click();
    sidebar.container().click();
    containers.addContainerBtn().click();
    containers.addContainerTitle();
    containers.closeAddmodal();
    containers.addModal();
    containers.code();
    containers.codeInputBox().type(random.number(6));
    containers.name();
    containers.nameInputBox().type(random.stringLowercase(6));
    containers.containerType();
    containers.containerTypeInput().then(($select) => {
      var optionsCount = $select.find("option").length;
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(2, optionsCount);
        containers
          .containerTypeOPtion()
          .eq(optionKey)
          .invoke("val")
          .then((uom) => {
            containers.containerTypeInput().select(uom);
          });
      }
    });
    containers.height();
    containers.heightInput();
    containers.heightUOM().then(($select) => {
      var optionsCount = $select.find("option").length;
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1);
        containers
          .heightUOMOptions()
          .eq(optionKey)
          .invoke("val")
          .then((uom) => {
            containers.heightUOM().select(uom);
          });
      }
    });
    containers.length();
    containers.lenghtInput();
    containers.lenghtUOM();
    containers.width();
    containers.widthInput();
    containers.widthUOM();
    containers.weight();
    containers.weightInput();
    containers.weightUOM();
    containers.volume();
    containers.volumeInput();
    containers.volumeUOM();
    containers.insideLenght();
    containers.insideLenghtInput().type(random.number(3));
    containers.insideWidth();
    containers.insideWidthInput().type(random.number(3));
    containers.insideWidthUOM();
    containers.insideHeight();
    containers.insideHeightInput().type(random.number(2));
    containers.insideHeightUOM();
    containers.insideVolume();
    containers.insideVolumeInput();
    containers.insideVolumeUOM();
    containers.doorWidth();
    containers.doorWidthInput().type(random.number(3));
    containers.doorWidthUOM();
    containers.doorHeight();
    containers.doorHeightInput().type(random.number(3));
    containers.doorHeightUOM();
    containers.capacity();
    containers.capacityInput().type(random.number(4));
    containers.capacityUOM();
    containers.tareWeight();
    containers.tareWeightInput().type(random.number(4));
    containers.tareWeightUOM().then(($select) => {
      var optionsCount = $select.find("option").length;
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1);
        containers
          .tareWeightUOMOption()
          .eq(optionKey)
          .invoke("val")
          .then((uom) => {
            containers.tareWeightUOM().select(uom);
          });
      }
    });
    containers.maxCargoWeight();
    containers.maxCargoWeightInput().type(random.number(4));
    containers.maxCargoWeightUOM().then(($select) => {
      var optionsCount = $select.find("option").length;
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1);
        containers
          .maxCargoWeightUOMOption()
          .eq(optionKey)
          .invoke("val")
          .then((uom) => {
            containers.maxCargoWeightUOM().select(uom);
          });
      }
    });
    containers.status();
    containers.statusInput().then(($select) => {
      var optionsCount = $select.find("option").length;
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(2, optionsCount);
        containers
          .statusInputOption()
          .eq(optionKey)
          .invoke("val")
          .then((uom) => {
            containers.statusInput().select(uom);
          });
      }
    });
    containers.cancelBtn();
    containers.addNewContainerBtn().click();
    containers
      .toastMessage()
      .should("have.text", "Container ID successfully added");
  });
  specify("Edits the existing Containers", () => {
    sidebar.equipment().click();
    sidebar.container().click();
    cy.wait(3000);
    containers.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
        containers.tableHeader();
        containers.tableColumnHeader(0).should("have.text", "Code");
        containers.tableColumnHeader(1).should("have.text", "Name");
        containers.tableColumnHeader(2).should("have.text", "Type");
        containers.tableColumnHeader(3).should("have.text", "Status");
        containers.tableColumnHeader(4).should("exist");
        containers.table().then(($table) => {
          const rowsCount = $table.find("tbody").find("tr").length;
          if (rowsCount > 0) {
            const row = random.randomNumberBetween(2, rowsCount);
            containers.editIcon(row).click();
            containers
              .editContainerTitle()
              .should("include.text", "Edit Container");
            containers.name();
            containers.nameInputBox().type(random.stringLowercase(6));
            containers.containerType();
            cy.wait(1000);
            containers.editContainerTypes().then(($select) => {
              var optionsCount = $select.find("option").length;
              if (optionsCount > 0) {
                var optionKey = random.randomNumberBetween(0, optionsCount - 1);
                containers
                  .editContainerTypesOptions()
                  .eq(optionKey)
                  .invoke("val")
                  .then((uom) => {
                    containers.editContainerTypes().select(uom);
                  });
              }
            });
            containers.height();
            containers.heightInput();
            containers.heightUOM().then(($select) => {
              var optionsCount = $select.find("option").length;
              if (optionsCount > 0) {
                var optionKey = random.randomNumberBetween(0, optionsCount - 1);
                containers
                  .heightUOMOptions()
                  .eq(optionKey)
                  .invoke("val")
                  .then((uom) => {
                    containers.heightUOM().select(uom);
                  });
              }
            });
            containers.length();
            containers.lenghtInput();
            containers.lenghtUOM();
            containers.width();
            containers.widthInput();
            containers.widthUOM();
            containers.weight();
            containers.weightInput();
            containers.weightUOM();
            containers.volume();
            containers.volumeInput();
            containers.volumeUOM();
            containers.insideLenght();
            containers.insideLenghtInput().clear().type(random.number(3));
            containers.insideWidth();
            containers.insideWidthInput().clear().type(random.number(3));
            containers.insideWidthUOM();
            containers.insideHeight();
            containers.insideHeightInput().clear().type(random.number(2));
            containers.insideHeightUOM();
            containers.insideVolume();
            containers.insideVolumeInput();
            containers.insideVolumeUOM();
            containers.doorWidth();
            containers.doorWidthInput().clear().type(random.number(3));
            containers.doorWidthUOM();
            containers.doorHeight();
            containers.doorHeightInput().clear().type(random.number(3));
            containers.doorHeightUOM();
            containers.capacity();
            containers.capacityInput().clear().type(random.number(4));
            containers.capacityUOM();
            containers.tareWeight();
            containers.tareWeightInput().clear().type(random.number(4));
            containers.tareWeightUOM().then(($select) => {
              var optionsCount = $select.find("option").length;
              if (optionsCount > 0) {
                var optionKey = random.randomNumberBetween(0, optionsCount - 1);
                containers
                  .tareWeightUOMOption()
                  .eq(optionKey)
                  .invoke("val")
                  .then((uom) => {
                    containers.tareWeightUOM().select(uom);
                  });
              }
            });
            containers.maxCargoWeight();
            containers.maxCargoWeightInput().clear().type(random.number(4));
            containers.maxCargoWeightUOM().then(($select) => {
              var optionsCount = $select.find("option").length;
              if (optionsCount > 0) {
                var optionKey = random.randomNumberBetween(0, optionsCount - 1);
                containers
                  .maxCargoWeightUOMOption()
                  .eq(optionKey)
                  .invoke("val")
                  .then((uom) => {
                    containers.maxCargoWeightUOM().select(uom);
                  });
              }
            });
            containers.status();
            containers.statusInput().then(($select) => {
              var optionsCount = $select.find("option").length;
              if (optionsCount > 0) {
                var optionKey = random.randomNumberBetween(2, optionsCount);
                containers
                  .statusInputOption()
                  .eq(optionKey)
                  .invoke("val")
                  .then((uom) => {
                    containers.statusInput().select(uom);
                  });
              }
            });
          }
        });
        containers.saveChangeBtn().click();
        containers
          .toastMessage()
          .should("have.text", "Container ID successfully updated");
      } else {
        cy.log("Table is not found");
        containers.noRecords().should("include.text", "No container found.");
      }
    });
  });
  specify("Verify Delete functionality", () => {
    sidebar.equipment().click();
    sidebar.container().click();
    cy.wait(3000);
    containers.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
        containers.tableHeader();
        containers.tableColumnHeader(0).should("have.text", "Code");
        containers.tableColumnHeader(1).should("have.text", "Name");
        containers.tableColumnHeader(2).should("have.text", "Type");
        containers.tableColumnHeader(3).should("have.text", "Status");
        containers.tableColumnHeader(4).should("exist");
        containers.table().then(($table) => {
          const rowsCount = $table.find("tbody").find("tr").length;
          if (rowsCount > 0) {
            const row = random.randomNumberBetween(0, rowsCount - 1);
            containers.deleteIcon(row).click();
            containers.deleteConfirmModal();
            containers
              .deleteConfirmationMessage()
              .should(
                "have.text",
                "Are you sure you want to delete this container?"
              );
            containers.deleteCancelBtn();
            containers.deleteConfirmBtn().click();
            containers
              .toastMessage()
              .should("have.text", "Container ID successfully deleted");
          }
        });
      } else {
        cy.log("Table is not found");
        containers.noRecords().should("include.text", "No container found.");
      }
    });
  });
  specify("Verify Search functionality", () => {
    sidebar.equipment().click();
    sidebar.container().click();
    cy.wait(3000);
    containers.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
        containers.tableHeader();
        containers.tableColumnHeader(0).should("have.text", "Code");
        containers.tableColumnHeader(1).should("have.text", "Name");
        containers.tableColumnHeader(2).should("have.text", "Type");
        containers.tableColumnHeader(3).should("have.text", "Status");
        containers.tableColumnHeader(4).should("exist");
        containers.table().then(($table) => {
          const rowsCount = $table.find("tbody").find("tr").length;
          if (rowsCount > 0) {
            const row = random.randomNumberBetween(0, rowsCount - 1);
            containers
              .containerCodeId(row)
              .invoke("text")
              .then((containerCodeId) => {
                cy.log(containerCodeId);
                containers.searchIcon().type(containerCodeId.trim());
                cy.wait(1000);
                containers.containerCodeId().should("have.length", 1);
                containers
                  .containerCodeId()
                  .should("have.text", containerCodeId);
              });
          }
        });
      } else {
        cy.log("Table is not found");
        containers.noRecords().should("include.text", "No container found.");
      }
    });
  });
});
