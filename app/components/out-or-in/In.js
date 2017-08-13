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
      <div className="col-lg-6">
      <div className="panel panel-default panel-going-out">
          <a onClick={this.stayingInClick}>
            <div className="panel-body">
              <h1 className="col-lg-12 row-null">invisible</h1>
              <div className="col-lg-offset-12"><img src="./assets/css/Images/CocktailIcon.svg" alt="cocktail icon" className="category-icon row-null" /></div>
              <img src="./assets/css/Images/CocktailIcon.svg" alt="cocktail icon" className="category-icon row-null" />
              <img className="col-lg-6" src="./assets/css/Images/HomeIcon.svg" alt="Home icon" id="home-icon" />
            <h1 className="col-lg-12">STAYING IN</h1>
            <div className="col-lg-12">
              <div className="col-lg-offset-4 col-lg-1"><img src="./assets/css/Images/CocktailIcon.svg" alt="cocktail icon" className="category-icon row-null" /></div>
            </div>
              <div className="col-lg-12">
                <div className="col-lg-offset-4 col-lg-1"><img src="./assets/css/Images/CocktailIcon.svg" alt="cocktail icon" className="category-icon row-null" /></div>
              </div>
            </div>
          </a>
        </div>
      </div>
        )
    }
}