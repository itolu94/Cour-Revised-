import React, {Component} from 'react';


export default class GoogleMaps extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
            <div className="col-lg-12 googleMapsAPI">
              <div id="map">
              
              </div>
            </div>
            <div id="seatGeek-back-btn-container">
             <button onClick={() => this.props.revert()} className="btn btn-default" id="back-btn-seatGeek" type="submit">Back</button>
            </div>
          </div>
        );

    }
}