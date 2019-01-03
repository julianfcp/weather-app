import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import "./styles.css"



const WeatherData = ({ data : { temperature, weatherState, humidity, wind}  }) => ( //destructuring

    <div className="WeatherDataCont">
        <WeatherTemperature 
            temperature={temperature} 
            weatherState={weatherState}
        />
        <WeatherExtraInfo 
            humidity={humidity} 
            wind={wind}
        />
    </div>
);

export default WeatherData;