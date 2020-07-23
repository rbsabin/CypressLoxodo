/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po";
import Titlebar from "../../../support/page-objects/user/setting/titlebar.po";
import CycleCountGroup from "../../../support/page-objects/user/setting/cycle-count-group.po";
import Random from "../../../support/page-objects/random.po";
describe("Cycle Count Group", () => {
  var sidebar = new Sidebar();
  var titlebar = new Titlebar();
  var cycleCountGroup = new CycleCountGroup();
  var random = new Random();

  beforeEach(() => {
    cy.login();
  });

  afterEach(() => {
    cy.logout();
  });

  it("Visits and Validates components of Cycle Count Groups page", () => {
    sidebar.settings().click();
    sidebar.cycleCountGroup().click();
    cy.url().should("include", "cycle-count-groups");
    titlebar.checkContents("Cycle Count Groups");
    cycleCountGroup.idColumn().should("have.text", "ID");
    cycleCountGroup.frequencyColumn().should("have.text", "Frequency");
    cycleCountGroup
      .maxItemPerCountColumn()
      .should("have.text", "Max Items Per Count");
    cycleCountGroup.actionColumn();
    cycleCountGroup.table().then(($table) => {
      const rowsCount = $table.find("tbody").find("tr").length;
      if (rowsCount > 0) {
        cycleCountGroup.tableRow().each(($tr) => {
          cy.get($tr).children().should("have.length", 4);
        });
        cycleCountGroup.actionButtons().each(($e) => {
          cy.get($e).children().should("have.length", 1);
        });
      }
    });
  });

  it("Validates the addition of new Cycle Count Group", () => {
    sidebar.settings().click();
    sidebar.cycleCountGroup().click();
    titlebar.addButton().click();
    cycleCountGroup.titleIcon();
    cycleCountGroup.title().should("have.text", "ADD Cycle Count Group");
    cycleCountGroup.crossIcon();
    cycleCountGroup.idLabel();
    cycleCountGroup.idInput().type(random.number(5));
    cycleCountGroup.frequencyLabel();
    cycleCountGroup
      .frequencyInput()
      .select(random.randomItem(["Weekly", "Monthly", "Yearly"]));
    cycleCountGroup.maxCountlabel();
    cycleCountGroup.maxCountInput().type(random.number(2));
    cycleCountGroup.addButton().click();
    cycleCountGroup
      .toastmessage()
      .should("have.text", "Cycle count group successfully added");
  });

  it("Edits the existing Cycle Count Group", () => {
    sidebar.settings().click();
    sidebar.cycleCountGroup().click();
    cycleCountGroup.table().then(($table) => {
      const rowsCount = $table.find("tbody").find("tr").length;
      if (rowsCount > 0) {
        const row = random.randomNumberBetween(0, rowsCount - 1);
        cycleCountGroup.editIcon(row).click();
        cycleCountGroup.titleIcon();
        cycleCountGroup.title().should("have.text", "EDIT Cycle Count Group");
        cycleCountGroup.crossIcon();
        cycleCountGroup.idLabel();
        cycleCountGroup.frequencyLabel();
        cycleCountGroup
          .frequencyInput()
          .select(random.randomItem(["Weekly", "Monthly", "Yearly"]));
        cycleCountGroup.maxCountlabel();
        cycleCountGroup.maxCountInput().clear().type(random.number(2));
        cycleCountGroup.addButton().click();
        cycleCountGroup
          .toastmessage()
          .should("have.text", "Cycle count group successfully updated");
      }
    });
  });

  it("validates the functionality of cancel buttons", () => {
    sidebar.settings().click();
    sidebar.cycleCountGroup().click();
    titlebar.addButton().click();
    cycleCountGroup.modal().should("be.visible");
    cycleCountGroup.crossIcon().click();
    cycleCountGroup.modal().should("not.be.visible");
    titlebar.addButton().click();
    cycleCountGroup.modal().should("be.visible");
    cycleCountGroup.cancelButton().click();
    cycleCountGroup.modal().should("not.be.visible");
  });
});
