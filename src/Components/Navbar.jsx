import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import logo from './image/logo.jpg'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cart}=useSelector((state)=>state)

  return (
    <div className='navbar'>
      <div className='navSection'>
        <NavLink to="./"><img src={logo} alt=''/></NavLink>
        <div className='cartSection'>
            <NavLink to="/"><p className='para' style={{margin: '25px'}}>Home</p></NavLink>
            <NavLink to="./Cart"><FaShoppingCart /><sup style={{fontSize:'10px'}}>{cart.length>0 ? cart.length : ''}</sup></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
