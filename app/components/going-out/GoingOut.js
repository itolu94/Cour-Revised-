import React, {Component} from 'react';
import NavBar from './NavBar';
import PanelOne from './PanelOne';
import PanelTwo from './PanelTwo';


export default class GoingOutComponent extends Component {
    constructor(){
        super();
    }
    render(){
        return(
          <div>
            <NavBar />
            <div className="row" id="going-out-content">
              <div className="col-lg-12 collums">
                <PanelOne />
                <PanelTwo />
              </div>
            </div>
          </div>
        )
    }
}