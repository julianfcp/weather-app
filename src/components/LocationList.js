import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponents = cities => (
    //funcion que recorre el arreglo "cities" e imprime weather location
    //en la iteracion
    cities.map( city => <WeatherLocation city={city} />)
);


const LocationList = ({ cities }) => (
        <div>
            {strToComponents(cities)}
        </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;