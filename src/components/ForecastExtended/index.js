import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getUrlForecast from './../../services/getUrlForecast';
import CircularProgress from '@material-ui/core/CircularProgress'
import ForecastItem from './ForecastItem';
import './styles.css';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

const data = {
    temperature: 25,
    weatherState: 'normal',
    humidity: 15,
    wind: 'normal',
}


class ForecastExtended extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            forecastData: null,
        }
    }

    componentDidMount() {
        // fetch o axios, axios soporta navegadores viejos
        const api_forecast = getUrlForecast(this.state.city);
        fetch(api_forecast).then(
            // Cuando se ejecuta la promise se espera un objeto data
            // y se convierte a un objeto json
            data => (data.json())
        ).then(
            weather_data => {
                // Una ves convertido el objeto data a json se recibe en weather_data (variable 
                // nueva) y se muestra en consola
                console.log("ComponentDidMount Forecast")
                console.log(weather_data);
            }
        )
    }

    forecastDay () {
        return days.map(day => (<ForecastItem key={day} weekDay={day} hour={10} data={data}></ForecastItem>));
    }

    render () {
        const {city} = this.props;
        const {forecastData} = this.state;
        // Este render muestra el div del forecast extendido para cada ciudad que sea clickeada
        // en el Location list, muestra  Forecast Item el cual utiliza Weather Data para mosrar
        // informacion por cada dia y condicional ternario para cargar barra de progreso.
        return (
        <div>
            <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
            {forecastData ? 
                this.forecastDay() :
                <CircularProgress size={30}/>
            }
            
        </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;