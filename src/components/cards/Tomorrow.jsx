import React from 'react';
import "./cardsCSS/Today.css";
import "./cardsCSS/Tomorrow.css";
import todaysDate from "./date"
import NextDayScroller from "./NextDayScroller";
import BottomOfToday from "./BottomOfToday";
import axios from "./axios";

var link = window.location.href.split("/")
var city = link[link.length-1];

const Today = () => {
    const [nextDaysData, setNextDaysData] = React.useState([]);

    React.useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/getForecastDataOfNextDays/" + city);
            //console.log(req.data);
            setNextDaysData(req.data);
        }
        fetchData();
    }, [])


    return ( 
        <div className = "today">
        <div className = "tomUpperPart">
            <div className="row">
            <h2 className = "date" style = {{paddingBottom: "8px"}}>{city.slice(0,1).toUpperCase()+city.slice(1,city.length)}</h2>
                    <h2 className = "date">{todaysDate.nextDay+ ", " + todaysDate.nextMonth + " " 
                        + todaysDate.nextDate }
                    </h2>
                <div id = "temperatureClass" className="col col-6">
                    <h1 id = "tomorrowDescription" >{nextDaysData.slice(0,1).map((item)=>(item.description))}</h1>
                </div>
                <div className="col col-6">
                    <img id = "weatherImg" src={"http://openweathermap.org/img/wn/"+nextDaysData.slice(0,1).map((item)=>(item.icon))+"@2x.png"} alt=""/>
                    
                </div>
            </div> 
            <div className="row">
                
            </div> 
            <NextDayScroller date = {todaysDate.nextDate}/>
        </div>
            <BottomOfToday humidity = {nextDaysData.slice(0,1).map((item)=>(item.humidity))} 
                            windSpeed = {nextDaysData.slice(0,1).map((item)=>(item.wind))}
                            pressure = {nextDaysData.slice(0,1).map((item)=>(item.pressure))}
                            visibility = {nextDaysData.slice(0,1).map((item)=>(item.visibility))}/>
        </div>
     );
}
 
export default Today;