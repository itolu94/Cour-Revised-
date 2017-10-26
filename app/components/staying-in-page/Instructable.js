import React,{Component} from 'react';
import makeChart, {dessertData} from '../../../public/assets/js/instructableData/data.js';

export default class Instructable extends Component{
constructor(){
    super();
}

componentWillMount(){
    makeChart({categories: dessertData}, "categories", dessertData);

}
 render(){
     return(
         <div className="bubbleContainer">
         <link rel='stylesheet' type='text/css' href='assets/js/instructable_Static/style.css' />
            <div className="">
                <div className="bubbleAPI">
                    <h3> Double click a bubble! </h3>
                        <div className='bubble-wrapper'>    
                        </div>
                </div>
            </div>
         </div>

     )
 }   
}

        // var bubbleContainer = $("<div class=' bubbleContainer'>")
        // var link = $("<link rel='stylesheet' type='text/css' href='assets/js/instructable_Static/style.css'>")
        // var container = $("<div class=''>")
        // var bubbleAPI = $("<div class='bubbleAPI'>")
        // var header = $("<h3> Double click a bubble! </h3>");
        // var bubbleWrapper = $("<div class='bubble-wrapper'>")
        // $('#app').on('click', '.Cooking-click', function() {
        //     // console.log('click was recognized!');
        //     $('.panelfirst').hide();
        //     $('.panelsecond').fadeIn(3000);
        //     bubbleContainer.append(link)
        //     bubbleContainer.append(container)
        //     container.append(bubbleAPI)
        //     bubbleAPI.append(header);
        //     bubbleAPI.append(bubbleWrapper)
        //     bubbleContainer.hide()
        //     bubbleContainer.fadeIn(2000);
        //     $(".first-info-panel").append(bubbleContainer)
        
        //     makeChart({ categories: instructablesDataFood }, "categories", instructablesDataFood);
        // });
