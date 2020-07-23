/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Random from "../../../support/page-objects/random.po"
import AllItem from "../../../support/page-objects/user/itemManagement/allItem.po";
import TopBar from "../../../support/page-objects/user/topbar.po";
context('All Item', () => {
  var sidebar = new Sidebar();
  var topbar = new TopBar()
  var random = new Random();
  var allItem = new AllItem()


  beforeEach(() => {
    cy.login()
  })

  afterEach(() => {
    cy.logout()
  })


  specify('Visits and validates the all item page', () => {
    sidebar.itemManagement().click()
    sidebar.allItem().click()
    cy.wait(1000)
    cy.url().should("include", "items");
    allItem.searchIcon()
    allItem.importButton()
    allItem.addButton()
    allItem.titleBar()
    cy.wait(1000);
    allItem.body().then(($body) => {
      if ($body.find("table").length > 0) {
        cy.log("Table is found");
        allItem.tableHeader();
        allItem.tableColumnHeader(1).should("have.text", " Code ");
        allItem.tableColumnHeader(2).should("have.text", " Name ");
        allItem.tableColumnHeader(3).should("have.text", " Base UOM ");
        allItem.tableColumnHeader(4).should("have.text", " Batched/Serialized ");
        allItem.tableColumnHeader(5).should("have.text", " Date Added ");
        allItem.tableColumnHeader(6).should("have.text", "Status");
        allItem.tableColumnHeader(7).should("have.text", "Action");
        allItem.tableColumnHeader(0).should("exist");
      } else {
        cy.log("Table is not found");
        allItem.noRecords().should("include.text", "No items found.");
      }
     
    });
  });
    specify("Validates the add Button popup items", () => {
    //this block validates the component of the add item popup verifying the components of the popup add item module
    sidebar.itemManagement().click()
    sidebar.allItem().click()
    allItem.addButton().click()
    allItem.itemInformationtext()
    allItem.uomConversionText()
    allItem.uomCharacteristicsText()
    allItem.itemInformationmodule1()
    allItem.itemInformationmodule2()
    allItem.itemInformationmodule3()
    allItem.itemCodeInputBox()
    allItem.itemNameInputBox()
    allItem.cancelButton().click() //cancelling the popup
    allItem.cancelConfirmButton().click() //confirming the cancellation of the popup
  })  
   /*  specify("validates the import button drop down", () => {
    sidebar.itemManagement().click()
    sidebar.allItem().click()
    //verifies the drop down list of the import button
    allItem.importButton().click()
    allItem.importDropDownitem1()
    allItem.importDropDownitem2()
    allItem.importDropDownitem3()
    allItem.importDropDownitem4()
    sidebar.allItem().click()
    
  })  */ 
   specify("validates the addition of new item", () => {
    sidebar.itemManagement().click()
    sidebar.allItem().click()
    allItem.addButton().click()
    allItem.itemCodeInputBox()
    allItem.itemCodeInputBox().type(random.number(6));
    allItem.itemNameInputBox()
    allItem.itemNameInputBox().type(random.stringLowercase(6));
    allItem.baseUomDropDown()
    allItem.baseUomDropDowInput().then(($select) => {
      var optionsCount = $select.find("option").length;
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(2, optionsCount);
        allItem
          .baseUomDropDowInputOPtion()
          .eq(optionKey)
          .invoke("val")
          .then((uom) => {
            allItem.baseUomDropDowInput().select(uom);
          });
      }
    });
    allItem.itemInformationProceedButton()
    allItem.itemInformationProceedButton().click()
    allItem.uomCOnversionProceedButton()
    allItem.uomCOnversionProceedButton().click()
    allItem.uomCharacteristicsAddButton()
    allItem.uomCharacteristicsAddButton().click()
  }) 
})