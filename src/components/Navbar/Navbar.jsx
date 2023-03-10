import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';


const Navbar = () => {

  const[open, setOpen] = useState(false);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="itemF">
            <img src="/images/flag.png" alt=''/>
            <ArrowDropDownIcon/>
          </div>
          <div className="itemF">
            <span>USD</span>
            <ArrowDropDownIcon/>
          </div>
          <div className="item">
            <Link className='link' to="/products/1">Jackets</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Helmets</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Boots & Gloves</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to="/">MX Motor Toys</Link>
        </div>
        <div className="right">
        <div className="item">
          <Link className='link' to="/">Homepage</Link>
        </div>
        <div className="item">
          <Link className='link' to="/">About</Link>
        </div>
        <div className="item">
          <Link className='link' to="/">Contact</Link>
        </div>
        <div className="item">
          <Link className='link' to="/">Stores</Link>
        </div>
        <div className="icons">
          <SearchOutlinedIcon/>
          <Link className='link' to="/login"><Person2OutlinedIcon/></Link>
          <FavoriteBorderOutlinedIcon/>
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
            <ShoppingCartOutlinedIcon/>
            <span>0</span>
          </div>
        </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar