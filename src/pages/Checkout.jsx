import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import Menu from '@components/Menu';

import AppContext from '../context/AppContext';

import "@styles/Checkout.scss"

const Checkout = () => {
  const { state } = useContext(AppContext)
  const today = new Date()
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{today.toLocaleDateString()}</span>
							<span>{state.cart.length}</span>
						</p>
						<p>$560.00</p>
					</div>
				</div>
				<OrderItem />
			</div>
		</div>
	);
}

export default Checkout;