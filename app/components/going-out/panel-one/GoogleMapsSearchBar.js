import React, {Component} from 'react';



// style={calendarStyle}
export default class GoogleMapsSearchBar extends Component{
    constructor(){
        super();
    }

    render(){
        return(
        <div  className="col-lg-12" id="panel1-results">
            <div className="col-lg-12 search">
                <form role="form">
                    <div className="form-group">
                        <label for="name-input" id="name-inputGM">Zip Code</label>
                        <input
                        onChange={(e) => this.props.handleChange(e, "zipcode")}
                        value={this.props.zipcode}  
                        className="form-control" id="zip-code-inputGM" type="text" data-bind="value: location" />

                    </div>
                </form>
                <button onClick={() => this.props.yelp()}className="btn btn-default" id="add-infoGM" type="submit">Submit</button>
                <button onClick={() => this.props.revert()} className="btn btn-default" id="back-btn-panel1" type="submit">Back</button>
            </div>
        </div>
        );

    }
}