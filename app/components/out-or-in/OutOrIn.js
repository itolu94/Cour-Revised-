import React, {Component} from 'react';
import GoingOut from './Out';
import StayingIn from './In';


export default class Main extends Component {
    constructor() {
        super();
    }
    render(){
        return(
        <div>
            <div className='col-lg-12 collums out-or-in-pannel'>
              <StayingIn />
              <GoingOut />
            </div> 
        </div>
        )
    }
}