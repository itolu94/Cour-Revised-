import React, {Component} from 'react';
import Calendar from 'react-calendar-pane';
import moment from 'moment';

export default class SeatGeeksSearchBar extends Component {
    constructor(){
        super()
    }
    changeDate(e){
        let date = moment(e._d).format("YYYY/MM/DD");
        date = date.replace(/\//g, "-")
        this.props.handleChange(date, "date");
    }

    render(){
    return(
        <div  className="col-lg-12 search2">
            <form role="form">
                <div className="form-group">
                    <label  id="name-inputSG">Zip Code
                    <input onChange={(e) => this.props.handleChange(e.target.value, "zipcode")} value={this.props.zipcode} className="form-control" id="zip-code-inputSG" type="text" />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <h1>Date</h1>
                    </label>
                    <input  value={this.props.date} className="form-control" id="date-input" type="text" placeholder="YYYY,MM,DD (2017-12-23)" />
                    <Calendar onSelect={(e)=> this.changeDate(e)} className="calender" date={moment("2017/10/22", "YYYY/MM/DD/")} />

                </div>
            </form>
            <button onClick={() => this.props.seatGeek()} className="btn btn-default" id="add-infoSG" type="submit">Submit</button>
            <button onClick={() => this.props.revert()} className="btn btn-default" id="back-btn-panel2" type="submit">Back</button>
        </div>
        )
    }
}