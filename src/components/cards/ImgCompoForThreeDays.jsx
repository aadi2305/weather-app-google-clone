import React from 'react';

const ImgCompoForThreeDays = (props) => {
    var hours = props.hours;
    var ampm = "";
    if(hours > 12){
        hours = hours - 12;
        ampm = " pm";
    }else if(hours < 12){
        ampm = " am";
    }else{
        ampm = " pm"
    }
    return ( 
        <div id = "threeDaysScrollerItem">
            <p id = "temp">{props.tempe + "°C"}</p>
            <img src={props.src} />
            <p>{hours + ampm}</p>
        </div>
     );
}
 
export default ImgCompoForThreeDays;