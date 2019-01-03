import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import {SNOW, RAIN} from "./../../constants/wheathers"
import './styles.css';

// Weather api
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f6e14397267c980d1c3e3172c4b8f325

const location = "Buenos Aires, ar";
const api_key = "";
const url_base_weather = "";



// Las funciones y/o constantes van por fuera de la clase
const data = {
    temperature: 2,
    weatherState: SNOW,
    humidity: 10,
    wind: "5 m/s",
}

const data2 = {
    temperature: 10,
    weatherState: RAIN,
    humidity: 20,
    wind: "5 m/s",
}

const getNumberOfDaysInMonth = (month, year) =>  {
    // devuelve el numero de dias de un mes
    return new Date(year, month, 0).getDate();
  };
const getDayInMonth = () => {
    return new Date("2018-08-28").getDay();
}


class WeatherLocation extends Component { // Arrow function

    constructor() {
        super();
        this.state = {
            city: "Rio",
            data: data,
        }
    } 

    handleUpdateClick = () => {
        console.log("Actualizado!");
        this.setState({
            city: "Cali",
            data: data2,
        });
        console.log(getNumberOfDaysInMonth(1, 2012));
        console.log() 
    }

    

    render() {
        const {city, data} = this.state; //destructuring 
        return (
            <div className="weatherLocationCont">
                <Location 
                    city={city}>
                </Location> 
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;

