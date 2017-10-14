import React, {Component} from 'react';
import {hashHistory} from 'react-router';


export default class HomePage extends Component{
    constructor(){
        super();
    }
    hanldeClick(){
      hashHistory.push('out-or-in');
    }
    render(){
        return(
        <div> 
          <div className="cour-text">COUR</div>
	      <img src="./assets/css/Images/CourIcon.svg" alt="cour icon" id="cour-icon"/>
          <h3 id="panel-h3">Dating for 
            <span>
              <a type="button" onClick={hashHistory.push('out-or-in')} className="btn" id="today-btn" >Today</a>
            </span>
           </h3>
        </div>
        )
    }
}