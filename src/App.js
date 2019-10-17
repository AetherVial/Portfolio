import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './sidebar';
import Links from './links';
import Home from './home';
import Projects from './projects';
import Skills from './skills';
import FakeChat from './fakechat';
import Contact from './contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Links}/>
        <Route path="/" component={Sidebar}/>
        <Route path="/" component = {FakeChat} />
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
