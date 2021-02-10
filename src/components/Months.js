import React from 'react';
import PropTypes from "prop-types";


function Months(props) {
    return (
        <React.Fragment>
            <h4>{props.month}</h4>
            <h4>{props.selection.map((produce, index) =>
              <ul>key={index} {produce}</ul>
            )}</h4> 
        </React.Fragment>
    )
}

    Months.propTypes = {
        month: PropTypes.string,
        selection: PropTypes.array 
    }


export default Months;