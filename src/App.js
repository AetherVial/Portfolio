import React from 'react';
import './App.css';
import Sidebar from './sidebar';
import Body from './body';
import { HashRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import FakeChat from './components/fakechat';

function App() {
  return (
      <div className="grid-columns-2">
        {/* hi my name is App */}
        <HashRouter>
          <Route path="/" component={Sidebar}/>
          <Route exact path="/" component={Body}/>
          <Route path="/" component={FakeChat}/>
        </HashRouter>
      </div>
  );
}

export default App;
