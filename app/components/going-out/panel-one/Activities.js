import React, {Component} from 'react';


export default class Activities extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="first-info-panel1">
                <div onClick={() => this.props.handleTransitions('googleSearch', 'Coffee')} className="category rounded-top col-lg-12 left-side-click" id="coffee-click">
                    <div className="">
                        <img src="assets/css/Images/CoffeeIcon.svg" alt="coffee icon" className="category-icon" />
                        <h1 className="">Coffee</h1>                                
                    </div>
                </div>
                <div onClick={() => this.props.handleTransitions('googleSearch', 'Restaurants')} className="category left-side-click" id="restaurants-click">
                    <div className="">
                        <img src="assets/css/Images/DinnerIcon.svg" alt="dinner icon" className="category-icon" />
                    </div>
                    <h1 className="category ">Restaurants</h1>
                </div>
                <div onClick={() => this.props.handleTransitions('googleSearch', 'Libations')} className="category  left-side-click" id="libations-click">
                    <div className="">
                        <img src="assets/css/Images/CocktailIcon.svg" alt="cocktail icon" className="category-icon" />
                    </div>
                    <h1 className="">Libations</h1>
                </div>
                <div onClick={() =>this.props.handleTransitions('googleSearch', 'Museum')} className="category rounded-bottom  left-side-click" id="museum-click">
                    <div className="">
                        <img src="assets/css/Images/MuseumIcon.svg" alt="museum icon" className="category-icon" />
                    </div>
                    <h1 className="">Museum</h1>
                </div>
            </div>
        );

    }
}