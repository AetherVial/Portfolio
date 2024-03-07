import '../styles/basicChat.css';
import React from 'react';

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();
const BasicChat = ({children}) => {
    return (
        <div className='chat'>
        <div className="icon-container">
            <img src={require("../assets/wider-min.jpg")}className='chatIcon' alt=""/>
        </div>
            <div>
                <div className='author'>Stanton Huang <p>Today at {time}</p></div>
                {children}
            </div>
        </div>
    )
}

export default BasicChat;