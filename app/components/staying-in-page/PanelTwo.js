import React, {Component} from 'react';

export default class PanelTwo extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="col-lg-6 col-sm-12 panel2">
                <div className="panel panel-default panel-going-out">
                    <div className="panel-body panelsecond">
                        <h1 className=" row-null">invisible</h1>
                        <div className="category  DIY-click">
                            <div className=""><img src="./assets/css/Images/DIYIcon.svg" alt="DIY icon" className="category-icon" /></div>
                            <h1 className="">DIY</h1>
                        </div>
                        {/*<div className="category  Movie-click">*/}
                            {/*<div className=""><img src="./assets/css/Images/MovieIcon.svg" alt="Movie icon" className="category-icon" /></div>*/}
                            {/*<h1 className="category ">Movie</h1>*/}
                        {/*</div>*/}
                        <div className="category  Play-click">
                            <div className=" "><img src="./assets/css/Images/PlayIcon.svg" alt="play icon" className="category-icon" /></div>
                            <h1 className="">Play</h1>
                        </div>
                        <div className="">
                            <div className=""><img src="./assets/css/Images/CocktailIcon.svg" alt="cocktail icon" className="category-icon row-null" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}