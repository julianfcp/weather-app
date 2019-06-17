import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';



// Location List recibe Cities como el arreglo de ciudades
// y envia onSelectionClickWL para manejar el evento click que viene de Abajo (WL)
const LocationList = ({ cities, onSelectionClickWL }) => {

    const handleWLClick = (city) => {
        console.log("Weather Location was Selected");
        onSelectionClickWL(city);
    }

    const strToComponents = (cities) => (
        //funcion que recorre el arreglo "cities" e imprime weather location
        //en la iteracion
        // onWeatherLocationClick viene de Abajo (WL) como props para manejar el evento Click
        cities.map( (city) => (
            <WeatherLocation 
                key={city} 
                city={city} 
                onWeatherLocationClick={() => handleWLClick(city)} 
            />)
        )
    );
    return (
        <div>
            {strToComponents(cities)}
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectionClickWL: PropTypes.func.isRequired, 
}

export default LocationList;