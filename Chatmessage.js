import React from 'react'


function Chatmessage(props) {
  return (
    <div className={`d-flex ${props.user && 'justify-content-end'}`}>
    {props.user ? (
        <span className='message-rigtht'>
        <span className='message-text'>{props.message}</span>
        
        </span>
    ) :(
        <span className='message-left'>
        
        <span className='message-text'>{props.message}</span>
        </span>
    )
    
    }
    
    
    
    </div>
  )
}

export default Chatmessage