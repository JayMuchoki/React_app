import Itemcomponent from "./item.component";
import React from "react";

const Listcomponent = ({List}) => {

  return (
    <div>
      {List.map((data)=>(
        <Itemcomponent key={data.objectID} item={data}/>
        
      ))}
    </div>
  )
}

export default Listcomponent
