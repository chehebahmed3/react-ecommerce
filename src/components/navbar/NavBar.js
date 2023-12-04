import React from 'react'
import Utilisateur from '../../assets/utilisateur.png';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <header>
        <h1 className='header_text'><a href=''>Eorder</a></h1>
        <div className='nav_items'>
        <ul className='nav_items'>
        <li className='li_products'>
       <Link to="/">Products</Link>
        </li>
        <li className='li_about'>
        <Link to="/about">About</Link>
        </li>
        </ul>
        </div>
       <Link to='/login' className='acount_item'>
       <img className='acount_image' src={Utilisateur}>
        </img>
       </Link>
    </header>
  )
}

export default NavBar