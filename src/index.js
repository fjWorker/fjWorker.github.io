import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import FindMusic from './components/FindMusic';
import MyMusic from './components/MyMusic';
import Friend from './components/Friend';
import Errors from './components/Errors';

ReactDOM.render(
    <Router>
        <div>
            <App />
            <Switch>
                <Route exact path="/" component={FindMusic} />
                <Route path="/mymusic" component={MyMusic} />
                <Route path="/friend" component={Friend} />
                <Route component={Errors} />
            </Switch>
        </div>
    </Router>,
document.getElementById('root')
);
registerServiceWorker();
