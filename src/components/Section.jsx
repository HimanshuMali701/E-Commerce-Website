import React from "react";
import ProductCard from "./ProductCard";

const Section = ({ title, products }) => {
  return (
    <div className="container mt-4">
      <h2>{title}</h2>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Section;
