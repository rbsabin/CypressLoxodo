/// <reference types="Cypress" />

import Sidebar from "../../support/page-objects/user/sidebar.po"

describe('Sidebar Menu', () => {
  var sidebar = new Sidebar();
  before(() => {
    cy.login();
  })

  after(() => {
    cy.logout();
  })


  it("to validate dashboard menu", () => {
    sidebar.dashboard();
  });

  it("to validate the components of inbound menu", () => {
    sidebar.inbound().click();
    cy.wait(1000);
    sidebar.inboundRequest();
    sidebar.receiveTask();
    sidebar.inboundPutAwayTask()
    sidebar.inboundDocument();
  })

  it("to validate the components of outbound menu", () => {
    sidebar.outbound().click();
    cy.wait(1000);
    sidebar.outboundRequest();
    sidebar.pickList();
    sidebar.pickTask();
    sidebar.packTask();
    sidebar.shipment();
    sidebar.shipTask();
    sidebar.outboundDocument();
  })

  it("to validate the components of internal menu", () => {
    sidebar.internal().click();
    cy.wait(1000);
    sidebar.binToBinRequest();
    sidebar.binToBinTask();
    sidebar.cycleCountTask();
    sidebar.cycleCountRequest();
    sidebar.inventoryAdjustment();
    sidebar.replenishment();
    sidebar.replenishmentRequest();
  })

  it("to validate the components of production menu ", () => {
    sidebar.production().click();
    cy.wait(1000);
    sidebar.productionRequest();
    sidebar.supplyToProductionTask();
    sidebar.receiveFromProductionTask();
    sidebar.productionPutAwayTask();
  })

  it("to validate the components of container shipment menu", () => {
    sidebar.containerShipment().click();
    cy.wait(1000);
    sidebar.inboundShipmentContainer();
    sidebar.outboundShipmentContainer();
  })

  it("to validate the components of item management menu", () => {
    sidebar.itemManagement().click();
    cy.wait(1000);
    sidebar.allItem();
    sidebar.inventory();
  })

  it("to validate the components of warehouse menu", () => {
    sidebar.warehouseSetup().click();
    cy.wait(1000);
    sidebar.warehouse();
    sidebar.bin();
    sidebar.userCart();
  })

  it("to validate the components of equipment menu", () => {
    sidebar.equipment().click();
    cy.wait(1000);
    sidebar.pickingCart();
    sidebar.container();
  })

  it("to validate the component of setting menu", () => {
    sidebar.settings().click();
    cy.wait(1000);
    sidebar.cycleCountGroup();
    sidebar.containerType();
    sidebar.containerStatus();
    sidebar.itemClass();
    sidebar.itemGroup();
    sidebar.unitOfMeasure();
    sidebar.userGroup();
    sidebar.transportationType();
    sidebar.boxType();
    sidebar.formLabel();
  })



})