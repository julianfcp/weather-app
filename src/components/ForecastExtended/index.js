import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getUrlForecast from './../../services/getUrlForecast';
import transformForecast from './../../services/transformForecast';
import CircularProgress from '@material-ui/core/CircularProgress'
import ForecastItem from './ForecastItem';
import './styles.css';


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
        this.updateCity(this.props.city);
    }
    componentDidUpdate(prevProps, prevState) {
        // Este compomente se utiliza una ves se actualice una ciudad
        // diferente de la primera ves y se resetea los valores de forecastData 
        if(prevProps.city !== this.props.city) {
            this.setState({
                forecastData: null
            })
            console.log("Cambio ciudad: " + this.props.city);
            this.updateCity(this.props.city);
        }
    }

    componentWillReceiveProps(nextProps) {
        // Este componente sera eliminado por React
    }

    updateCity = (city) => {
        // fetch o axios, axios soporta navegadores viejos
        const api_forecast = getUrlForecast(city);
        fetch(api_forecast).then(
            // Cuando se ejecuta la promise se espera un objeto data
            // y se convierte a un objeto json
            data => (data.json())
        ).then(
            weather_data => {
                // Una ves convertido el objeto data a json se recibe en weather_data (variable 
                // nueva) y se muestra en consola
                console.log("ComponentDidMount ForecastExtended: " + this.state.city )
                console.log(weather_data.list);
                // Se utiliza la funcion de transformacion para organizar los datos
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({
                    forecastData: forecastData,
                });
                
            }
        )
    }

    forecastDay = (forecastData) => {
        return forecastData.map(forecast => (
            <ForecastItem key={forecast.weekDay+forecast.hour} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>
        ));
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
                this.forecastDay(forecastData) :
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