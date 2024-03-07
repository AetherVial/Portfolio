import '../styles/basicChat.css';
import React from 'react';

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();
const BeginningChat = ({children}) => {
    return (
        <div className='beginning'>
            This is the beginning of your chat history with @Stanton.
        </div>
    )
}

export default BeginningChat;