/// <reference types="Cypress"/>
class Sidebar {
  dashboard() {
    return cy
      .get(".current-page > a > .hide-menu")
      .should("exist")
      .should("have.text", "Dashboard");
  }

  // inbound menu
  inbound() {
    return cy
      .get(':nth-child(2) > [href="javascript:void(0);"] > .hide-menu')
      .should("exist")
      .should("have.text", "Inbound");
  }

  inboundRequest() {
    cy.get(".active > .list-unstyled > :nth-child(1) > a")
      .should("exist")
      .should("have.text", "Inbound Request");
  }

  receiveTask() {
    cy.get(".active > .list-unstyled > :nth-child(2) > a")
      .should("exist")
      .should("have.text", "Receive Task");
  }

  inboundPutAwayTask() {
    cy.get(".active > .list-unstyled > :nth-child(3) > a")
      .should("exist")
      .should("have.text", "Put Away Task");
  }

  inboundDocument() {
    cy.get(".active > .list-unstyled > :nth-child(4) > a")
      .should("exist")
      .should("have.text", "Inbound Document");
  }
  //outbound menu
  outbound() {
    return cy
      .get(':nth-child(3) > [href="javascript:void(0);"] > .hide-menu')
      .should("exist")
      .should("have.text", "Outbound");
  }

  outboundRequest() {
    return cy
      .get(".active > .list-unstyled > :nth-child(1) > a")
      .should("exist")
      .should("have.text", "Outbound Request");
  }

  pickList() {
    return cy
      .get(".active > .list-unstyled > :nth-child(2) > a")
      .should("exist")
      .should("have.text", "Pick List");
  }

  pickTask() {
    return cy
      .get(".active > .list-unstyled > :nth-child(3) > a")
      .should("exist")
      .should("have.text", "Pick Task");
  }

  packTask() {
    return cy
      .get(".active > .list-unstyled > :nth-child(4) > a")
      .should("exist")
      .should("have.text", "Pack Task");
  }

  shipment() {
    return cy
      .get(".active > .list-unstyled > :nth-child(5) > a")
      .should("exist")
      .should("have.text", "Shipment");
  }

  shipTask() {
    return cy
      .get(".active > .list-unstyled > :nth-child(6) > a")
      .should("exist")
      .should("have.text", "Ship Task");
  }

  outboundDocument() {
    return cy
      .get(".active > .list-unstyled > :nth-child(7) > a")
      .should("exist")
      .should("have.text", "Outbound Document");
  }

  //internal menu

  internal() {
    return cy
      .get(':nth-child(4) > [href="javascript:void(0);"] > .hide-menu')
      .should("exist")
      .should("have.text", "Internal");
  }

  binToBinRequest() {
    return cy
      .get(".active > .list-unstyled > :nth-child(1) > a")
      .should("exist")
      .should("have.text", "Bin To Bin Request");
  }

  binToBinTask() {
    return cy
      .get(".active > .list-unstyled > :nth-child(2) > a")
      .should("exist")
      .should("have.text", "Bin To Bin Task");
  }
  cycleCountTask() {
    return cy
      .get(".active > .list-unstyled > :nth-child(3) > a")
      .should("exist")
      .should("have.text", "Cycle Count Task");
  }

  cycleCountRequest() {
    return cy
      .get(".active > .list-unstyled > :nth-child(4) > a")
      .should("exist")
      .should("have.text", "Cycle Count Request");
  }

  inventoryAdjustment() {
    return cy
      .get(".active > .list-unstyled > :nth-child(5) > a")
      .should("exist")
      .should("have.text", "Inventory Adjustment");
  }

  replenishment() {
    return cy
      .get(".active > .list-unstyled > :nth-child(6) > a")
      .should("exist")
      .should("have.text", "Replenishment");
  }

  replenishmentRequest() {
    return cy
      .get(".active > .list-unstyled > :nth-child(7) > a")
      .should("exist")
      .should("have.text", "Replenishment Request");
  }

  //production menu
  production() {
    return cy
      .get(':nth-child(5) > [href="javascript:void(0);"] > .hide-menu')
      .should("exist")
      .should("have.text", "Production");
  }

  productionRequest() {
    return cy
      .get(".active > .list-unstyled > :nth-child(1) > a")
      .should("exist")
      .should("have.text", " Production Request ");
  }

  supplyToProductionTask() {
    return cy
      .get(".active > .list-unstyled > :nth-child(2) > a")
      .should("exist")
      .should("have.text", "Supply to Production Task");
  }

  receiveFromProductionTask() {
    return cy
      .get(".active > .list-unstyled > :nth-child(3) > a")
      .should("exist")
      .should("have.text", "Receive From Production Task");
  }

  productionPutAwayTask() {
    return cy
      .get(".active > .list-unstyled > :nth-child(4) > a")
      .should("exist")
      .should("have.text", "Put Away Task");
  }

  //container shipment menu

  containerShipment() {
    return cy
      .get(':nth-child(6) > [href="javascript:void(0);"] > .hide-menu')
      .should("exist")
      .should("have.text", "Container Shipment");
  }

  inboundShipmentContainer() {
    return cy
      .get(".active > .list-unstyled > :nth-child(1) > a")
      .should("exist")
      .should("have.text", "Inbound Shipment Container");
  }

  outboundShipmentContainer() {
    return cy
      .get(".active > .list-unstyled > :nth-child(2) > a")
      .should("exist")
      .should("have.text", "Outbound Shipment Container");
  }

  // item management menu

  itemManagement() {
    return cy
      .get(':nth-child(7) > [href="javascript:void(0);"] > .hide-menu')
      .should("exist")
      .should("have.text", "Item Management");
  }

  allItem() {
    return cy
      .get(".active > .list-unstyled > :nth-child(1) > a")
      .should("exist")
      .should("have.text", "All Item");
  }

  inventory() {
    return cy
      .get(".active > .list-unstyled > :nth-child(2) > a")
      .should("exist")
      .should("have.text", "Inventory");
  }

  // warehouse setup

  warehouseSetup() {
    return cy
      .get(':nth-child(8) > [href="javascript:void(0);"] > .hide-menu')
      .should("exist")
      .should("have.text", "Warehouse Setup");
  }

  warehouse() {
    return cy
      .get(".active > .list-unstyled > :nth-child(1) > a")
      .should("exist")
      .should("have.text", "Warehouse");
  }

  bin() {
    return cy
      .get(".active > .list-unstyled > :nth-child(2) > a")
      .should("exist")
      .should("have.text", "Bin");
  }

  userCart() {
    return cy
      .get(".active > .list-unstyled > :nth-child(3) > a")
      .should("exist")
      .should("have.text", "User Cart");
  }

  //equipment menu
  equipment() {
    return cy
      .get(':nth-child(9) > [href="javascript:void(0);"] > .hide-menu')
      .should("exist")
      .should("have.text", "Equipment");
  }

  pickingCart() {
    return cy
      .get(".active > .list-unstyled > :nth-child(1) > a")
      .should("exist")
      .should("have.text", "Picking Cart");
  }

  container() {
    return cy
      .get(".active > .list-unstyled > :nth-child(2) > a")
      .should("exist")
      .should("have.text", "Container");
  }

  //settings menu
  settings() {
    return cy
      .get(':nth-child(10) > [href="javascript:void(0);"] > .hide-menu')
      .should("exist")
      .should("have.text", "Setting");
  }

  cycleCountGroup() {
    return cy
      .get(".active > .list-unstyled > :nth-child(1) > a")
      .should("exist")
      .should("have.text", "Cycle Count Group");
  }
  containerType() {
    return cy
      .get(".active > .list-unstyled > :nth-child(2) > a")
      .should("exist")
      .should("have.text", "Container Type");
  }
  containerStatus() {
    return cy
      .get(".active > .list-unstyled > :nth-child(3) > a")
      .should("exist")
      .should("have.text", "Container Status");
  }
  itemClass() {
    return cy
      .get(".active > .list-unstyled > :nth-child(4) > a")
      .should("exist")
      .should("have.text", "Item Class");
  }

  itemGroup() {
    return cy
      .get(".active > .list-unstyled > :nth-child(5) > a")
      .should("exist")
      .should("have.text", "Item Group");
  }
  unitOfMeasure() {
    return cy
      .get(".active > .list-unstyled > :nth-child(6) > a")
      .should("exist")
      .should("have.text", "Units of Measure");
  }
  userGroup() {
    return cy
      .get(".active > .list-unstyled > :nth-child(7) > a")
      .should("exist")
      .should("have.text", "User Group");
  }

  transportationType() {
    return cy
      .get(".active > .list-unstyled > :nth-child(8) > a")
      .should("exist")
      .should("have.text", "Transportation Type");
  }

  boxType() {
    return cy
      .get(".active > .list-unstyled > :nth-child(9) > a")
      .should("exist")
      .should("have.text", "Box Type");
  }

  formLabel() {
    return cy
      .get(".active > .list-unstyled > :nth-child(10) > a")
      .should("exist")
      .should("have.text", "Form/Label");
  }
}

export default Sidebar;
