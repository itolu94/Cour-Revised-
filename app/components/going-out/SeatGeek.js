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
                        <p> Artist {event.title}</p>
                        <p> Venue {event.venue.name} </p>
                        <a href={event.url} target='_blank'>Buy Tickets</a>
                    </div>
                );
            });
        }
    }
    render(){
        return (
            <div>
                {this.makeList()}
            </div>
        )
    }
}
