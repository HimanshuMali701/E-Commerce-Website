import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-md-4">
      <div className="card">
        <img src={product.image} alt={product.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">₹{product.price}</p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
