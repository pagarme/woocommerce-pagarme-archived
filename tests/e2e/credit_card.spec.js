import checkoutData from './fixtures/data';

context('Credit card', () => {
  before(() => {
    cy.visit('/product/hoodie-with-zipper/')

    cy.contains('Comprar')
      .click()

    cy.contains('Ver carrinho')
      .click()

    cy.contains('Fechar compra')
      .click()

    it('should be redirected to checkout page', () => {
      cy.url().should('include', '/finalizar-compra')
      cy.contains('Detalhes de cobrança')
    })
  })

  describe('Basic purchase workflow', () => {

    it('should be redirected to checkout page', () => {
      cy
        .get('#billing_first_name')
        .type(checkoutData.customer.name)
        .should("have.value", checkoutData.customer.name)
        
      cy
        .get('#billing_last_name')
        .type(checkoutData.customer.lastname)
        .should("have.value", checkoutData.customer.lastname)
        
      cy
        .get('#billing_cpf')
        .type(checkoutData.customer.documents[0].number)
        .should("have.value", "306.211.430-49")

      cy
        .get('#billing_postcode')
        .type(checkoutData.address.zipcode)
        .should('have.value', checkoutData.address.zipcode)

      cy
        .get('#billing_address_1')
        .type(checkoutData.address.street)
        .should('have.value', checkoutData.address.street)
        
      cy
        .get('#billing_number')
        .type(checkoutData.address.street_number)
        .should('have.value', checkoutData.address.street_number)

      cy
        .get('#billing_neighborhood')
        .type(checkoutData.address.neighborhood)
        .should('have.value', checkoutData.address.neighborhood)

      cy
        .get('#billing_city')
        .type(checkoutData.address.city)
        .should('have.value',checkoutData.address.city)

      cy
        .get('#billing_phone')
        .type(checkoutData.customer.phone_numbers[0])
        .should('have.value', checkoutData.customer.phone_numbers[0])

      cy
        .get('#billing_cellphone')
        .type(checkoutData.customer.phone_numbers[0])
        .should('have.value', checkoutData.customer.phone_numbers[0])

      cy
        .get('#billing_email')
        .type(checkoutData.customer.email)
        .should("have.value", checkoutData.customer.email)
    })
  })
})