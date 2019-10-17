
import getUrlForecast from './../services/getUrlByCity';
import transformForecast from './../services/transformForecast';

// se estandarizan las acciones como constantes
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

// type es el nombre de la accion que creamos
// y value el valor para la accion

const setCity = payload => ({type: SET_CITY, payload}); // se utiliza internamente en setSelectedCity
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload}); // seteo el forecast data

// esta arrow function vincula SetCity y SetForcastData
export const setSelectedCity = payload => {
    return dispatch => {
        // fetch o axios, axios soporta navegadores viejos
        const api_forecast = getUrlForecast(payload);

        //vinculo SetCity cuando el usuario selecciona la ciudad
        dispatch(setCity(payload));

        fetch(api_forecast).then(
            // Cuando se ejecuta la promise se espera un objeto data
            // y se convierte a un objeto json
            data => (data.json())
        ).then(
            weather_data => {
                // Una ves convertido el objeto data a json se recibe en weather_data (variable 
                // nueva) y se muestra en consola
                console.log("ComponentDidMount ForecastExtended: " + payload )
                console.log(weather_data.list);
                // Se utiliza la funcion de transformacion para organizar los datos
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                dispatch(setForecastData({city: payload, forecastData}));
                
            }
        );
    }; 
};