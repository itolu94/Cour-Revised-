import React, {Component} from 'react';

export default class YelpResults extends Component {
    constructor(){
        super();
        this.makeComponent = this.makeComponent.bind(this);
    }
    makeComponent(){
        let businessInfo = this.props.businessInfo;
        if(businessInfo.businesses){
            return businessInfo.businesses.map((businesses) => {
                return (
                    <div className='yelpResults'> 
                        <p>Name: {businesses.name}</p>
                        <p>Rating: {businesses.rating} </p>
                        <p>Location: {businesses.location.address1} </p>
                        <p>Phone Number: {businesses.phone} </p>
                        <p><a href={businesses.url}> Link </a></p>
                    </div>
                )
            })
        }
    }
    render(){
        return(
        <div  className="col-lg-12 googleMapsAPIList">
        <h3> Yelp Results </h3>
        
            {this.makeComponent()}
        </div>
        )
    }
}