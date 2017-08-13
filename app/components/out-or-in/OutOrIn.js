import React, {Component} from 'react';
import GoingOut from './GoingOut';
import NavBar from './NavBar';
import StayingIn from './StayingIn';


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