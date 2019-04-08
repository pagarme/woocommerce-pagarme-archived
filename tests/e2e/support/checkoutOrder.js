import checkoutData from '../fixtures/data'

const addToCart = () => {
  cy.log('Adding product to cart...')

  cy.visit('/product/hoodie-with-zipper/')
  cy.contains('Comprar').click()

  cy.log('Product added successfully.')
}

const goToCheckoutPage = () => {
  cy.log('Going to checkout page...')
  
  cy.contains('Ver carrinho').click()
  cy.contains('Fechar compra').click()

  cy.log('In checkout page.')
}

const fillFormData = function() {
  cy.log('Filling customer data...')

  cy
    .get('#billing_first_name')
    .type(checkoutData.customer.name)
    
  cy
    .get('#billing_last_name')
    .type(checkoutData.customer.lastname)
  cy
    .get('#billing_persontype')
    .select('Pessoa Física', {force: true})

  cy
    .get('#billing_cpf')
    .type(checkoutData.customer.documents[0].number)

  cy
    .get('#billing_state')
    .select(checkoutData.address.state.toUpperCase(), {force: true})

  cy
    .get('#billing_postcode')
    .type(checkoutData.address.zipcode)

  cy
    .get('#billing_address_1')
    .type(checkoutData.address.street)
    
  cy
    .get('#billing_number')
    .type(checkoutData.address.street_number)

  cy
    .get('#billing_neighborhood')
    .type(checkoutData.address.neighborhood)

  cy
    .get('#billing_city')
    .type(checkoutData.address.city)

  cy
    .get('#billing_country')
    .select(checkoutData.address.country.toUpperCase(), {force: true})

  cy
    .get('#billing_phone')
    .type(checkoutData.customer.phone_numbers[0])

  cy
    .get('#billing_cellphone')
    .type(checkoutData.customer.phone_numbers[0])

  cy
    .get('#billing_email')
    .type(checkoutData.customer.email)

  cy.log('Form filled successfully.')
}

beforeEach(() => {
  addToCart()
  goToCheckoutPage()
  fillFormData()
})