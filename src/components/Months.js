import React from 'react';
import PropTypes from "prop-types";


function Months(props) {
    return (
        <React.Fragment>
            <h4>{props.month}</h4>
            <h4>{props.selection}</h4> {/* array within array */}
        </React.Fragment>
    )
}

    Months.PropTypes = {
        month: PropTypes.string,
        selection: PropTypes.string /* array within array */
    }


export default Months;