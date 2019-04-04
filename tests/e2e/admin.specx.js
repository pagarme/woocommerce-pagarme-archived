describe( 'Run a pull', function() {
    const baseURL = Cypress.env( "site" ).url
    const baseURLAdmin = baseURL + '/wp-admin'
  
    beforeEach( function() {
      cy.visit( baseURL + '/wp-login.php' )
      cy.wait( 1000 )
      cy.get( '#user_login' ).type( Cypress.env( "wp_user" ) )
      cy.get( '#user_pass' ).type( Cypress.env( "wp_pass" ) )
      cy.get( '#wp-submit' ).click();
    } );
  
    it( 'Config plugin', function() {
      cy.visit( baseURLAdmin + '/admin.php?page=wc-settings&tab=checkout&section=pagarme-credit-card' )
  
      cy
        .get("#woocommerce_pagarme_credit-card_api_key")
        .as("ak_test_")
    } );
  } );