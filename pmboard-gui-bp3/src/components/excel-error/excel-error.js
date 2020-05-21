import React from "react";
import styles from "./excel-error.module.css";
import {ExcelErrorTypes} from  "../../util/custom-types";

export default class ExcelError extends React.PureComponent {
    render() {
        const {cellIndex, rowIndex, message} = this.props;
        const displayedCellIndex = cellIndex + 1;
        const displayedRowIndex = rowIndex + 1;
        return(
            <div className={styles.error_margin}>
                <b>Column:</b> {displayedCellIndex}. <b>Row:</b> {displayedRowIndex}. <br/>
                <b>Error:</b> {message}
            </div>
        )
    }
}

ExcelError.propTypes = {
    ExcelErrorTypes
};