import React from 'react';
import PropTypes from "prop-types";


function Days(props) {
    return (
        <React.Fragment>
            <h4>{props.day}</h4>
            <h4>{props.location}</h4>
            <h4>{props.hours}</h4>
            <h4>Booth: {props.booth}</h4>
        </React.Fragment>
        
    );
}

Days.propTypes = {
    day: PropTypes.string,   
    location: PropTypes.string,
    hours: PropTypes.string,
    booth: PropTypes.string
};

export default Days;