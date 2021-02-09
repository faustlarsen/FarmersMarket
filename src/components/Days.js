import React from 'react';
import PropTypes from "prop-types";


function Days(props) {
    return (
        <React.Fragment>
            <h4>{props.day}</h4>
            <h4>{props.location}</h4>
            <h4>{props.hours}</h4>
        </React.Fragment>
    )
}

Days.PropTypes = {
    day: PropTypes.string,   //not sure about int or string?
    location: PropTypes.string,
    hours: PropTypes.string,
}

export default Days;