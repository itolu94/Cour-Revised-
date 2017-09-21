import React, {Component} from 'react';

export default class Activities extends Component {
    constructor() {
        super();
    }
    render(){
        return(
                <div id="first-info-panel2">
                    <h1 className="col-lg-12 row-null">invisible</h1>
                    <div onClick={() => this.props.handleTransitions('seatgeekSearch', "concert")}
                        className="category col-lg-12 concerts-sports-click" id="concerts-click"
                        >
                        <div className="col-lg-offset-4 col-lg-1"><img src="assets/css/Images/ConcerIcon.svg" alt="concerts icon" className="category-icon" /></div>
                        <h1 className="col-lg-12">Concerts</h1>
                    </div>
                    <div onClick={() => this.props.handleTransitions('seatgeekSearch', "sports")} 
                    className="category col-lg-12 concerts-sports-click" id="sports-click">
                        <div className="col-lg-offset-4 col-lg-1"><img src="assets/css/Images/SportsIcon.svg" alt="sports icon" className="category-icon" /></div>
                        <h1 className="category col-lg-12">Sports</h1>
                    </div>
                    <div className="category col-lg-12 concerts-sports-click" id="theater-click">
                        <div className="col-lg-offset-4 col-lg-1"><img src="assets/css/Images/TheaterIcon.svg" alt="theater icon" className="category-icon" /></div>
                        <h1 className="col-lg-12">Theater</h1>
                    </div>
                </div>
        )
    }
}