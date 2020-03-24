<?php
/**
 * Pagar.me My Account actions
 *
 * @package WooCommerce_Pagarme/Frontend
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * WC_Pagarme_Admin_Order class.
 */
class WC_Pagarme_Admin_Order {

	/**
	 * Initialize my account actions.
	 */
	public function __construct() {
		add_filter( 'woocommerce_order_item_add_action_buttons', array ( $this, 'add_capture_button' ), 10, 2 );
	}

	/**
	 * Add capture button in Admin Orders section.
	 *
	 * @param array    $actions Actions.
	 * @param WC_Order $order   Order data.
	 *
	 * @return array
	 */
	public function add_capture_button( $order ) {
		if ( 'pagarme-credit-card' !== $order->get_payment_method() ) {
			return ;
		}

		// Display capture button for 'on-hold' orders
		if ( ! $order->has_status( array( 'on-hold' ) ) ) {
			return ;
		}

		echo '<button type="button" onclick="document.post.submit();" class="button generate-items">' . __( 'Capturar transação', 'woocommerce' ) . '</button>';
   }
}

new WC_Pagarme_Admin_Order();
