import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended'
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            // Operador ternario, this.props.city se setea mediante Redux
            // cuando en location list container es clickeado, de lo contrario
            // retnorna null
                this.props.city ? 
                <ForecastExtended city={this.props.city}></ForecastExtended> :
                null
            );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

// se hace el mapeo de las acciones a ejecutar con el dispatch
const mapStateToProps = state =>  ({city: state.city});


export default connect(mapStateToProps, null)(ForecastExtendedContainer);