import React from "react";
import styles from "./excel-error.module.scss";
import {ExcelErrorTypes} from "../../util/custom-types";

function ExcelError({cellIndex, rowIndex, message}) {
    const displayedCellIndex = cellIndex + 1;
    const displayedRowIndex = rowIndex + 1;
    return (
        <div className={styles.error_margin}>
            <b>Column:</b> {displayedCellIndex}. <b>Row:</b> {displayedRowIndex}. <br/>
            <b>Error:</b> {message}
        </div>
    )
}

ExcelError.propTypes = {
    ExcelErrorTypes
};

export default React.memo(ExcelError);