import React from 'react';
import logo from './logo.svg';
import {NavLink} from 'react-router-dom';
import './App.css';

const App = ()=>(
  <div className="NavBarBox">
     <div className="NavBar">
          <NavLink exact to="/">发现音乐</NavLink> |&nbsp;
          <NavLink to="/mymusic">我的音乐</NavLink> |&nbsp;
          <NavLink to="/friend">朋友</NavLink>
      </div>
  </div>
)

export default App;
