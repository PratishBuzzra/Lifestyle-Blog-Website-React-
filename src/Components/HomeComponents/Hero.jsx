import React from 'react'
import img1 from '../../assets/heroimg.jpg';
import './HeroStyles.css'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={img1} alt="img" className='hero-img'/>
        <div className='hero-text' >
            <h1>My <br /> lifestyle <br /> blog</h1>
        </div>
      
    </div>
  )
}

export default Hero
