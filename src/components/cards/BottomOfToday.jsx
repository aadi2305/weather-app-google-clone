import React from 'react';
const Details = (props) =>{
    return(
    <div className="row">
        <div className="col"><p>{props.name}</p></div>
        <div className="col"><p>{props.number }</p></div>
    </div>
    )
}

const BottomOfToday = (props) => {
    return ( 
        <div className="bottom-part">
            <h4>Current Details</h4>
            <Details name = "Humidity" number = {props.humidity + "%"} />
            <Details name = "Wind Speed" number = {props.windSpeed + " m/sec"} />
            <Details name = "Pressure" number = {props.pressure + " mBar"} />
            <Details name = "Visibility" number = {props.visibility/1000 + " kM"} />
            
        </div>
       
     );
}
 
export default BottomOfToday;