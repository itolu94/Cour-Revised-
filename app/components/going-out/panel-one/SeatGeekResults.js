import React, {Component} from 'react';

export default class SeatGeek extends Component {
    constructor(){
        super();
    }
    makeList (){
        if(this.props.seatGeekEvents.length <= 0){
            return (<p> No events were found </p>)
        } else {
            return this.props.seatGeekEvents.map((event, i) => {
                return ( 
                    <div>
                        <p> Artist: {event.title}</p>
                        <p> Venue: {event.venue.name} </p>
                        <a href={event.url} target='_blank'>Buy Tickets</a>
                    </div>
                );
            });
        }
    }
    render(){
        return (
        <div>
            <div id='seatGeekResults' className="col-lg-12">
            <h3 id='seatGeekHeader'> Events Near By </h3>
                {this.makeList()}
            </div>
            <div id="seatGeek-back-btn-container">
                <button onClick={() => this.props.revert()} className="btn btn-default" id="back-btn-seatGeek" type="submit">Back</button>                            
            </div>
        </div>
        )
    }
}
