import React from "react";
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import CardPage from './pages/CardPage';
import ProductPage from './pages/ProductPage';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarComponent/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/category/:category" element={<Home/>}></Route>
            <Route path="/product/:id" element={<ProductPage/>}></Route>
            <Route path="/cart" element={<CardPage/>}></Route>
          </Routes>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
