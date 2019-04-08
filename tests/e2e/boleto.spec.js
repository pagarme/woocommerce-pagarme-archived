context('Boleto', () => {
  describe('Basic purchase workflow', () => {
    it('Order received', () => {
      cy
        .get('#payment_method_pagarme-banking-ticket')
        .next()
        .contains('Boleto bancário')
        .click()

      cy.server()
      cy.route('POST', '/?wc-ajax=checkout').as('orderReceived')
      cy.get('form.woocommerce-checkout').submit()
      cy.wait('@orderReceived').its('status').should('eq', 200)

      cy.url().should('include', '/finalizar-compra/order-received/')
      cy.contains('Pedido recebido')
    })
  })
})