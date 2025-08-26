import React from 'react'
import { useParams } from 'react-router-dom'
import { allBlogs } from '../../Datas/AllBlogs';
import './BlogDetailsStyles.css'
const BlogDetails = () => {
    const {category, id} = useParams();
    const blog = allBlogs.find((item)=>item.category === category && item.id === parseInt(id))
    if (!blog) return <p>Blog not found.</p>;
  return (
        <>
      <div className='blog-details-img'>
              <img src={blog.src} alt="img" className='detail-img'/>
          </div>
          <div className='blog-detail-container'>
            <p className='deltail-date'>{blog.date}</p>
            <h3 className='detail-heading'>{blog.title}</h3>
            <p className='blog-para'>{blog.contentparaI}</p>
            <div className='blog-img-wrapper'>
                <img src={blog.srcII} alt="img"/>
            </div>
            <h3 className='blog-subheading'>{blog.subTitle}</h3>
            <p className='blog-para'>{blog.contentparaII}</p>
             <div className='blog-img-wrapper'>
                <img src={blog.srcIII} alt="img" />
            </div>

          </div>
    </>

  )
}

export default BlogDetails
