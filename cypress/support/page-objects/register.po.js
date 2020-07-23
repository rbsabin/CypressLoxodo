/// <reference types="Cypress" />
class RegisterUser {
  visit() {
    cy.visit("/register");
    cy.location("pathname", { timeout: 5000 }).should("include", "register")
    cy.get('.fs-16').should('exist').should('have.text', 'REGISTRATION')
    cy.get('.d-block').should('exist').should('have.text', 'photoUpload Logo')
  }

  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  register() {
    cy.fixture("data").then((data) => {
      var user = this.makeid(5);
      var company = this.makeid(10);
      cy.get('#mat-input-0').should('exist').type(company);
      cy.get('#mat-input-1').should('exist').type(company + '@sevadev.com');
      cy.get('#mat-input-2').should('exist').type(1526555);
      cy.get('#mat-input-3').should('exist').type('Chawahil');
      cy.get('#mat-input-4').should('exist').type('Bhakteko Pul');
      cy.get('#mat-input-5').should('exist').type('Kathmandu');
      cy.get('#mat-input-6').should('exist').type('Bagmati');
      cy.get('#mat-input-7').should('exist').type(33700);
      cy.get('#mat-input-8').should('exist').type(977);
      cy.get('#mat-input-9').should('exist').type(user);
      cy.get('#mat-input-10').should('exist').type(user + '@sevadev.com');
      cy.get('#mat-input-11').should('exist').type('password');

    })
  }

  clickRegisterButton() {
    cy.get('input#termsAndCondition-input').should('exist').check({ force: true });
    cy.get('.btn-primary').should('exist').click();
  }

}

export default RegisterUser;