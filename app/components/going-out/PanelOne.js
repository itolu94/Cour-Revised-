import React, {Component} from 'react';



export default class PanelOne extends Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div className="col-lg-6">
                <div className="panel panel-default panel-going-out">
                    <div className="panel-body">
                        <div id="first-info-panel1">
                            <div className="category rounded-top col-lg-12 left-side-click" id="coffee-click">
                                <div className="col-lg-offset-4 col-lg-1"><img src="assets/css/Images/CoffeeIcon.svg" alt="coffee icon" className="category-icon" /></div>
                                <h1 className="col-lg-12">Coffee</h1>
                            </div>
                            <div className="category col-lg-12 left-side-click" id="restaurants-click">
                                <div className="col-lg-offset-4 col-lg-1"><img src="assets/css/Images/DinnerIcon.svg" alt="dinner icon" className="category-icon" /></div>
                                <h1 className="category col-lg-12">Restaurants</h1>
                            </div>
                            <div className="category col-lg-12 left-side-click" id="libations-click">
                                <div className="col-lg-offset-4 col-lg-1"><img src="assets/css/Images/CocktailIcon.svg" alt="cocktail icon" className="category-icon" /></div>
                                <h1 className="col-lg-12">Libations</h1>
                            </div>
                            <div className="category rounded-bottom col-lg-12 left-side-click" id="museum-click">
                                <div className="col-lg-offset-4 col-lg-1"><img src="assets/css/Images/MuseumIcon.svg" alt="museum icon" className="category-icon" /></div>
                                <h1 className="col-lg-12">Museum</h1>
                            </div>
                        </div>
                        <div className="col-lg-12" id="panel1-results">
                            <div className="col-lg-12 search">
                                <form role="form">
                                    <div className="form-group">
                                        <label for="name-input" id="name-inputGM">Zip Code</label>
                                        <input className="form-control" id="zip-code-inputGM" type="text" data-bind="value: location" />
                                    </div>
                                </form>
                                <button className="btn btn-default" id="add-infoGM" type="submit">Submit</button>
                                <button className="btn btn-default" id="back-btn-panel1" type="submit">Back</button>
                            </div>
                        </div>
                        <div className="col-lg-12 googleMapsAPI">
                            <div id="map">
                            </div>
                        </div>
                        <div id="seatGeek-back-btn-container">
                          <button className="btn btn-default" id="back-btn-seatGeek" type="submit">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}