import React from 'react'
import './GalleryStyles.css'
import { botImg, topImages } from '../../Datas/GalleryData'



const Gallery = () => {
  return (
    <div className='gallery-container'>
      <h1 className='gallery-title'>Gallery</h1>
      <div className='gallery-grid'>
          {topImages.map((item, index)=>(
        <div className='gallery-item large' key={index}>
            <img src={item} alt="img" loading='lazy'/>
        </div>
          ))}
          </div>
          <div className='gallery-item-bottom'>
            {botImg.map((item,index)=>(
              <img src={item} alt="img" key={index} loading='lazy'/>
            ))}

          </div>
      
    </div>
  )
}

export default Gallery
