import React, {Component} from 'react';
import {hashHistory} from 'react-router';

// import GoingOut from './Out';
// import NavBar from './NavBar';
// import StayingIn from './In';


export default class Layout extends Component {
    constructor() {
        super();
    }
    handleHome(){
        hashHistory.push('/')
    }
    render(){
        return(
        <div>
           <div className="row">
                <div className="col-lg-12 dog">
                <div id="page-header">
                    <div className="hidden-header">
                    <h1 id="going-out-head" className="cour-text"><img src="./assets/css/Images/CourIconOpt.svg" alt="cour icon" id="cour-icon-going-out"/>Cour</h1>
                    <ul className="nav nav-pills" id="nav-btns">
                        { /*<li role="presentation"><a href="#">FAQ</a></li> */}
                        <li role="presentation"><a onClick={() => this.handleHome()} >Home</a></li>
                    </ul>
                    </div>
                    <div className="rolk">a</div>
                    <div className="rolk">a</div>
                    <div className="rolk rolk3">a</div>
                </div>
                </div>
            </div>
            {this.props.children} 
        </div>
        )
    }
}