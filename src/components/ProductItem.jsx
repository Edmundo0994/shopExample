import React, { useContext } from 'react';
import '@styles/ProductItem.scss';

import AppContext from '../context/AppContext';

import btAddToCart from "@icons/bt_add_to_cart.svg"
import iconClose from "@icons/icon_close.png"


const ProductItem = ({ product }) => {
  const { addToCart, state } = useContext(AppContext)
  
  const handleClick = (item) => {
    if(state.cart.find(element => element.id === item.id)){
      alert("Ya agregaste ese elemento al carrito")
    } else {
      addToCart(item)
    }
  }

	return (
		<div className="ProductItem">
			<img src={product.images.length > 1 ? product.images[0] : iconClose } alt={product.title} />
			<div className="product-info">
				<div>
					<p>$ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={btAddToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;