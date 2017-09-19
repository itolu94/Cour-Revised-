import React, {Component} from 'react';
import GoogleMapsLoader from 'google-maps';
import axios from 'axios';
import PanelOne from './PanelOne';
import PanelTwo from './PanelTwo';
import {yelp} from '../../config/helpers';


export default class GoingOutComponent extends Component {
    constructor(){
      super();
      this.state = {
        displaySearchOne: 'none',
        displaySearchTwo: 'none',
        displayPannelOne: 'inline',
        displayPannelTwo: 'inline',
        mapDisplay: 'none',
        yelpResults: 'none',
        activity: 'coffee',
        zipcode: '',
        date: '',
        seatGeekEvents: [],
        displaySeatGeek: 'none'
      }
      this.handleTransitions = this.handleTransitions.bind(this);
      this.handleRevert = this.handleRevert.bind(this);
      this.yelpSearch =  this.yelpSearch.bind(this);
      this.googleMaps = this.googleMaps.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.seatGeek = this.seatGeek.bind(this);
    }
    handleTransitions(transition, activity){
     switch(transition){
      case 1: 
        this.setState({
          activity,
          displayPannelOne: 'none',
          displaySearchOne: 'inline',
          displayPannelTwo: 'inline',
          displaySearchTwo: 'none',
          businessInfo: {},
          zipcode: ''
        });
        break;   
      case 2:
        this.setState({
          activity,
          displayPannelTwo: 'none',
          displaySearchTwo: 'inline',
          displayPannelOne: 'inline',
          displaySearchOne: 'none',
          businessInfo: {},
          zipcode: '',
          seatGeekEvents: []
        
        });
        break;
      case 3: 
        // this.seatGeek();
        break;
     }

    }  
    handleRevert(){
      this.setState({        
        displaySearchOne: 'none',
        displaySearchTwo: 'none',
        displayPannelOne: 'inline',
        displayPannelTwo: 'inline',
        displaySeatGeek: 'none',
        mapDisplay: 'none',
        zipcode: ''
      })
      document.getElementById('map').innerHTML = '';
    }
    yelpSearch(location, panel){
      let activity = this.state.activity
      yelp(location, activity, (result) =>{
        this.setState({
          businessInfo: result.data,
          mapDisplay: 'inline'
        })
        this.googleMaps();
      });
        this.setState({displaySearchOne: 'none'});
    }

    googleMaps(){
      let map, marker;
      GoogleMapsLoader.KEY = 'AIzaSyCa5mL-wJVftS2kSRy6jVV-WCdQWNUEEG4';
      let location = {
        lat: this.state.businessInfo.region.center.latitude, 
        lng: this.state.businessInfo.region.center.longitude
      }
      GoogleMapsLoader.load(google => {
        map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 12
        });
        this.state.businessInfo.businesses.map((location, index) =>{
          let coordinate = location.coordinates;
          marker = new google.maps.Marker({
            map: map,
            label: index,
            position: {
               lat: coordinate.latitude,
               lng: coordinate.longitude
            }
          });
          let infowindow = new google.maps.InfoWindow();          
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(
              // need to make info window more 'ELEGANT';
               `Name: ${location.name}`);
              //  Location: ${location.location[0]} 
              //  Rating: ${location.rating}
               
            infowindow.open(map, this);
          });
        });
      });
    }
    seatGeek(){
      let URL = `https://api.seatgeek.com/2/events?&geoip=${this.state.zipcode}&sort=score.desc&type=${this.state.activity}&datetime_utc=${this.state.data}&client_id=NzIwMTk3MnwxNDkxMDAyMDQ0LjE2`
      console.log(URL);
      axios.get(URL).then((response) => {
        if(response.data.events.lenght <= 0){
          this.setState({seatGeekEvents: []});
        }else {
          this.setState({
            seatGeekEvents: response.data.events,
            displayPannelOne: 'none',
            displaySeatGeek: 'inline'
          });

        }
      });
      // $.ajax({
      //     method: "GET",
      //     url: queryURL
      // }).done(function(response) {
      //     $('#map').empty();
      //     if (response) {
      //     for (var i = 0; response.events.length; i++) {
      //         console.log(response.events[i].title);
      //         $('#map').append("<p> Artist: " + response.events[i].title + '</p>');
      //         $('#map').append("<p> Venue: " + response.events[i].venue.name + '</p>');
      //         $('#map').append("<a href ='" + response.events[i].url + "' target= _blank>Buy Tickets</a>");
      //         if (i === 5) {
      //             break;
      //         }
      //     }
      // }
      // else {
      //     $('#map').append("<p>No events taking place on that" + data + "</p>");
          
      // }
      // });
    }
    handleChange(e, field){
      this.setState({
        [field]: e.target.value
      });
    }

    render(){
        return(
          <div>
            <div className="row" id="going-out-content">
              <div className="col-lg-12 collums">
                <PanelOne 
                pannel={this.state.displayPannelOne} 
                searchBox={this.state.displaySearchOne}
                handleTransitions={this.handleTransitions}
                revert={this.handleRevert}
                yelp={this.yelpSearch}
                handleChange={this.handleChange}
                zipcode={this.state.zipcode}
                mapDisplay={this.state.mapDisplay}
                seatGeekEvents={this.state.seatGeekEvents}
                displaySeatGeek={this.state.displaySeatGeek}
                />
                <PanelTwo 
                pannel={this.state.displayPannelTwo} 
                searchBox={this.state.displaySearchTwo}
                handleTransitions={this.handleTransitions}   
                handleChange={this.handleChange}                
                yelpResults={this.state.yelpResults}   
                revert={this.handleRevert}
                zipcode={this.state.zipcode}   
                date={this.state.date}  
                seatGeek={this.seatGeek}
                />
              </div>
            </div>
          </div>
        )
    }
}