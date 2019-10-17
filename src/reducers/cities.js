import { SET_FORECAST_DATA } from './../actions';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            // en action payload viene {city: payload, forecastData}, hacemos destructuring
            const {city, forecastData} = action.payload;
            // creamos el diccionario [city] es la key para cada rama
            return {...state, [city]: {forecastData: forecastData, weather: null}}
        default:
            return state;
    }
}