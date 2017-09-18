import React, {Component} from 'react';
// import GoingOut from './Out';
// import NavBar from './NavBar';
// import StayingIn from './In';


export default class Layout extends Component {
    constructor() {
        super();
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
                        <li role="presentation"><a href="#">FAQ</a></li>
                        <li role="presentation"><a href="#">APIS</a></li>
                        <li role="presentation"><a href="index.html">Home</a></li>
                    </ul>
                    </div>
                    <div className="rolk">a</div>
                    <div className="rolk">a</div>
                    <div className="rolk rolk3">a</div>
                    <img src="./assets/css/Images/CocktailIcon.svg" alt="cocktail icon" className="category-icon row-null" />
                </div>
                </div>
            </div>
            {this.props.children} 
        </div>
        )
    }
}