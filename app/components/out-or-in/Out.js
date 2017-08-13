import React, {Component} from 'react';
import {hashHistory} from 'react-router';

export default class GoingOut extends Component{
    constructor(){
        super();
    }
    goingOutClick(){
      hashHistory.push('going-out');
    }
    render(){
        return(
      <div className="col-lg-6 col-sm-12">
        <div className="panel panel-default panel-going-out">
            <div onClick={this.goingOutClick} className="panel-body">
              <img className="home-and-city-icon" src="assets/css/Images/CityIcon.svg" alt="City icon"  />
              <h1 >GOING OUT</h1>
            </div>
        </div>
      </div>
        )
    }
}