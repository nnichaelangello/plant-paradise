import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector(state => state.cart.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart" className="cart-icon" />
          <span>{itemCount}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;