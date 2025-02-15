import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import { products } from "./data/products";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./styles.css";


const App = () => {
  return (
    <div className="container text-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shirts" element={<Section title="Shirts" products={products.shirts} />} />
        <Route path="/pants" element={<Section title="Pants" products={products.pants} />} />
        <Route path="/shoes" element={<Section title="Shoes" products={products.shoes} />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
