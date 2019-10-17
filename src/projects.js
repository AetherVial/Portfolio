import React from 'react';

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const Projects = () => (
<div className="home">
    <nav>
            <svg xmlns="http://www.w3.org/2000/svg" name="Library" aria-hidden="false" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="currentColor" d="M17,13.6 L17.3999992,13.6 C19.0406735,13.6 20.496781,12.8097754 21.4084757,11.5891722 L21.8198761,18.8298199 C21.913864,20.4840062 20.6490733,21.9011814 18.994887,21.9951692 C18.9382174,21.9983891 18.8814679,22 18.8247069,22 L5.1752931,22 C3.51843885,22 2.1752931,20.6568542 2.1752931,19 C2.1752931,18.943239 2.17690401,18.8864895 2.18012387,18.8298199 L2.59152425,11.5891732 C3.503219,12.8097758 4.95932613,13.6 6.6,13.6 L7,13.6 L7,15 L9,15 L9,13.6 L15,13.6 L15,15 L17,15 L17,13.6 Z M7,16 L7,18 L9,18 L9,16 L7,16 Z M15,16 L17,16 L17,18 L15,18 L15,16 Z M15,11.6 L9,11.6 L9,9 L7,9 L7,11.6 L6.6,11.6 C4.94314575,11.6 3.6,10.2568542 3.6,8.6 L3.6,5 C3.6,3.34314575 4.94314575,2 6.6,2 L17.3999992,2 C19.0568535,2 20.3999992,3.34314575 20.3999992,5 L20.3999992,8.6 C20.3999992,10.2568542 19.0568535,11.6 17.3999992,11.6 L17,11.6 L17,9 L15,9 L15,11.6 Z" /></g></svg>
        <h2>Projects</h2>
    </nav>
    <div>
        <div className='beginning'>
            Welcome to my projects portfolio!
        </div>
            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'>hi</div> </div>
                <div>
                    <div className='author'>Stanton  <p>Today at {time}</p></div>
                    <div>
                        This is Vaporize, a full stack Spotify clone using: Ruby on Rails, React / Redux and PostgreSQL. 
                        <br></br>
                        Hope you enjoy it! <a rel="noopener noreferrer" target="_blank" style={{color: 'gold'}} href="https://vaporize-sh.herokuapp.com">Live Link</a>
                        <br></br>
                        <a href="https://vaporize-sh.herokuapp.com" target="_blank" rel="noopener noreferrer">
                            <img alt="" src={require("./assets/vaporize.png")}></img>
                            </a>
                    </div>
                </div>
            </div>

            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'>hi</div> </div>
                <div>
                    <div className='author'>Stanton  <p>Today at {time}</p></div>
                    <div>
                        Welcome to Safewalker, a walking route finding application using: MongoDB, Express.js, React / Redux and Node.js.
                        <br></br>
                        Check it out here! <a rel="noopener noreferrer" target="_blank" style={{ color: 'gold' }} href="https://safewalker.herokuapp.com">Live Link</a>
                        <br></br>
                        <a href="https://vaporize-sh.herokuapp.com" target="_blank" rel="noopener noreferrer">
                            <img alt="" src={require("./assets/safewalk.png")}></img>
                        </a>
                    </div>
                </div>
            </div>

            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'>hi</div> </div>
                <div>
                    <div className='author'>Stanton  <p>Today at {time}</p></div>
                    <div>
                        Enter Enter the Blungeon, a JavaScript shoot'em'up style game with rogue-like mechanics, such as upgrades after every round.
                        <br></br>
                        Play it here: <a rel="noopener noreferrer" target="_blank" style={{ color: 'gold' }} href="https://aethervial.github.io/Game">Live Link</a>
                        <br></br>
                        <a href="https://aethervial.github.io/Game" target="_blank" rel="noopener noreferrer">
                            <img alt="" src={require("./assets/entertheblungeon.png")}></img>
                        </a>
                    </div>
                </div>
            </div>
    </div>
</div>
)

export default Projects