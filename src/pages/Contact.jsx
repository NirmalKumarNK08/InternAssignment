import React from 'react'

const Contact = () => {
  return (
    <div className='contactPage'>
      <h1>This is Contact Page</h1>
      <div className="contactContainer">
        <div className='text-inputs'>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Subject'/>
        </div>
        <div className="msg-input">
          <textarea placeholder='Message..' name="Message" id="text-area" cols="30" rows="5" />
        </div>
        <div>
          <input className='submitBtn' type="button" value="Send" />
        </div>
      </div>
    </div>
  )
}

export default Contact