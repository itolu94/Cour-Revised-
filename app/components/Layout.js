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
            {this.props.children} 
        </div>
        )
    }
}