describe('Checking setup', () => {
  it('Loads the home page', () => {
    cy.visit('/')
    cy.contains('Pagar.me')
  })
})