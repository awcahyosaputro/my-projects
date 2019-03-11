Cypress.on('fail', (err, runnable) => {
    debugger
  })

describe('GMSCP Keppel Testing', () => {

    it('Navigate to the website', () => {
        cy.visit('http://192.168.15.17/GMSCPKEPPELTEST/Login')
        cy.window().then((win) => {
            // win is the remote window
            // of the page at: http://localhost:8080/app
        })
    })
})