import React from 'react';
import ImgCompo from "./ImgCompo";
import axios from "./axios";

var link = window.location.href.split("/")
var city = link[link.length-1];

const Scroller = () => {

    const [forecastData, setForecastData] = React.useState([]);
    React.useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/getForecastData/" + city);
            setForecastData(req.data);
        }
        fetchData();
    }, [])
    return ( 
        <div className="scroller">
            {forecastData.slice(0,8).map((item)=>(
                item.date == new Date().getDate()?<div className="item"><ImgCompo hours = {item.hours}tempe = {item.temp} src = {"http://openweathermap.org/img/wn/"+item.icon+".png"} /></div> :null
            ))}
        </div>
     );
}
 
export default Scroller;