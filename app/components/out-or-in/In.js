import React, {Component} from 'react';
import {hashHistory} from 'react-router';

export default class StayingIn extends Component{
    constructor(){
        super();
    }
    stayingInClick(){
      hashHistory.push('staying-in');
    }
    render(){
        return(
              <div className="col-lg-6 col-sm-12">
                <div className="panel panel-default panel-going-out">
                  <div onClick={this.stayingInClick} className="panel-body">
                    <img  className='home-and-city-icon' src="./assets/css/Images/HomeIcon.svg" alt="Home icon" />
                    <h1>STAYING IN</h1>
                  </div>
                </div>
              </div>
        )
    }
}