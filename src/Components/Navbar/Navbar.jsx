import React from 'react'
import './NavbarStyles.css'
import {Link} from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import CategoriesDropdown from '../CategoriesDropdown/CategoriesDropdown';


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)
  return (
    <nav className='navbar-items'>
        <h1 className='navbar-logo'>Lifestyle Blogs</h1>

        <div className='menu-icon'>
            {menu ? (<IoMdClose onClick={()=>setMenu(false)} className='hamicon'/>) : (<IoMenu onClick={()=>setMenu(true)} className='hamicon'/>)}
            
        </div>

        <ul className={menu ? 'navmenu active' : 'navmenu'}>
            <li>
                <Link to='/' className='nav-links'>Home</Link>
            </li>
            <li onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)} onClick={() => menu && setDropdown((prev) => !prev)}>
                <Link   className='nav-links'>Categories</Link>
                { dropdown && <CategoriesDropdown />}
               
            </li>
            <li>
                <Link to='/gallery' className='nav-links'>Gallery</Link>
            </li>
            <li>
                <Link to='/about' className='nav-links'>About Me</Link>
            </li>
            <li>
                <Link to='/cooperation' className='nav-links'>Cooperation</Link>
            </li>
        </ul>

        
    </nav>
  )
}

export default Navbar
