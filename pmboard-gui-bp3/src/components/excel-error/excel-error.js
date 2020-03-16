import React from "react";

export default class ExcelError extends React.PureComponent {
    render() {
        const {cellIndex, rowIndex, message} = this.props;
        return(
            <div style={{marginBottom: "10px"}}>
                <b>Column:</b> {cellIndex + 1}. <b>Row:</b> {rowIndex + 1}. <br/>
                <b>Error:</b> {message}
            </div>
        )
    }
}

ExcelError.propTypes = {
    ExcelError
};