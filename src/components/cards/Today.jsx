import React from 'react';
import "./cardsCSS/Today.css";
import todaysDate from "./date"
import Scroller from "./Scroller";
import BottomOfToday from "./BottomOfToday";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import axios from "./axios";
import { param } from 'jquery';

var link = window.location.href.split("/")
var city = link[link.length-1];

const Today = () => {
    const [currentData, setCurrentData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/getCurrentData/"+city);
            //console.log(req.data);
            setCurrentData(req.data);
            setLoading(false);
        }
        fetchData();
    }, [])
    // console.log(window.location.href);
    return ( 
        <div className = "today">
        {loading ?  <h1 className = "loadingText">Loading...</h1>: 
            <div className = "upperPart">
                <div className="row">
                    <h2 className = "date" style = {{paddingBottom: "8px"}}>{city.slice(0,1).toUpperCase()+city.slice(1,city.length)}</h2>
                        <h2 className = "date">{todaysDate.day + ", " + todaysDate.month + " " 
                            + todaysDate.date + ", " + todaysDate.hours + 
                            ":" + todaysDate.minutes}
                        </h2>
                    <div id = "temperatureClass" className="col col-6">
                        <h1 id = "temperature">{Math.ceil(currentData.temp)} <span id = "degreeCelcius">°C</span></h1>  
                    </div>
                    <div className="col col-6">
                        <img id = "weatherImg" src={"http://openweathermap.org/img/wn/"+currentData.icon+"@2x.png"} alt=""/>
                        
                    </div>
                </div> 
                <div className="row">
                    <div className="col" id = "descriptionDiv">
                        <h3 className = "date" >{"Feels like " + Math.ceil(currentData.feels_like) + " °C"}</h3>
                    </div>
                    <div className="col">
                        <h3 id = "description" >{currentData.description}</h3>
                    </div>
                </div> 
                <Scroller />
            </div> }
            <BottomOfToday      humidity = {currentData.humidity} 
                                windSpeed = {currentData.windSpeed}
                                pressure = {currentData.pressure}
                                visibility = {currentData.visibility}/>
                
        </div>
     );
}
 
export default Today;