import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './sidebar';
import Links from './links';
import Home from './home';
import Projects from './projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Links}/>
        <Route path="/" component={Sidebar}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
