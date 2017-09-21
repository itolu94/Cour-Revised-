import React, {Component} from 'react';
import Activities from './Activities';
import GoogleMaps from './GoogleMaps';
import GoogleMapsSearchBar from './GoogleMapsSearchBar';
import SeatGeekResults from './SeatGeekResults';


export default class PanelOne extends Component{
    constructor(){
        super();
        this.panelContent = this.panelContent.bind(this);
    }
    panelContent(){
        switch(this.props.panelOneDisplay){
            case 'activities':
                return <Activities handleTransitions={this.props.handleTransitions}/>;
            case 'googleMaps': 
                return <GoogleMaps revert={this.props.revert}/>;
            case "seatgeekResults":
                return  (
                    <SeatGeekResults 
                    revert={this.props.revert}
                     seatGeekEvents={this.props.seatGeekEvents}/>
                )
            case 'googleSearch': 
                return (    
                <GoogleMapsSearchBar 
                 handleChange={this.props.handleChange}
                 yelp={this.props.yelp}
                 revert={this.props.revert}/>
                )
            default:
                return <Activities handleTransitions={this.props.handleTransitions}/>
        }
    }
    render(){
        return(
            <div className="col-lg-6 col-sm-12">
                <div className="panel panel-default panel-going-out">
                    <div className="panel-body">
                        {this.panelContent()}
                    </div>
                </div>
            </div>
        );
    }
}