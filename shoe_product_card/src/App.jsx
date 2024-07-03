import React from 'react';
import './App.css';
import DisplayProductComponent from './components/DisplayProduct';
import { initialProducts } from './initialproducts';
import { CartProvider } from './components/cartcontext';
function App() {

  return (
    <CartProvider>
      {initialProducts.map((product) => (
        <DisplayProductComponent key={product.productID} product={product}/>
      ))}
    </CartProvider>
  );
}

export default App;
