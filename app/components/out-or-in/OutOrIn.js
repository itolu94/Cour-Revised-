import React, {Component} from 'react';
import GoingOut from './Out';
import NavBar from './NavBar';
import StayingIn from './In';


export default class Main extends Component {
    constructor() {
        super();
    }
    render(){
        return(
        <div>
            <NavBar />
            <div className='col-lg-12 collums'>
              <StayingIn />
              <GoingOut />
            </div> 
        </div>
        )
    }
}