import react, {Component} from 'react';


export default class HomePage extends Component{
    constructor(){
        super();
    }
    render(){
        return(
        <div> 
          <div class="cour-text">COUR</div>
	      <img src="assets/css/Images/CourIcon.svg" alt="cour icon" id="cour-icon"/>
          <h3 id="panel-h3">Dating for 
            <span>
              <a type="button" class="btn" id="today-btn" href="secondPage.html">Today</a>
            </span>
          </h3>
        </div>
        )
    }
}