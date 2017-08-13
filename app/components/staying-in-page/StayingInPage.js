import React, {Component} from 'react';
import NavBar from './NavBar';
import PanelOne from './PanelOne';
import PanelTwo from './PanelTwo';


export default class StayingInPage extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>
              <NavBar />
              <div className="row" id="going-out-content">
                <div className="col-lg-12 colums">
                    <PanelOne />
                    <PanelTwo />
                </div>
              </div>
            </div>

        )
    }
}