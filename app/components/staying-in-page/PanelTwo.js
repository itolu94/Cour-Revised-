import React, {Component} from 'react';

export default class PanelTwo extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="col-lg-6 panel2">
                <div className="panel panel-default panel-going-out">
                    <div className="panel-body panelsecond">
                        <h1 className="col-lg-12 row-null">invisible</h1>
                        <div className="category col-lg-12 DIY-click">
                            <div className="col-lg-offset-4 col-lg-1"><img src="./assets/css/Images/DIYIcon.svg" alt="DIY icon" className="category-icon" /></div>
                            <h1 className="col-lg-12">DIY</h1>
                        </div>
                        <div className="category col-lg-12 Movie-click">
                            <div className="col-lg-offset-4 col-lg-1"><img src="./assets/css/Images/MovieIcon.svg" alt="Movie icon" className="category-icon" /></div>
                            <h1 className="category col-lg-12">Movie</h1>
                        </div>
                        <div className="category col-lg-12 Play-click">
                            <div className="col-lg-offset-4 col-lg-1 "><img src="./assets/css/Images/PlayIcon.svg" alt="play icon" className="category-icon" /></div>
                            <h1 className="col-lg-12">Play</h1>
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