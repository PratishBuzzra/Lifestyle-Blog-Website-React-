import React from 'react'
import {Link} from "react-router-dom"

import './BlogData.css'
const BlogsData = ({blogId,blogCategory, blogImg, blogTitle, blogDate, blogText}) => {
  return (
    <div className='blog-container'>
      <div className="blog-inner">
        <div className='blog-img'>
            <img src={blogImg} alt="img" />
        </div>
        <div className='blog-content'>
            <h3 className='blog-title'>{blogTitle}</h3>
            <p className='blogDate'>{blogDate}</p>
            <p className='blog-text'>{blogText}</p>
        </div>
        <Link to={`/blog/${blogCategory}/${blogId}`} className='more-link'>Read more</Link>
      </div>
    </div>
  )
}

export default BlogsData
