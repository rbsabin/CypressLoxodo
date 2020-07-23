import UserLogin from "./page-objects/user/user-login.po"
import AdminLogin from "./page-objects/admin/admin-login.po"
import TopBar from "./page-objects/user/topbar.po";

Cypress.Commands.add("login", () => {
  var userLogin = new UserLogin();
  userLogin.visit();
  userLogin.validLogin();
})

Cypress.Commands.add("logout", () => {
  var topbar = new TopBar();
  topbar.logout();
})


Cypress.Commands.add("adminLogin", () => {
  var adminLogin = new AdminLogin();
  adminLogin.visit();
  cy.wait(2000);
  adminLogin.validLogin();
})


Cypress.Commands.add('upload_file', (fileName, fileType = ' ', selector) => {
  cy.get(selector).then(subject => {
    cy.fixture(fileName, 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then(blob => {
        const el = subject[0]
        const testFile = new File([blob], fileName, { type: fileType })
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(testFile)
        el.files = dataTransfer.files
      })
  })
})



