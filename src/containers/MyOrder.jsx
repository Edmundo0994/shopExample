import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrders.scss';
import AppContext from '../context/AppContext'

import flechita from "@icons/flechita.svg"

const MyOrder = ({toggleOrders, setToggleOrders}) => {
  const { state } = useContext(AppContext)
  const sumaTotal = () => state.cart.reduce((acc, current) => acc + current.price, 0)
  return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
        <div className="order-content">
          {state.cart.map(product => <OrderItem product={product} key={`orderItem-${product.id}`}/>)}
        </div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumaTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;