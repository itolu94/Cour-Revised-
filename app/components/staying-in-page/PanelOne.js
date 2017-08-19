import React, {Component} from 'react';

export default class PanelOne extends Component{
    constructor(){
        super();
    }
    yelpSearch(){

    }
    render(){
        return(
            <div className="col-lg-6 first-info-panel">
                <div className="panel panel-default panel-going-out">
                    <div className="panel-body panelfirst">
                        <h1 className="col-lg-12 row-null">invisible</h1>
                        <div className="category col-lg-12  Cooking-click">
                            <div className="col-lg-offset-4 col-lg-1"><img src="./assets/css/Images/CookingIcon.svg" alt="cooking icon" className="category-icon" /></div>
                            <h1 className="col-lg-12">Cooking</h1>
                        </div>
                        <div className="category col-lg-12 Cocktails-click">
                            <div className="col-lg-offset-4 col-lg-1"><img src="./assets/css/Images/ShakerIcon.svg" alt="cocktails icon" className="category-icon" /></div>
                            <h1 className="category col-lg-12">Cocktails</h1>
                        </div>
                        <div className="category col-lg-12 Desert-click">
                            <div className="col-lg-offset-4 col-lg-1"><img src="./assets/css/Images/DesertIcon.svg" alt="desert icon" className="category-icon" /></div>
                            <h1 className="col-lg-12">Dessert</h1>
                        </div>
                        <div className="col-lg-12">
                            <div className="col-lg-offset-4 col-lg-1"><img src="./assets/css/Images/CocktailIcon.svg" alt="cocktail icon" className="category-icon row-null" /></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}