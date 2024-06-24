import React from 'react'
import { products } from './utils/productlist'
import "../App.css"
const ProductlistComponent = (props) => {
  return (
    <div>
        {products.filter((item) => item.name.toLowerCase().includes(props.searchproduct.toLowerCase())).map((item)=>(
            <div className='card' key={item.id}>
              <h2>{item.name}</h2>
              <h3>{item.category}</h3>
              <h4>{item.price}</h4>
            </div>
        ))}
     
    </div>
  )
}

export default ProductlistComponent
