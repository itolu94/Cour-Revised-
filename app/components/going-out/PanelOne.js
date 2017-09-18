import React, {Component} from 'react';
import ReactCSSTransitionGropu from 'react-addons-css-transition-group';



export default class PanelOne extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }
    render(){
        const display = {display: this.props.searchBox}
        const displayActivity = {display: this.props.pannel}
        const displayMap = {display: this.props.mapDisplay }
        return(
            <div className="col-lg-6 col-sm-12">
                <div className="panel panel-default panel-going-out">
                    <div className="panel-body">
                        <div id="first-info-panel1" style={displayActivity}>
                            <div onClick={() => this.props.hanldeTransitions(1, 'Coffee')} className="category rounded-top col-lg-12 left-side-click" id="coffee-click">
                                <div className="">
                                    <img src="assets/css/Images/CoffeeIcon.svg" alt="coffee icon" className="category-icon" />
                                    <h1 className="">Coffee</h1>                                
                                </div>
                            </div>
                            <div onClick={() => this.props.hanldeTransitions(1, 'Restaurants')} className="category left-side-click" id="restaurants-click">
                                <div className="">
                                    <img src="assets/css/Images/DinnerIcon.svg" alt="dinner icon" className="category-icon" />
                                </div>
                                <h1 className="category ">Restaurants</h1>
                            </div>
                            <div onClick={() => this.props.hanldeTransitions(1, 'Libations')} className="category  left-side-click" id="libations-click">
                                <div className="">
                                    <img src="assets/css/Images/CocktailIcon.svg" alt="cocktail icon" className="category-icon" />
                                </div>
                                <h1 className="">Libations</h1>
                            </div>
                            <div onClick={() =>this.props.hanldeTransitions(1, 'Museum')} className="category rounded-bottom  left-side-click" id="museum-click">
                                <div className="">
                                    <img src="assets/css/Images/MuseumIcon.svg" alt="museum icon" className="category-icon" />
                                </div>
                                <h1 className="">Museum</h1>
                            </div>
                        </div>
                        <div style={display} className="col-lg-12" id="panel1-results">
                            <div className="col-lg-12 search">
                                <form role="form">
                                    <div className="form-group">
                                        <label for="name-input" id="name-inputGM">Zip Code</label>
                                        <input
                                        onChange={(e) => this.props.handleChange(e)}
                                        value={this.props.value}  
                                        className="form-control" id="zip-code-inputGM" type="text" data-bind="value: location" />
                                    </div>
                                </form>
                                <button onClick={() => this.props.yelp(this.props.value, 1)}className="btn btn-default" id="add-infoGM" type="submit">Submit</button>
                                <button onClick={() => this.props.revert()} className="btn btn-default" id="back-btn-panel1" type="submit">Back</button>
                            </div>
                        </div>
                        <div style={displayMap}>
                          <div className="col-lg-12 googleMapsAPI">
                            <div id="map">
                            </div>
                          </div>
                          <div id="seatGeek-back-btn-container">
                           <button onClick={() => this.props.revert()} className="btn btn-default" id="back-btn-seatGeek" type="submit">Back</button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}