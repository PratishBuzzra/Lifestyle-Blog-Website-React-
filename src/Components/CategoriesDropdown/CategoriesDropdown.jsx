import React, { useState } from 'react'
import {Link} from "react-router-dom"
import './CategoriesDropdown.css'
const CategoriesDropdown = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <>
        <ul className={dropdown ? 'dropdown-menu clicked' : 'dropdown-menu'} onClick={()=>setDropdown(!dropdown)}> 
        <li> <Link to='/travels' className='dropdown-menu-item'>Travels</Link></li>
        <li><Link to='/technology' className='dropdown-menu-item'>Technology</Link></li>
        <li>  <Link to='/personaldevelopment' className='dropdown-menu-item'>Personal Development</Link></li>
        <li>  <Link to='/healthyfood' className='dropdown-menu-item'>Healthy Food</Link></li>
        </ul>
       
        
      
      
      
    </>
  )
}

export default CategoriesDropdown
