import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
// import HomePage from './components/home-page/HomePage';
// import Main from  './components/out-or-in/OutOrIn';
import GoingOut from './components/going-out/GoingOut';
// import StayingInPage from './components/staying-in-page/StayingInPage';
import router from './config/routes';

ReactDOM.render(<Router history={hashHistory} routes={router}> </Router>, document.getElementById('app'))
