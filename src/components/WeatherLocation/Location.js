import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = (props) => {
    // Destructuring
    var {city} = props;

    return (
        <div className="locationCont">
            <h2> {city} </h2>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;