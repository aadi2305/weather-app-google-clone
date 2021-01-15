import { type } from 'jquery';
import React from 'react';
import ThreeDaysScroller from "./ThreeDaysScroller";
// import axios from "./axios";

// var link = window.location.href.split("/")
// var city = link[link.length-1];

const Details = (props) =>{
    return(
    <div className="row">
        <div className="col names"><p>{props.name}</p></div>
        <div className="col"><p>{props.number }</p></div>
    </div>
    )
}

const Columns = (props) => {
    // const [forecastDataOfNextDays, setForecastDataOfNextDays] = React.useState([]);
    // React.useEffect(() => {
    //     async function fetchData(){
    //         const req = await axios.get("/getForecastDataOfNextDays/" + city);
    //         setForecastDataOfNextDays(req.data);
    //     }
    //     fetchData();
    // }, [])
    var description = props.description.slice(0,1).toUpperCase() + props.description.slice(1,props.description.length)
    return ( 
        <div data-toggle="collapse" data-target={"#demo"+ props.date} className = "row">
            <div className="col cols">
                <p id = "threeDaysdate">{props.date +" "+ props.month}</p>
                <p id = "threeDaysDescription">{description}</p>
            </div>
            <div className="col cols">
                <img src={"http://openweathermap.org/img/wn/"+props.icon+"@2x.png"} />
            </div>
            
            <div id={"demo"+ props.date} class="collapse">
                <Details name = "Humidity" number = {props.humidity +"%"} />
                <Details name = "Wind Speed" number = {props.wind + " m/sec"} />
                <Details name = "Pressure" number = {props.pressure + " mBar"} />
                <Details name = "Visibility" number ={props.visibility/1000 + " kM"} />
                <ThreeDaysScroller date = {props.date} />
            </div>

            
        </div>
     );
}
 
export default Columns; 

