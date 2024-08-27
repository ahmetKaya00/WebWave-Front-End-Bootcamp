import React, {useState} from "react";
import { Link, NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container, Navbar, NavbarBrand, Nav, NavItem, Col, Row } from "reactstrap";
import CategoryList from './Components/CategoryList';
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';
import {categories, products} from './data/data';
import alertify from 'alertifyjs';




const App = () => {
  const [SelectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  
//Sepete Ürün Ekleme
const handleAddCart = (product) => {
  setCart([...cart, product]);
};

//Sepetten Ürün Çıkarma
const handleRemoveCart = (product) =>{
  setCart(cart.filter(item => item.id !== product.id));
};

//Sepeti Temizleme
const handleClearCart = () =>{
  setCart([]);
}

//Kategoriye göre ürün getirme
const filteredProducts = SelectedCategory ? products.filter(product => product.categoryId === SelectedCategory.id) : products;

  return (
    <Router>
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">E-Ticaret</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink tag={Link} to="/Cart">Sepet ({cart.length})</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Routes>
          <Route
          path="/"
          element={
            <Row>
              <Col sm="4">
              <CategoryList categories={categories} onSelectedCategory={setSelectedCategory}/>
              </Col>
              <Col sm="8">
              <ProductList products={filteredProducts} onAddToCart={handleAddCart}/>
              </Col>
            </Row>
          }
          />
          <Route
          path="/cart"
          element={
            <Cart cartItems={cart} onRemoveFromCart={handleRemoveCart} onClearCart={handleClearCart}/>
          }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
