import React, {Component} from 'react';

export default class SeatGeeksSearchBar extends Component {
    constructor(){
        super()
    }

    render(){
    return(
        <div  className="col-lg-12 search2">
            <form role="form">
                <div className="form-group">
                    <label for="name-input" id="name-inputSG">Zip Code</label>
                    <input onChange={(e) => this.props.handleChange(e, "zipcode")} value={this.props.zipcode} className="form-control" id="zip-code-inputSG" type="text" />
                </div>
                <div className="form-group">
                    <label for="name-input">
                        <h1>Date</h1>
                    </label>
                    <input onChange={(e) => this.props.handleChange(e, "data")} value={this.props.data} className="form-control" id="date-input" type="text" placeholder="YYYY,MM,DD (2017-12-23)" />
                </div>
            </form>
            <button onClick={() => this.props.seatGeek()} className="btn btn-default" id="add-infoSG" type="submit">Submit</button>
            <button onClick={() => this.props.revert()} className="btn btn-default" id="back-btn-panel2" type="submit">Back</button>
        </div>
        )
    }
}