import React from 'react'

const HomeAboutData = ({title, textContent, image, classname}) => {
  return (
   <>
     <div className="text-content">
           <h3>{title}</h3>
           <p>
            {textContent}
           </p>
         </div>
         <div className={classname}>
           <img src={image} alt="img" />
         </div>
   </>
  )
}

export default HomeAboutData
