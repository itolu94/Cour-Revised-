import React, {Component} from 'react';
import GoogleMapsLoader from 'google-maps';
import NavBar from './NavBar';
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
        activity: 'coffee' 
      }
      this.handleTransitions = this.handleTransitions.bind(this);
      this.handleRevert = this.handleRevert.bind(this);
      this.yelpSearch =  this.yelpSearch.bind(this);
      this.googleMaps = this.googleMaps.bind(this);
    }
    handleTransitions(pannel, activity){
      if(pannel === 1 ) {
        this.setState({
          activity: activity,
          displayPannelOne: 'none',
          displaySearchOne: 'inline',
          businessInfo: {}
        });   
      }
      else if(pannel === 'pannel2'){
      console.log(
        `Click for ${pannel} was registered..
        Activyt was ${activity}
        `);   
      }
    }  
    handleRevert(){
      this.setState({        
        displaySearchOne: 'none',
        displaySearchTwo: 'none',
        displayPannelOne: 'inline',
        displayPannelTwo: 'inline',})
    }
    yelpSearch(location, panel){
      let activity = this.state.activity
      yelp(location, activity, (result) =>{
        this.setState({businessInfo: result.data})
        console.log(this.state.businessInfo);
        this.googleMaps();
      });
      console.log(panel)
      if (panel === 1) {
        this.setState({displaySearchOne: 'none'});
      }
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
          console.log(coordinate);
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
               `Name: ${location.name}
               Location: ${location.location[0]} 
               Rating: ${location.rating}`);
            infowindow.open(map, this);
          });
        });
      });
    }
    render(){
        return(
          <div>
            <NavBar />
            <div className="row" id="going-out-content">
              <div className="col-lg-12 collums">
                <PanelOne 
                pannel={this.state.displayPannelOne} 
                searchBox={this.state.displaySearchOne}
                hanldeTransitions={this.handleTransitions}
                revert={this.handleRevert}
                yelp={this.yelpSearch}
                />
                <PanelTwo 
                pannel={this.state.displayPannelTwo} 
                searchBox={this.state.displaySearchTwo}
                hanldeTransitions={this.handleTransitions}                
                />
              </div>
            </div>
          </div>
        )
    }
}