import React from 'react'
import './Forecastio.css'

import search_icon from '../assests/search.png';
import clear_icon from '../assests/clear.png';
import drizzle_icon from '../assests/drizzle.png';
import humidity_icon from '../assests/humidity.png';
import rain_icon from '../assests/rain.png';
import cloud_icon from '../assests/cloud.png';
import snow_icon from '../assests/snow.png';
import wind_icon from '../assests/wind.png';

const Forecastio = () => {

   let api_key = "0125b1043dbd646bad4b9a2fe954022a";

   const search = async () => {
         const elemet =document.getElementsByClassName("cityInput")
         if(elemet[0].value==="")  
   
        {
            return 0;

        }

        let url =`https://api.openweathermap.org/data/2.5/weather?q=${elemet[0].value}&appid=${api_key}`;
        
        let response = await fetch(url);
        let data = await response.json();
        const humidity=document.getElementsByClassName("humiditypercentage");
        const wind = document.getElementsByClassName("windrate");
        const temprature = document.getElementsByClassName("weathertemp");
        const location = document.getElementsByClassName("weatherlocation");

        



   }

return (

     <div className='container'>

        <div className="top-bar">
         <input type="text" className="cityInput"  placeholder='Search'/>
            <div className="search-icon" onClick={() =>{search()}}>
              <img src ={search_icon} alt=''/>

            </div>
        </div>
      <div className="weatherimage">
          <img src ={cloud_icon} alt=""/>
      </div>
      <div className="weathertemp">24°c</div>
      <div className="weatherlocation">Colombo</div>
      <div className="datacontainer">
         <div className="element">

           <img src={humidity_icon} alt="" className="icon" />
           <div className="data">
            <div className="windrate">64%</div>
            <div className="text">Humidity</div>
           </div>
         </div>
         <div className="element">
           <img src={wind_icon} alt="" className="icon" />
           <div className="data">
            <div className="humiditypercentage">18 Km/h</div>
            <div className="text">Wind Speed</div>
           </div>
         </div>
      </div>


             
     </div>

);


}

export default Forecastio

