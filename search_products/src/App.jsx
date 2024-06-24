import React ,{useState}from 'react'
import ProductlistComponent from './components/productlistComponent'
import Filtercomponent from './components/filtercomponent'

const App = () => {
  const [itemvalue,setitemvalue]=useState("")
  console.log(itemvalue);
  return (
    <div>
      <h1>Products</h1>
      <Filtercomponent  searchitem={itemvalue} setsearchitem={setitemvalue}/>
      <ProductlistComponent searchproduct={itemvalue}/>
    </div>
  )
}

export default App
