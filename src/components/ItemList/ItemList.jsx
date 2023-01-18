import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items }) => {

  return (
      
      <div className="ItemList">
          { items.map( p =>
              <Item
                  key={p.id}
                  id={p.id} 
                  name={p.name} 
                  price={p.price} 
                  pictureUrl={p.pictureUrl}  
              />)
          }
      </div>
  )
}

export default ItemList