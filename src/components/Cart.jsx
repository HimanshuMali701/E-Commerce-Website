import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px" }} />
              <span>{item.title}</span>
              <span>₹{item.price}</span>
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
