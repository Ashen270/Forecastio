import React from 'react'
import './Forecastio.css'

import search_icon from '..assests/search.png';
import clear_icon from '..assests/clear.png';
import drizzle_icon from '..assests/drizzle.png';
import humidity_icon from '..assests/humidity.png';
import rain_icon from '..assests/rain.png';
import cloud_icon from '..assests/cloud.png';
import snow_icon from '..assests/snow.png';
import wind_icon from '..assests/wind.png';

const Forecastio = () => {

return (

     <div className='container'>

        <div className="top-bar">
         <input type="text" className="cityInput"  placeholder='Search'/>
            <div className="searchicon">
              <img src ={search_icon} alt=''/>

            </div>
        </div>


     </div>

)


}

export default Forecastio

