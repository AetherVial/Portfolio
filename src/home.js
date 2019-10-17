import React from 'react';
import "./styles/home.css";

const Home = () => (
    <div className="home">
        <nav>
            <svg xmlns="http://www.w3.org/2000/svg" name="Activity" className="linkButtonIcon-Mlm5d6" aria-hidden="false" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="currentColor" d="M5.79335761,5 L18.2066424,5 C19.7805584,5 21.0868816,6.21634264 21.1990185,7.78625885 L21.8575059,17.0050826 C21.9307825,18.0309548 21.1585512,18.9219909 20.132679,18.9952675 C20.088523,18.9984215 20.0442685,19 20,19 C18.8245863,19 17.8000084,18.2000338 17.5149287,17.059715 L17,15 L7,15 L6.48507125,17.059715 C6.19999155,18.2000338 5.1754137,19 4,19 C2.97151413,19 2.13776159,18.1662475 2.13776159,17.1377616 C2.13776159,17.0934931 2.1393401,17.0492386 2.1424941,17.0050826 L2.80098151,7.78625885 C2.91311838,6.21634264 4.21944161,5 5.79335761,5 Z M14.5,10 C15.3284271,10 16,9.32842712 16,8.5 C16,7.67157288 15.3284271,7 14.5,7 C13.6715729,7 13,7.67157288 13,8.5 C13,9.32842712 13.6715729,10 14.5,10 Z M18.5,13 C19.3284271,13 20,12.3284271 20,11.5 C20,10.6715729 19.3284271,10 18.5,10 C17.6715729,10 17,10.6715729 17,11.5 C17,12.3284271 17.6715729,13 18.5,13 Z M6,9 L4,9 L4,11 L6,11 L6,13 L8,13 L8,11 L10,11 L10,9 L8,9 L8,7 L6,7 L6,9 Z" /><rect width="24" height="24" /></g></svg>
            <h2>Home</h2>
        </nav>
        <div>
            <div className='beginning'>
                This is the beginning of your chat history with @Stanton.
            </div>
            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'>hi</div> </div>
                <div>
                    <div className='author'>Stanton</div>
                    <div>
                        Hi my name is Stanton, and I'm a software developer.
                        <br/>
                        Carlos Delao Martinez is so cool.
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default Home;