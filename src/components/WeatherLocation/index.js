import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location'
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import WeatherData from './WeatherData';
import './styles.css';


class WeatherLocation extends Component { // class component

    constructor() {
        super();
        this.state = {
            city: "Cali",
            data: null,
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    
    // Esta funcion maneja la actualizacion de datos usando la api weather
    // se hace fetch a la url y se parametrizan los datos mediante la funcion transformWeather
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
          
    }

    render() {
        console.log("render");
        const {city, data} = this.state; //destructuring 
        // Utilizo un operador ternario para evaluar si los datos se han setiado
        // en caso contrario se muestra " Loading ... " hasta que los datos vengan del servidor
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location> 
                {data ? <WeatherData data={data}></WeatherData>
                      : "Loading... " /* <CircularProgress /> */
                }
            </div>
        );
    }
}

export default WeatherLocation;

