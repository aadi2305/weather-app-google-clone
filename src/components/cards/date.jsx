import React from 'react';

var days = ["Sunday", "Monday", "Tuesday",
                "Wednesday", "Thursday", "Friday",
                "Saturday"];
var months= ["January","February","March",
                "April","May","June","July",
                "August","September","October",
                "November","December"];  

var tomorrow = new Date();
tomorrow.setDate(new Date().getDate()+1);
var todaysDate = {
    nextDay: days[tomorrow.getDay()],
    nextDate: tomorrow.getDate(),
    nextMonth: months[tomorrow.getMonth()],
    day : days[new Date().getDay()],
    month : months[new Date().getMonth()],
    date : new Date().getDate(),
    hours : new Date().getHours(),
    minutes : new Date().getMinutes(),
}

export default todaysDate

// 
