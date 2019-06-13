import React, { Component } from 'react';
import Location from './Location'
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import WeatherData from './WeatherData';
import {SUN} from "./../../constants/wheathers"
import './styles.css';

// Las funciones y/o constantes van por fuera de la clase
const data = {
    temperature: 2,
    weatherState: SUN,
    humidity: 10,
    wind: "5 m/s",
}

class WeatherLocation extends Component { // class component

    constructor() {
        super();
        this.state = {
            city: "Cali",
            data: data,
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => { 
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather (data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        });
        console.log("Actualizado!");
          
    }

    render() {
        const {city, data} = this.state; //destructuring 
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location> 
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;

