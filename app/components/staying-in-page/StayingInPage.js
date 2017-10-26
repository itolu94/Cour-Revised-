import React, {Component} from 'react';
import PanelOne from './PanelOne';
import PanelTwo from './PanelTwo';
import Instructable from './Instructable';


export default class StayingInPage extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>
              <div className="row" id="going-out-content">
                <div className="col-lg-12 colums">
                    <Instructable />
                    <PanelTwo />
                </div>
              </div>
            </div>

        )
    }
}