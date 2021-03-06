import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import getUrlByCity from './../../services/getUrlByCity';
import PropTypes from 'prop-types';
import Location from './Location'
import transformWeather from './../../services/transformWeather';
import WeatherData from './WeatherData';
import './styles.css';



class WeatherLocation extends Component { // class component

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            data: null,
        }
        
    }

    componentDidMount() {
        console.log("componentDidMount Weather Location");
        // En esta funcion se maneja la actualizacion de datos usando la api weather
        // se hace fetch a la url y se parametrizan los datos mediante la funcion transformWeather
        const api_weather = getUrlByCity(this.state.city);
        fetch(api_weather).then( resolve => { 
            return resolve.json();
        }).then( data => {
            // Utilizo el try catch para verificar si la url fue correcamente enviada
            // en caso contrario la funcion transformWeather no podra ser seteada
            // correctamente
            try {
                const newWeather = transformWeather (data);
                console.log(newWeather);
                this.setState({
                    data: newWeather
                });
            }catch (err) {
                this.setState({
                    data: "Error"
                });
            }

        });
    }
    
    componentDidUpdate(prevProps, prevState) {
    }
    
    render() {
        console.log("render Weather Location");
        //onWeatherLocationClick se envia hacia Arriba como props para manejar el evento Click
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state; //destructuring 
        // Utilizo un operador ternario para evaluar si los datos se han setiado
        // en caso contrario se muestra " Loading ... " hasta que los datos vengan del servidor
        // Tecnica de Burbujeo => Envia onWeatherLocationClick del evento on Click hacia los
        // niveles superiores por medio de las propiedades (props)
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location> 
                {data ? <WeatherData data={data}></WeatherData>
                      :  <CircularProgress size={50}/>
                }
                
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
}

export default WeatherLocation;

