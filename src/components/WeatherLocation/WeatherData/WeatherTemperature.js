import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import "./styles.css"
import {CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE} from "./../../../constants/wheathers"


const icons = {
    [SUN]: "day-sunny",
    [CLOUD]: "cloud",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",

};

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";

    if(icon) 
        // Set icon
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    else
        // Icon default
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
};

const WeatherTemperature = ({ temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">Cº</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;