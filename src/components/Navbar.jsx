import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Himanshu Apparel Store</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/shirts">Shirts</Link>
          <Link className="nav-link" to="/pants">Pants</Link>
          <Link className="nav-link" to="/shoes">Shoes</Link>
          <Link className="nav-link" to="/cart">Cart</Link>
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
