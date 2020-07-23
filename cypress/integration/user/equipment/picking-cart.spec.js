/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po";
import PickingCart from "../../../support/page-objects/user/equipment/picking-cart.po";
import Random from "../../../support/page-objects/random.po";
context("Picking Cart", () => {
  var sidebar = new Sidebar();
  var random = new Random();
  var pickingCart = new PickingCart();

  beforeEach(() => {
    cy.login();
  });

  afterEach(() => {
    cy.logout();
  });

  specify("Visits and Validates the component of Picking Cart page", () => {
    sidebar.equipment().click();
    sidebar.pickingCart().click();
    cy.url().should("include", "picking-cart");
    pickingCart.titleBarIcon();
    pickingCart.titleBarTitleName().should("include.text", "Picking Carts");
    pickingCart.searchButton();
    pickingCart.addPickingCartsButton();
    cy.wait(1000);
    pickingCart.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
        pickingCart.tableHeader();
        pickingCart.tableColumnHeader(0).should("exist");
        pickingCart.tableColumnHeader(1).should("include.text", "Code");
        pickingCart.tableColumnHeader(2).should("include.text", "Name");
        pickingCart.tableColumnHeader(3).should("include.text", "Type");
        pickingCart.tableColumnHeader(4).should("include.text", "Assigned User");
        pickingCart.tableColumnHeader(5).should("include.text", "Zone");
        pickingCart.tableColumnHeader(6).should("include.text", "User Group");
        pickingCart.tableColumnHeader(7).should("include.text", "Status");
        pickingCart.tableColumnHeader(8).should("exist");
        pickingCart.pickingCartPaginationBar();
        // pickingCart.table().then(($table) => {
        //   const rowsCount = $table.find("tbody").find("tr").length;
        //   if (rowsCount > 0) {
        //     pickingCart.tableRow().each(($tr) => {
        //       cy.get($tr).children().should("have.length", 9);
        //     });
        //     pickingCart.actionButtons().each(($e) => {
        //       cy.get($e).children().should("have.length", 2);
        //     });
        //   }
        // });
      } else {
        cy.log("Table is not found");
        pickingCart
          .noRecords()
          .should("include.text", "No picking cart to display, yet.");
      }
    });
  });
  specify("Validates the addition of new Picking Cart", () => {
    sidebar.equipment().click();
    sidebar.pickingCart().click();
    cy.url().should("include", "picking-cart");
    pickingCart.addPickingCartsButton().click();
    pickingCart.titleIcon();
    pickingCart.title().should("have.text", " Add Picking Cart ");
    pickingCart.closePickingCartModal();
    pickingCart.cartID();
    pickingCart.idInput().type(random.number(5));
    pickingCart.cartName();
    pickingCart.nameInput().type(random.stringLowercase(5));
    pickingCart.cartType();
    var option = random.randomItem(["Dynamic", "Static"]);
    pickingCart.typeInput().select(option);
    pickingCart.cartZone();
    pickingCart.zoneInput().type(random.stringLowercase(5));
    pickingCart.userGroup();
    pickingCart.userGroupInput().type(random.stringLowercase(5));
    if (option == "Static") {
      pickingCart.toteBarcode();
      pickingCart.toteName();
      pickingCart.toteaddBtn().click();
      pickingCart.toteID().type(random.number(5));
      pickingCart.staticToteName().type(random.stringLowercase(5));
      pickingCart.crossIcon();
    }
    pickingCart.cancleButton();
    pickingCart.addButton().click();
    cy.wait(1000);
    if (option == "Dynamic") {
      pickingCart
        .toastMessage()
        .should(
          "include.text",
          "Successfully Created New Dynamic Picking Cart."
        );
    } else {
      pickingCart
        .toastMessage()
        .should(
          "include.text",
          "Successfully Created New Static Picking Cart."
        );
    }
  });
  specify("Edit the existing Picking Carts", () => {
    sidebar.equipment().click();
    sidebar.pickingCart().click();
    cy.wait(4000);
    pickingCart.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
        pickingCart.tableHeader();
        pickingCart.tableColumnHeader(0).should("exist");
        pickingCart.tableColumnHeader(1).should("include.text", "Code");
        pickingCart.tableColumnHeader(2).should("include.text", "Name");
        pickingCart.tableColumnHeader(3).should("include.text", "Type");
        pickingCart.tableColumnHeader(4).should("include.text", "Assigned User");
        pickingCart.tableColumnHeader(5).should("include.text", "Zone");
        pickingCart.tableColumnHeader(6).should("include.text", "User Group");
        pickingCart.tableColumnHeader(7).should("include.text", "Status");
        pickingCart.tableColumnHeader(8).should("exist");
        pickingCart.table().then(($table) => {
          const rowsCount = $table.find("tbody").find("tr").length;
          if (rowsCount > 0) {
            const row = random.randomNumberBetween(0, rowsCount - 1);
            pickingCart;
            pickingCart.editIcon(row).click();
            pickingCart.ediTitleIcon();
            cy.wait(1000);
            pickingCart.editTitle().should("include.text", "Edit Picking Cart");
            pickingCart.printIcon().click();
            pickingCart
              .printLabelTitle()
              .should("include.text", "Print Picking Cart Label");
            pickingCart.printLabelCancelBtn().click();
            pickingCart.closeEditModal();
            pickingCart.cartName();
            pickingCart.nameInput().clear().type(random.stringLowercase(5));
            pickingCart.cartType();
            cy.wait(1000);
            var option = random.randomItem(["Dynamic", "Static"]);
            pickingCart.typeInput().select(option);
            pickingCart.cartZone();
            pickingCart.zoneInput().clear().type(random.stringLowercase(5));
            pickingCart.userGroup();
            pickingCart
              .userGroupInput()
              .clear()
              .type(random.stringLowercase(5));
            if (option == "Static") {
              pickingCart.toteBarcode();
              pickingCart.toteName();
              pickingCart.toteaddBtn().click();
              pickingCart.toteID().type(random.number(5));
              pickingCart
                .staticToteName()
                .clear()
                .type(random.stringLowercase(5));
              pickingCart.crossIcon();
            }
            pickingCart.editCancelBtn();
            pickingCart.saveChangeBtn().click();
            pickingCart
              .editToastMessage()
              .should("include.text", "Successfully Updated Picking Cart.");
          }
        });
      } else {
        cy.log("Table is not found");
        pickingCart
          .noRecords()
          .should("include.text", "No picking cart to display, yet.");
      }
    });
  });
  specify("Validate activate and deactivte functionality", () => {
    sidebar.equipment().click();
    sidebar.pickingCart().click();
    cy.wait(3000);
    pickingCart.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
        pickingCart.tableHeader();
        pickingCart.tableColumnHeader(0).should("exist");
        pickingCart.tableColumnHeader(1).should("include.text", "Code");
        pickingCart.tableColumnHeader(2).should("include.text", "Name");
        pickingCart.tableColumnHeader(3).should("include.text", "Type");
        pickingCart.tableColumnHeader(4).should("include.text", "Assigned User");
        pickingCart.tableColumnHeader(5).should("include.text", "Zone");
        pickingCart.tableColumnHeader(6).should("include.text", "User Group");
        pickingCart.tableColumnHeader(7).should("include.text", "Status");
        pickingCart.tableColumnHeader(8).should("exist");
        pickingCart.pickingCartPaginationBar();
        pickingCart.table().then(($table) => {
          const rowsCount = $table.find("tbody").find("tr").length;
          if (rowsCount > 0) {
            const row = random.randomNumberBetween(0, rowsCount - 2);
            var option = random.randomItem(["ACTIVATE", "DEACTIVATE"]);
            pickingCart.statusEdit(row).click();
            cy.wait(1000);
            if (option == "ACTIVATE") {
              pickingCart.deactivateBtn().click();
              console.log("Deactivate");
            } else {
              pickingCart.activateBtn().click();
              console.log("activate");
            }
          }
        });
      } else {
        cy.log("Table is not found");
        pickingCart
          .noRecords()
          .should("include.text", "No picking cart to display, yet.");
      }
    });
  });
  specify("Validate searching functionality", () => {
    sidebar.equipment().click();
    sidebar.pickingCart().click();
    cy.wait(3000);
    pickingCart.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
        pickingCart.tableHeader();
        pickingCart.tableColumnHeader(0).should("exist");
        pickingCart.tableColumnHeader(1).should("include.text", "Code");
        pickingCart.tableColumnHeader(2).should("include.text", "Name");
        pickingCart.tableColumnHeader(3).should("include.text", "Type");
        pickingCart.tableColumnHeader(4).should("include.text", "Assigned User");
        pickingCart.tableColumnHeader(5).should("include.text", "Zone");
        pickingCart.tableColumnHeader(6).should("include.text", "User Group");
        pickingCart.tableColumnHeader(7).should("include.text", "Status");
        pickingCart.tableColumnHeader(8).should("exist");
        pickingCart.pickingCartPaginationBar();
        pickingCart.table().then(($table) => {
          const rowsCount = $table.find("tbody").find("tr").length;
          if (rowsCount > 0) {
            const row = random.randomNumberBetween(0, rowsCount - 1);
            pickingCart
              .cartCodeID(row)
              .invoke("text")
              .then((cartCodeID) => {
                cy.log(cartCodeID);
                pickingCart.searchButton().type(cartCodeID.trim());
                cy.wait(1000);
                pickingCart.cartCodeID().should("have.length", 1);
                pickingCart.cartCodeID().should("have.text", cartCodeID);
              });
          }
        });
      } else {
        cy.log("Table is not found");
        pickingCart
          .noRecords()
          .should("include.text", "No picking cart to display, yet.");
      }
    });
  });
});
