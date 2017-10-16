import React, {Component} from 'react';
import GoogleMapsLoader from 'google-maps';
import axios from 'axios';
import PanelOne from './panel-one/PanelOne';
import PanelTwo from './panel-two/PanelTwo';
import {yelp} from '../../config/helpers';


export default class GoingOutComponent extends Component {
    constructor(){
      super();
      this.state = {
        panelOneDisplay: 'activities',
        panelTwoDisplay: 'activities',
        activity: 'coffee',
        zipcode: '',
        date: '',
        seatGeekEvents: [],
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
      case 'googleSearch': 
        this.setState({
          activity,
          panelOneDisplay: transition,
          businessInfo: {},
          zipcode: ''
        });
        break;   
      case 'seatgeekSearch':
        this.setState({
          activity,
          panelTwoDisplay: transition,
          businessInfo: {},
          zipcode: '',
          seatGeekEvents: []
        
        });
        break;
      case '': 
        // this.setState({
        //   panelOneDisplay: transition,
        // });
      break;
     }

    }  
    handleRevert(){
      this.setState({        
        panelOneDisplay: 'activities',
        panelTwoDisplay: 'activities',
        zipcode: '',
        businessInfo: {}
      })
    }
    yelpSearch(){
      let activity = this.state.activity;
      let location = this.state.zipcode;
      yelp(location, activity, (result) =>{
        this.setState({
          businessInfo: result.data,
        })
        this.googleMaps();
      });
        this.setState({
          panelOneDisplay: 'googleMaps',
          panelTwoDisplay: 'yelp'
        });
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
      let URL = `https://api.seatgeek.com/2/events?&geoip=${this.state.zipcode}&sort=score.desc&type=${this.state.activity}&datetime_utc=${this.state.date}&client_id=NzIwMTk3MnwxNDkxMDAyMDQ0LjE2`
     console.log(URL);
      axios.get(URL).then((response) => {
        if(response.data.events.lenght <= 0){
          this.setState({seatGeekEvents: []});
        }else {
          this.setState({
            seatGeekEvents: response.data.events,
            panelOneDisplay: 'seatgeekResults'
          });

        }
      });
    }
    handleChange(e, field){
      this.setState({
        [field]: e
      });
    }

    render(){
        return(
          <div>
            <div className="row" id="going-out-content">
              <div className="col-lg-12 collums">
                <PanelOne 
                panelOneDisplay={this.state.panelOneDisplay}
                handleTransitions={this.handleTransitions}
                revert={this.handleRevert}
                yelp={this.yelpSearch}
                handleChange={this.handleChange}
                zipcode={this.state.zipcode}
                seatGeekEvents={this.state.seatGeekEvents}
                />
                <PanelTwo 
                businessInfo={this.state.businessInfo}
                panelTwoDisplay={this.state.panelTwoDisplay}
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