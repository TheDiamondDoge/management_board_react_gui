import React from "react";
import PropTypes from "prop-types";

export default class ExcelError extends React.PureComponent {
    render() {
        const {cellIndex, rowIndex, message} = this.props;
        return(
            <span>
                <b>Column:</b> {cellIndex + 1}. <b>Row:</b> {rowIndex + 1}. <b>Error:</b> {message}
            </span>
        )
    }
}

ExcelError.propTypes = {
    cellIndex: PropTypes.number.isRequired,
    rowIndex: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
};