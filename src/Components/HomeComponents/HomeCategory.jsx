import React from 'react'
import './HomeCategoryStyles.css'
import travelsImg from '../../assets/img3.jpg'
import technologyImg from '../../assets/img4.jpg'
import persoImg from '../../assets/img5.jpg'
import foodImg from '../../assets/img6.jpg'
import {Link} from "react-router-dom"

const HomeCategory = () => {
    const homeCategories = [
        {
        title: 'TRAVELS',
        image: travelsImg,
        text: 'Explore breathtaking destinations around the world. From hidden gems in Europe to exotic beaches in Asia, discover travel tips, itineraries, and cultural insights that inspire your next journey.',
        url: '/travels'
        },
         {
       title: 'TECHNOLOGY',
image: technologyImg, 
text: "Stay up-to-date with the latest in tech — from cutting-edge gadgets and smart home innovations to digital trends and everyday tools that enhance your life. Discover tips, reviews, and insights that make technology accessible and inspiring.",
             url: '/technology'
        },
         {
        title: 'PERSONAL DEVELOPMENT',
        image: persoImg,
        text: "Unlock your full potential through goal setting, productivity hacks, and mindful living. Learn how to build habits, stay focused, and continuously grow into your best self.",
         url: '/personaldevelopment'
        },
         {
        title: 'HEALTHY FOOD',
        image: foodImg,
        text: "Eat well and feel great with our healthy recipes, nutrition tips, and meal planning ideas. Discover how simple ingredients can lead to delicious and nourishing dishes.",
         url: '/healthyfood'
        },
]
  return (
    <div className='home-category'>
        <h2 className='cat-head'>Categories</h2>
        <div className='cat-container'>
            {
                homeCategories.map((cat, index)=> (
                    <div className='cat-card' key={index}>
                        <div className='cat-img-container'>
                        <img src={cat.image} alt={cat.title} />

                        <div className='cat-title'><Link to={cat.url} className='cato-link'><h3>{cat.title}</h3></Link></div>
                        </div>
                        <p className='cat-text'>{cat.text}</p>

                    </div>
                ))
            }

        </div>

      
    </div>
  )
}

export default HomeCategory
