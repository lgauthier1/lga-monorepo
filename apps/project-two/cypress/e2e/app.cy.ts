describe('App', () => {
  it('increments the counter', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#helloWorld-button').should('be.visible')
    cy.get('#helloWorld-button').click({ force: true})
    cy.get('#helloWorld-button').contains('count is 1')
  })
})
