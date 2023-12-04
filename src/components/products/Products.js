import React, { useContext, useEffect, useState} from 'react'
import { AppContext } from '../../App'
import { NavLink } from 'react-router-dom';

const Products = () => {
  
    const [itemesFilter,app,setApp]=useContext(AppContext);
    
  return (
    <>
    {itemesFilter.length > 0 && (
      <div className='card_item'>
      <div className="card__body">
        {itemesFilter.map(user => (
          <div className="card" key={user.id}>
          <img src={user.image} className="card__img" alt=''></img>
          <p>{user.title.substring(0,12)}</p>
          <h4 className='card-price-add'>US ${user.price}</h4>
          <NavLink to={`/product/${user.id}`} className="card_button">Add</NavLink>
          </div>
        ))}
      </div>
      </div>
    )}
  </>
  )
}

export default Products