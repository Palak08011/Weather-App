import React from 'react';

import './WeatherApp.css'
import clear from '../Assests/clear.png' 
import cloudy from '../Assests/cloudy.png'
import drizzle from '../Assests/drizzle.png'
import humidity_icon from '../Assests/humidity_icon.png'
import rain from '../Assests/rain.png'
import search_icon from '../Assests/search_icon.png'
import snowWeather from '../Assests/snow.png'
import wind_icon from '../Assests/wind_icon.png'
const WeatherApp = ()=>{
    return (<div className='container'>
        <div className='top-bar'>
            <input type = "text" className='cityInput' placeholder='search'></input>
            <div className='search-icon'>
            <img src={search_icon}></img>
        </div>
        
        </div>
        <div className='weather-image'>
            <img src={cloudy}></img>
        </div>
        <div className='weather-temp'>
            24°c
        </div>
        <div className='weather-location'>Jaipur</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity_icon} className='icon'  />
                <div className='data'>
                    <div className='humidity-percent'>
                        64%
                    </div>
                    <div className='text'>Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src={wind_icon} className='icon'  />
                <div className='data'>
                    <div className='humidity-percent'>
                        18km/h
                    </div>
                    <div className='text'>Wind Speed</div>
                </div>
            </div>
        </div>
    </div>)
}
export default WeatherApp