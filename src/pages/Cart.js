import React from 'react';
import "../styles/Cart.css"
import { Link } from "react-router-dom";
const Cart=({ cart, clearCart })=> {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} style={{ width: 50, marginRight: 10 }} />
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={clearCart}>Clear Cart</button>
          <Link to="/login-page"><button type='submit'>Buy</button></Link>
        </>
      )}
    </div>
  );
}

export default Cart;
