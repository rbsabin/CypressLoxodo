/// <reference types="Cypress" />
import Sidebar from "../../../support/page-objects/user/sidebar.po"
import Random from "../../../support/page-objects/random.po"
import ReceiveTask from "../../../support/page-objects/user/Inbound/receive-task.po"
import TopBar from "../../../support/page-objects/user/topbar.po";
context('Inbound receiveTask', () => {
  var sidebar = new Sidebar();
  var topbar = new TopBar()
  var random = new Random();
  var receiveTask = new ReceiveTask()


  beforeEach(() => {
    cy.login()
  })

  // afterEach(() => {
  //   cy.logout()
  // })

  specify('Visits and validates the Receive Task page', () => {
    sidebar.inbound().click()
    sidebar.receiveTask().click()
    cy.wait(1000)
    topbar.warehouse().click()
    cy.wait(1000)
    topbar.warehouseOptions().then($select => {
      var optionsCount = $select.find('button').length
      cy.log(optionsCount)
      if (optionsCount > 0) {
        var optionKey = random.randomNumberBetween(0, optionsCount - 1)
        topbar.warehouseOption(optionKey).click()
      }
    })
    cy.wait(2000)
    receiveTask.titleBarIcon()
    receiveTask.titleBarTitleName().should('include.text', 'Receive Tasks')
    receiveTask.titleBarReveiveTasksButton()
    receiveTask.titleBarStatusButton()
    receiveTask.titleBarSearchBar()
    receiveTask.allZonesButton()
    // receiveTask.filterButton()
    // receiveTask.filterDropDown()
    receiveTask.body().then($body => {
      if ($body.find('table').length > 0) {
        receiveTask.tableHeader()
        receiveTask.tableColumnHeader(0).should('include.text', 'PO ID')
        receiveTask.tableColumnHeader(1).should('have.text', 'Customer')
        receiveTask.tableColumnHeader(2).should('have.text', 'Description')
        receiveTask.tableColumnHeader(3).should('have.text', 'Date Created')
        receiveTask.tableColumnHeader(4).should('have.text', 'Start Date')
        receiveTask.tableColumnHeader(5).should('have.text', 'Ship End Date')
        receiveTask.tableColumnHeader(6).should('have.text', 'Ship To')
        receiveTask.tableColumnHeader(7).should('have.text', 'Delivery')
        receiveTask.tableColumnHeader(8).should('have.text', 'Transpo')
        receiveTask.tableColumnHeader(9).should('have.text', 'Status')
        receiveTask.tableColumnHeader(10).should('include.text', 'Action')
      } else {
        receiveTask.noRecords().should('have.text', "When you have a task, it will be listed here.")
      }
    })
  })
})