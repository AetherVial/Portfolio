import React from 'react';

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const Contact = () => (
    <div className="home">
        <nav>
            <svg xmlns="http://www.w3.org/2000/svg" name="PersonWaving" className="linkButtonIcon-Mlm5d6" aria-hidden="false" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)" /><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z" /></g></svg>
            <h2>Contact</h2>
        </nav>
        <div>
            <div className='beginning'>
                Here, you'll find my contact information, along with links to my online profiles and resume.
            </div>
            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'>hi</div> </div>
                <div>
                    <div className='author'>Stanton  <p>Today at {time}</p></div>
                    <div>
                        Who are you even?
                    </div>
                </div>
            </div>
            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'>hi</div> </div>
                <div>
                    <div className='author'>Stanton  <p>Today at {time}</p></div>
                    <div>
                        Never talk to me or my son ever again.
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default Contact;