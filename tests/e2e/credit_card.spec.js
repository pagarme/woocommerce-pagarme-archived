describe( 'Credit card', () => {
  // beforeEach( function() {
  // })

  it('Add to Cart', () => {
    cy.visit('/product/hoodie-with-zipper/')

    cy.contains('Hoodie with Zipper')
    cy.contains('Comprar')
      .click()

    cy.contains('Ver carrinho')
      .click()

    cy.contains('Hoodie with Zipper')
    cy.contains('Fechar compra')
      .click()

    // cy.get('form')
    //   .submit()
  })
})