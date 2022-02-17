import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import axios from 'axios';

const API = "https://api.escuelajs.co/api/v1/products"

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    try {
      const response = await axios(API)
      setProducts(response.data)
    } catch(err) {
      console.log(err)
    }
  }, [])

	return (
		<section className="main-container">
			<div className="ProductList">
        {products.length > 0 && products.map(product => <ProductItem />)}
			</div>
		</section>
	);
}

export default ProductList;