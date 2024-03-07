import React from 'react';
import "../styles/home.css";
import BasicChat from './basicChat.js';
import BeginningChat from './beginningChat.js';

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const Home = () => (
    <div className="home">
        <div>
            <BeginningChat />
            <BasicChat>
                <div>
                    Hi my name is Stanton, and I'm a software developer with experience in Ruby on Rails, JavaScript, Node.js, and React.js/ Redux, PostgreSQL, and MongoDB. 
                    <br></br>
                    I've also earned degrees in Mathematics and Economics from Emory University. 
                    Both my education and my coding experience have been strongly influenced by desire to 
                    solve complex problems. 
                    <br></br>
                    I'm looking for opportunities to continue learning and 
                    show what I've learned in a fast paced environment.
                </div>
            </BasicChat>
            <BasicChat>
                <div>
                    I hope you have fun checking out my Discord-themed portfolio site!
                    <br></br>
                    You can click the links in the sidebar to get to my online profiles and resume, 
                    or any of the tabs to hit other parts of my portfolio.
                </div>
            </BasicChat>
            <BasicChat>
                <div>
                    Resume: <a target="_blank" rel="noopener noreferrer" href={require("../assets/resume.pdf")} >Click Me</a>
                </div>
            </BasicChat>
        </div>
    </div>
)


export default Home;