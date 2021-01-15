import React from 'react';
import data from "./data.json";
import "./cards/cardsCSS/SearchBar.css";

const SearchBar = () => {

var theLetters = "";
const [suggetions, setSuggetions] = React.useState([]);
function triggered() {
    const searchInput = document.querySelector(".asdf");
    theLetters = searchInput.value;
    var notSorted = data.filter(fruit => fruit.city.toLowerCase().startsWith(theLetters.toLowerCase()));
    setSuggetions(notSorted);
}
function clicked(event) {   
    const searchInput = document.querySelector(".asdf");
    theLetters = searchInput.value;
    window.location.href = window.location.href+"/"+theLetters;
}
const submitHandler = (e)=>{
    e.preventDefault()
    const searchInput = document.querySelector(".asdf");
    theLetters = searchInput.value;
    window.location.href = window.location.href+"/"+theLetters;
}
    return ( 
        <div className="container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="row">
            <div className="dropdown">
                    <div className="form-group has-feedback row">
            
                        <form onSubmit = {submitHandler} className="inputAndSearchDiv">
                            <input type="text" className="form-control asdf dropdown-toggle" onKeyUp = {triggered} name = "inputValue" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuButton"  autoComplete = "off" name="search" id="search" placeholder="Search places" />
                            <button type="submit" className ="btn" onClick = {clicked}><i className="fa fa-search form-control-feedback"></i></button> 
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {
                                suggetions.slice(0,5).map((item)=>(
                                    <a href = {window.location.href+"/"+item.city}><li className="dropdown-item">{item.city + ", " + item.state + ", India" }</li></a>
                                ))
                            }
                            </ul>
                        </form>
                        
                    </div>
            </div>
        </div>
    </div>   
     );
}
 
export default SearchBar;




