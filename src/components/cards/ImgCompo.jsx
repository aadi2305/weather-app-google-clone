import React from 'react';


const ImgCompo = (props) => {
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
        <div id = "scrollerItem">
            <p>{props.tempe + "°C"}</p>
            <div style = {{
                height : props.tempe *5 + "px"
            }}
            
            id = "verticleLine"></div>
            
            <img src={props.src} />
            
            <p>{hours + ampm}</p>
        </div>
     );
}
 
export default ImgCompo;