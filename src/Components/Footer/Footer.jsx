import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './FooterStyles.css'
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <div className='footer-container'>
        <ul className='footer-menu'>
            <li>
                <Link to='/' className='foot-links'>Home</Link>
            </li>
            <li>
                <Link to='/gallery' className='foot-links'>Gallery</Link>
            </li>
            <li>
                <Link to='/about' className='foot-links'>About Me</Link>
            </li>
            <li>
                <Link to='/cooperation' className='foot-links'>Cooperation</Link>
            </li>
        </ul>
        <div className='footer-icons'>
            <FaFacebookSquare className='foot-icon'/>
            <FaInstagramSquare className='foot-icon' />
            <FaSquareXTwitter className='foot-icon' />
            
        </div>
      
    </div>
  )
}

export default Footer
