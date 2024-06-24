import React from 'react'

const Filtercomponent = (props) => {
    
    const handlechange=(event) =>(
       props.setsearchitem(event.target.value)
    )
  return (
    <div>
        <label htmlFor="items">Enter product:</label>
      <input id='items' type="text" onChange={handlechange} value={props.searchitem} />
    </div>
  )
}

export default Filtercomponent
