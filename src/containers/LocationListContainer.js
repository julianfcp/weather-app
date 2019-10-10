import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
import { setCity } from './../actions';

class LocationListContainer extends Component {
    handleSelectionClickWL = city => {
        console.log("LocationList Container: Selecciono ciudad: " + city);    
        // se ejecuta la funcion setCity como resultado de la conexion
        // de la aplicacion con redux
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList 
                cities={this.props.cities} 
                onSelectionClickWL={this.handleSelectionClickWL}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {

};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,  
    // validacion funcion setCity inyectada por el dispatch de redux mediante connect
    setCity: PropTypes.func.isRequired,
}

// se hace el mapeo de las acciones a ejecutar con el dispatch
const mapDispatchToPropsActions = (dispatch) => ({
    setCity: value => dispatch(setCity(value))
  });
  // Se realiza la conexion de la aplicacion con redux
const LocationLConnected = connect(null, mapDispatchToPropsActions)(LocationListContainer);
  // Se exporta el componente luego de la conexion con redux
export default LocationLConnected;