import React, {Component} from 'react';

export default class PanelOne extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="col-lg-6 col-sm-12 first-info-panel">
                <div className="panel panel-default panel-going-out">
                    <div className="panel-body panelfirst">
                        <h1 className="2 row-null">invisible</h1>
                        <div className="category 2  Cooking-click">
                            <div className="  text-center">
                                <img src="./assets/css/Images/CookingIcon.svg" alt="cooking icon" className="category-icon" />
                                <h1 className="">Cooking</h1>                                
                            </div>
                        </div>
                        <div className="category  Cocktails-click">
                            <div className=" "><img src="./assets/css/Images/ShakerIcon.svg" alt="cocktails icon" className="category-icon" /></div>
                            <h1 className="category ">Cocktails</h1>
                        </div>
                        <div className="category  Desert-click">
                            <div className=" "><img src="./assets/css/Images/DesertIcon.svg" alt="desert icon" className="category-icon" /></div>
                            <h1 className="">Dessert</h1>
                        </div>
                        <div className="">
                            <div className=" "><img src="./assets/css/Images/CocktailIcon.svg" alt="cocktail icon" className="category-icon row-null" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}