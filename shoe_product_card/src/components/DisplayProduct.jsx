import React, { useState, useContext } from 'react';
import { CartContext } from './cartcontext';
import redShoe from '../assets/red-shoe.jpg';
import blackShoe from '../assets/black-shoe.jpg';
import orangeShoe from '../assets/orange-shoe.jpg';
import CartItems from './cartitem'; 

const DisplayProductComponent = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const { addToCart } = useContext(CartContext);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    const productToAdd = { ...product, color: selectedColor };
    addToCart(productToAdd);
  };

  const getShoeImage = () => {
    switch (selectedColor.toLowerCase()) {
      case 'red':
        return redShoe;
      case 'black':
        return blackShoe;
      case 'orange':
        return orangeShoe;
      default:
        return redShoe; // Default image if color not matched
    }
  };

  return (
    <div className='cardview' style={{ display: 'flex', flexDirection: 'row' }}>
      <div className='carview0' style={{ flex: 4, backgroundColor: 'lightblue' }}>
        <div className='cardview1' style={{ backgroundColor: selectedColor.toLowerCase(), padding: '20px', display: 'flex', flexDirection: 'row', gap: '20px', borderRadius: '20px', width: '50%' }}>
          <div className="cardproduct" style={{ border: 'solid 2px white', borderRadius: '20px' }}>
            <img src={getShoeImage()} alt={`${product.title} in ${selectedColor}`} style={{ width: '200px' }} />
          </div>
          <div>
            <h2>{product.title}</h2>
            <p>{product.collection}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {product.availableColors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                style={{ backgroundColor: color.toLowerCase() }}
              >
                {color}
              </button>
            ))}
            <button onClick={handleAddToCart} style={{ marginTop: '20px' }}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className='cardview2' style={{ flex: 1, backgroundColor: 'grey', borderRadius: '20px' }}>
        {/* Render the CartItems component */}
        <CartItems />
      </div>
    </div>
  );
};

export default DisplayProductComponent;
