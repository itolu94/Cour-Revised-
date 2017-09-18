import React, {Component} from 'react';
import YelpListings from './YelpListings';


export default class PanelTwo extends Component {
    constructor() {
        super();
    }
    handleYelpResults(){
        
    }
    render(){
        const display = {display: 'none'}
        const displayYelp = {display: this.props.yelpResults}
        return(
             <div className="col-lg-6">
                <div className="panel panel-default panel-going-out">
                    <div className="panel-body">
                        <div id="first-info-panel2">
                            <h1 className="col-lg-12 row-null">invisible</h1>
                            <div className="category col-lg-12 concerts-sports-click" id="concerts-click">
                                <div className="col-lg-offset-4 col-lg-1"><img src="assets/css/Images/ConcerIcon.svg" alt="concerts icon" className="category-icon" /></div>
                                <h1 className="col-lg-12">Concerts</h1>
                            </div>
                            <div className="category col-lg-12 concerts-sports-click" id="sports-click">
                                <div className="col-lg-offset-4 col-lg-1"><img src="assets/css/Images/SportsIcon.svg" alt="sports icon" className="category-icon" /></div>
                                <h1 className="category col-lg-12">Sports</h1>
                            </div>
                            <div className="category col-lg-12 concerts-sports-click" id="theater-click">
                                <div className="col-lg-offset-4 col-lg-1"><img src="assets/css/Images/TheaterIcon.svg" alt="theater icon" className="category-icon" /></div>
                                <h1 className="col-lg-12">Theater</h1>
                            </div>
                        </div>
                        <div style={display} className="col-lg-12 search2">
                            <form role="form">
                                <div className="form-group">
                                    <label for="name-input" id="name-inputSG">Zip Code</label>
                                    <input className="form-control" id="zip-code-inputSG" type="text" />
                                </div>
                                <div className="form-group">
                                    <label for="name-input">
                                        <h1>Date</h1>
                                    </label>
                                    <input className="form-control" id="date-input" type="text" placeholder="2017-02-23" />
                                </div>
                            </form>
                            <button className="btn btn-default" id="add-infoSG" type="submit">Submit</button>
                            <button className="btn btn-default" id="back-btn-panel2" type="submit">Back</button>
                        </div>
                        <div style={displayYelp} className="col-lg-12 googleMapsAPIList">
                            <YelpListings />
                        </div>
                        <div className="col-lg-12 seatGeeksAPI">
                        </div>
                        <div style={display} id="google-button-container">
                          <button className="btn btn-default" id="back-btn-google" type="submit">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}