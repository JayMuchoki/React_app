
const Itemcomponent = ({item}) => {
    
  return (
    <div>

        <li>{item.title}</li>
        <li>{item.author}</li>
        <li>{item.points}</li>
        <li>{item.objectID}</li><br /><hr />
    
    </div>
  )
}

export default Itemcomponent
