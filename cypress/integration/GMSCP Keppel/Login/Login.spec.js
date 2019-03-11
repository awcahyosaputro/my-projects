Cypress.on('fail', (err, runnable) => {
    debugger
  })

describe('GMSCP Keppel Testing', () => {

    it('Login to application', () => {
        cy.get('#txtUserName').type("kgasadmin.em")
        cy.get('#txtPassword').type("password1000")
        cy.get('#btnLogin').click()
    })
})