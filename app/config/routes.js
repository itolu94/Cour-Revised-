import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Home from './../components/home-page/Home';
import OutOrIn from  '../components/out-or-in/OutOrIn';
import GoingOut from '../components/going-out/GoingOut';
import StayingInPage from '../components/staying-in-page/StayingInPage';
import Layout from '../components/Layout';

module.exports = (
    <Route path='/' component={Layout} >
        <Route path='/' component={Home} />
        <Route path='/out-or-in' component={OutOrIn} />
        <Route path='/going-out' component={GoingOut} />
        <Route path='/staying-in' component={StayingInPage} />
        <IndexRoute component={Home} />
    </Route>
);
