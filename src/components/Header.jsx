import React, { useState, useContext } from 'react'
import '@styles/Header.scss'
import Menu from '@components/Menu'
import MyOrder from '@containers/MyOrder'

import { Link } from 'react-router-dom'

import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'

import AppContext from '../context/AppContext'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const { state } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleToggleCart = () => {
    setToggleOrders(!toggleOrders)
  }

  return (
    <>
      <nav>
        <img src={menu} alt="menu" className="menu" />
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" />
          <ul>
            <li>
              <Link to="/shopExample">All</Link>
            </li>
            <li>
              <Link to="/shopExample">Clothes</Link>
            </li>
            <li>
              <Link to="/shopExample">Electronics</Link>
            </li>
            <li>
              <Link to="/shopExample">Furnitures</Link>
            </li>
            <li>
              <Link to="/shopExample">Toys</Link>
            </li>
            <li>
              <Link to="/shopExample">Others</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              example@gmail.com
            </li>
            <li className="navbar-shopping-cart" onClick={handleToggleCart}>
              <img src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 && <div>{state.cart.length}</div>}
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
      </nav>
      {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>}
    </>
  );
}

export default Header;