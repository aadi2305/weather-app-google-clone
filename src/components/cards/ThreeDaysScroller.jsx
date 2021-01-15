import React from 'react';
import axios from "./axios";
import ImgCompoForThreeDays from "./ImgCompoForThreeDays";

var link = window.location.href.split("/")
var city = link[link.length-1];

const ThreeDaysScroller = (props) => {
    const [forecastData, setForecastData] = React.useState([]);
    React.useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/getForecastData/"+city);
            setForecastData(req.data);
        }
        fetchData();
    }, [])
    return ( 
        <div className="threeDaysScroller">
            {forecastData.map((item)=>(
                item.date == props.date ?<div className="item"><ImgCompoForThreeDays hours = {item.hours}tempe = {item.temp} src = {"http://openweathermap.org/img/wn/"+item.icon+".png"} /></div>:null
            ))}
        </div>
     );
}
 
export default ThreeDaysScroller;