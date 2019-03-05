import React from 'react';
import srxc from '../images/findmusic.jpg';
import Paihang from './findmusic/paihang';
import Gedan from './findmusic/gedan';
import Tuijian from './findmusic/tuijian';
import Errors from '../components/Errors';
import './../style/findmusic.css';
import {BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom';

export default class findMusic extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBars />
                    <Switch>
                        <Route exact path="/" component={Tuijian} />
                        <Route path="/findmusic/paihang" component={Paihang} />
                        <Route path="/findmusic/gedan" component={Gedan} />
                        <Route component={Errors} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const NavBars = ()=>(
    <div className="findNavBox">
       <div className="findNavBar">
            <NavLink exact to="/">推荐</NavLink> |&nbsp;
            <NavLink to="/findmusic/paihang">排行</NavLink> |&nbsp;
            <NavLink to="/findmusic/gedan">歌单</NavLink>
        </div>
    </div>
  )