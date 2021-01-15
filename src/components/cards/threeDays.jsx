import React from 'react';
import Columns from "./Columns";
import axios from "./axios";
import "./cardsCSS/threeDays.css";

var link = window.location.href.split("/")
var city = link[link.length-1];

var days = ["Sunday", "Monday", "Tuesday",
                "Wednesday", "Thursday", "Friday",
                "Saturday"];
var months= ["January","February","March",
            "April","May","June","July",
            "August","September","October",
            "November","December"]; 


const ThreeDays = () => {
    const [forecastDataOfNextDays, setForecastDataOfNextDays] = React.useState([]);
    React.useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/getForecastDataOfNextDays/"+ city);
            setForecastDataOfNextDays(req.data);
        }
        fetchData();
    }, [])
   
    
    var theList = [];
    for(var i = 0; i<5 ; i++){
        var d = new Date();
        d.setDate(new Date().getDate()+i);
        var object1 = {
            date: d.getDate(),
            month: months[d.getMonth()],
            day: days[d.getDay()]
        }
        theList.push(object1);
    }
    var nextDay = new Date();
    nextDay.setDate(new Date().getDate()+1);
    return ( 
        <div className="threeDays container-fluid">
            {
            forecastDataOfNextDays.map((item)=>(
                <Columns 
                date = {item.date == new Date().getDate()? "Today": item.date} 
                month = {item.date == new Date().getDate()? "": months[item.day.slice(5,7)-1]} 
                description = {item.description} 
                icon = {item.icon}
                humidity = {item.humidity}
                pressure = {item.pressure}
                visibility = {item.visibility}
                wind = {item.wind}
                />
            ))
            }
        </div>
     );
}
 
export default ThreeDays;