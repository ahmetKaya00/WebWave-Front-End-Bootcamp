import React, { createContext, useState } from "react";
import alertify from "alertifyjs";

const CartContext = createContext();

export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);


const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    alertify.success(`${product.title} added to cart!`);
}
const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(product => product.id !== id));
    alertify.error('Product removed from cart.');
};

const clearCart = () => {
    setCart([]);
    alertify.error('Cart cleared.');
}
return(
    <CartContext.Provider value={{cart, addToCart, removeFromCart,clearCart}}>
        {children}
    </CartContext.Provider>
);
}
export default CartContext;