import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city: city,
        }
    }
    render () {
        return (
        <div>
            <h1>Hola {this.props.city}</h1>
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;