import React from 'react'
import Search from '../search/Search';
import Panier from '../../assets/panier.png';
import NavSortByCategory from './NavSortByCategory';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function NavItem() {
    const state=useSelector((state)=>state.handleCart)
  return (
    <>
    <nav className='nav_bottom'>
    <NavSortByCategory>
     
    </NavSortByCategory>
    <Search/>
    <Link to="/cart" className='cart_ietm' href=''>
    <img className='cart_image' src={Panier} alt=''/>
    <p className='cart_text'>Cart ({state.length})</p>
    </Link>
    </nav>
    </>
  )
  
}

export default NavItem