import React, { useState } from 'react'
import Chatmessage from './Chatmessage'
import Button from 'react-bootstrap/Button';
import { error } from './Reply';



function Chatbox() {
    const [message, setMessage] = useState([
        {
            message: 'Hi,May i have your name please?'
        }
    ])
    const[text,setText] = useState("")
    const onSend =()=>{
        let list =[...message , {message:text ,user:text}]
        if(list.length>2){
        const reply = error(text)
        list =[...list,{message:reply} ]
        } else {
            list = [
                ...list,
                {message:`Hi , ${text}`},
                {message: "How cam i help you?",},
            ]}
            setMessage(list)
            setText("")
            setTimeout(() => {
                document.querySelector("#copyrights").scrollIntoView();
            },);
    }   
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <img src='https://img.freepik.com/premium-vector/chatbot-icon-chatbot-logo-conceptvoice-support-service-chat-botvirtual-online-help-customer-supportvector-illustration-flat-style_553860-211.jpg'
                    alt='logo' height={300} width={300} />
                <h1 className='text-primary'>ChatBot</h1>
            </div>
            <div className='chat-message'>
                {
                    message.length > 0 && message.map((item) => <Chatmessage {...item} />)}
            
                <div className='d-flex mt-2'>
                    <input type='text' className='form-control'value={text} onChange={(e)=>setText(e.target.value)}/>
                    
                    <Button as="a" variant="primary" className='ms-3' onClick={onSend}>
                    Send
                    </Button>
                </div>
                <div id='copyrights' className='mt-3'> &copy;copy&rights</div>
            </div>
        </div>
    )
}

export default Chatbox