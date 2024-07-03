import React, { useState } from 'react'

const Setcount = () => {
    const [count,setcount]=useState(0)
  return (
    <div>
        <h2>Count is:{count}</h2>
      <button onClick={() => {
        setcount(count+1)
      }}>add</button>
    </div>
  )
}

export default Setcount
