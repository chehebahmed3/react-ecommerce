// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {decrementItem, delCart, incrementItem,} from '../../redux/action';



function Cart() {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  return (
    <div>
    <Link to="/" className="cart_text_NavLink">
    Continue Shopping
  </Link>
    <div className='cart_container'>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div className='cart_subcontainer' key={item.id}>
            <img className='cart_image' src={item.image}></img>
              <div className='cart_subsubcontainer'>
              <p className='cart_title'>{item.title}</p>
              <div>
             <button className='decrement_button' onClick={() => dispatch(decrementItem(item.id))}>-</button>
              <button className='increment_button' onClick={() => dispatch(incrementItem(item.id))}>+</button>
              <span>{item.qty}</span>
              {console.log(parseInt(item.qty))}
                Price: ${item.price * item.qty}  
              </div>
              <button className='cart_button_remove' onClick={() => dispatch(delCart(item))}>Remove</button>
              <Link to='/login' className='cart_button_buy'>
              Buy
              </Link>
              </div>
            </div>
          ))}
         
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
     </div>
    </div>
  );
}

export default Cart;
