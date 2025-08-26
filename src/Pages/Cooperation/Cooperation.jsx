import React from 'react'
import pb from "../../assets/pb.jpg";
import './CooperationStyles.css'
import Message from '../../Components/MessageForm/Message';

const Cooperation = () => {
  return (
    <div className='cooperation-component'>
      
      <div className='coop-content'>
      <div className='coop-desc'>
        <h3>Forms of Cooperation:</h3>
        <ul>
          <li>advertising banner</li>
          <li>sponsored blog post</li>
          <li>social media posts</li>
          <li>product reviews</li>
        </ul>

        <h3>Contact:</h3>
        <p>bajracharyapratish148@gmail.com</p>
      </div>
      <div className='coop-img'>
        <img src={pb} alt="img" />
      </div>
      </div>

      <div className='blog-stats'>
        <h3>Blog Statistics</h3>
        <p>This blog has grown into more than just a personal journal — it’s a space where stories connect, ideas resonate, and people come together over shared values.
Every number tells a story: the journeys taken, the moments shared, and the impact made through thoughtful content.

From cozy morning reads to thoughtful reflections and mindful living inspiration, each visitor, subscriber, and comment adds to a growing community that values simplicity, creativity, and connection.

Thank you for being part of this journey — your presence here truly matters.</p>
      </div>
<Message />
      
      
    </div>
  )
}

export default Cooperation
