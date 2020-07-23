///<reference types="Cypress"/>

class Inventory {
    titleBar() {
        return cy.get(".m0").should("exist");
    }
    searchIcon() {
        return cy.get('#mat-input-8').should("exist");
    }
    importButton() {
        return cy.get('.d-none > .border').should("exist");

    }
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
    importItemInventory() {
        return cy.get('.fs-18').should("exist")
    }

    downloadButton() {
        return cy.get(':nth-child(1) > .btn').should("exist")
    }
    uploadButton() {
        cy.get('.row > :nth-child(2) > .d-block').should("exist")
    }
    cancelButton() {
        return cy.get('.btn-default').should("exist")
    }

    okayCancelButton() {
        return cy.get('.swal2-confirm')
    }


}
export default Inventory;