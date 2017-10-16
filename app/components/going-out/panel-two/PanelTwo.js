import React, {Component} from 'react';
import Activities from './Activities';
import YelpResults from './YelpResults';
import SeatGeekSearchBar from './SeatGeekSearchBar';

export default class PanelTwo extends Component {
    constructor() {
        super();
        this.panelContent = this.panelContent.bind(this);
    }
    panelContent(){
        switch(this.props.panelTwoDisplay){
            case 'activites':
                return <Activities handleTransitions={this.props.handleTransitions}/>
            case 'yelp':
                return <YelpResults businessInfo={this.props.businessInfo} />
            case 'seatgeekSearch':
                return (
                    <SeatGeekSearchBar 
                    handleChange={this.props.handleChange}
                    seatGeek={this.props.seatGeek}
                    revert={this.props.revert}
                    date={this.props.date}
                    zipcode={this.props.zipcode}
                    />
                )
            default:
                return <Activities handleTransitions={this.props.handleTransitions}/>
        }
    }
    render(){
        return(
             <div  className="col-lg-6 col-sm-12">
                <div  className="panel panel-default panel-going-out">
                    <div  className="panel-body">
                      {this.panelContent()}
                    </div>
                </div>
            </div>
        )
    }
}