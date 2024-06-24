import React from 'react';
import './App.css';
import DisplayProductComponent from './components/DisplayProduct';
import { initialProducts } from './initialproducts';
function App() {

  return (
    <div>
      {initialProducts.map((productitem) => (
        <DisplayProductComponent key={productitem.productID} product={productitem} />
      ))}
    </div>
  );
}

export default App;
