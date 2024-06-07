import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import ShoesMen from "../pages/ShoesMen";
import Admin from "../pages/Admin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="Shop/:id" element={<ProductDetails />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Checkout" element={<Checkout />} />
      <Route path="ShoesMen" element={<ShoesMen />} />
      <Route path="Admin" element={<Admin />} />
    </Routes>
  );
};

export default Routers;
