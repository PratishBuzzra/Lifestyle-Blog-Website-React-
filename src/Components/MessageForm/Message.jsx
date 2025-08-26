import React from 'react'
import './MessageStyles.css'
const Message = () => {
  return (
    <div className='msg-form-container'>
        <form>
            <label htmlFor="email">Your e-mail:</label>
            <input type="email" id='email' placeholder='address@email.com' />
            <label htmlFor="msg">Message:</label>
            <textarea id="msg" placeholder='Enter your message here' rows="6"></textarea>
            <button className='msg-btn'>Send</button>
        </form>
      
    </div>
  )
}

export default Message
