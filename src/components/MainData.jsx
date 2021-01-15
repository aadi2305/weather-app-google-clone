import React from 'react';
import "./MainData.css";
import Today from "./cards/Today";
import Tomorrow from "./cards/Tomorrow";
import ThreeDays from "./cards/threeDays";
import $ from "jquery";

const MainData = () => {
    const [pageNo, setPageNo] = React.useState(1);
    return ( 
        <div >
            <div id="carouselExampleIndicators" data-touch = "true"  class="carousel slide" data-interval="false" data-ride="carousel" data-pause="hover" >
              {/* {console.log(($('div.active').index() + 1))} */}
              <div className="carousel-inner">
                <div  className="carousel-item active">
                  <Today  className="d-block w-100"  />
                </div>
                <div className="carousel-item">
                  <Tomorrow  className="d-block w-100" />
                </div>
                <div onTouchStart = {()=>{
                  console.log("here2");
                }}className="carousel-item">
                  <ThreeDays  className="d-block w-100" />
                </div>
              </div>
              
            </div>
        </div>
     );
}
 
export default MainData;




