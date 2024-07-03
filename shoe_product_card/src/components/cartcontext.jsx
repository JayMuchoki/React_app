// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (cartItem) => cartItem.title === item.title && cartItem.color === item.color
      );
      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (cartItem) => cartItem.title !== item.title || cartItem.color !== item.color
      )
    );
  };

  const updateQuantity = (item, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((cartItem) => {
        if (cartItem.title === item.title && cartItem.color === item.color) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      });
      return updatedItems.filter((cartItem) => cartItem.quantity > 0);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
