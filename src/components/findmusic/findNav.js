import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../style/findmusic.css'

const NavBars = ()=>(
  <div className="findNavBox">
     <div className="findNavBar">
          <NavLink exact to="/findmusic">推荐</NavLink> |&nbsp;
          <NavLink to="/findmusic/paihang">排行</NavLink> |&nbsp;
          <NavLink to="/findmusic/gedan">歌单</NavLink>
      </div>
  </div>
)

export default NavBars;