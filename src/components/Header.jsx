import React from 'react';
import "./Header.css";

const Header = () => {
    var clicked =1;
    const [current, changeCurrent] = React.useState(1);
    const [one, oneState] = React.useState(true);
    const [two, twoState] = React.useState(false);
    const [three, threeState] = React.useState(false);

    const oneClicked = () =>{
        if(current === 1)oneState(false);
        else if(current === 2)twoState(false);
        else if(current === 3)threeState(false);

        oneState(true);
        changeCurrent(1);
    }
    const twoClicked = () =>{
        if(current === 1)oneState(false);
        else if(current === 2)twoState(false);
        else if(current === 3)threeState(false);

        twoState(true);
        changeCurrent(2);
    }
    const threeClicked = () =>{
        if(current === 1)oneState(false);
       else if(current === 2)twoState(false);
       else if(current === 3)threeState(false);

       threeState(true);
        changeCurrent(3);
    }
    return ( 
        <div className = "header container-fluid">
        <div className = "row">
            <div onClick = {oneClicked} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className = "col colHeader">
                <h2 className = "h2class"id ={one? "duhtext":null}>TODAY</h2>
                <div id = {one? "duh":"hsadf"}></div>
            </div>

            <div onClick = {twoClicked} data-bs-target="#carouselExampleIndicators"data-bs-slide-to="1" className = "col colHeader">
                <h2 className = "h2class" id ={two? "duhtext":null}>TOMORROW</h2>
                <div id = {two? "duh":"hsadf"}></div>
            </div>

            <div onClick = {threeClicked} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"className = "col colHeader">
                <h2 className = "h2class"id ={three? "duhtext":null}>5 DAYS</h2>
                <div id = {three? "duh":"hsadf"}></div>
            </div>
        </div>
    </div>
     );
}
 
export default Header;