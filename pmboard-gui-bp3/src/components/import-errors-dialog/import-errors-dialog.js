import React from 'react';
import PropTypes from 'prop-types';
import {Classes, Dialog, Icon} from "@blueprintjs/core";
import {Intent} from "@blueprintjs/core/lib/cjs/common/intent";
import ExcelError from "../excel-error/excel-error";
import {ExcelErrorTypes} from "../../util/custom-types";


function ImportErrorsDialog({isOpen, onClose, errors}) {
    const message = "Excel file uploaded with following errors:";
    const dialogTitle = "Warning";
    return (
        <Dialog
            isOpen={isOpen}
            title={dialogTitle}
            icon={
                <Icon
                    icon={"warning-sign"}
                    intent={Intent.WARNING}
                />
            }
            onClose={onClose}
        >
            <div className={Classes.DIALOG_BODY}>
                {message}
                <ul>
                    {errors.map((err, index) =>
                        <li key={index}>
                            <ExcelError {...err}/>
                        </li>
                    )}
                </ul>
            </div>
        </Dialog>
    );
}

ImportErrorsDialog.defaultProps = {
    errors: []
};

ImportErrorsDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    errors: PropTypes.arrayOf(PropTypes.shape({
        ExcelErrorTypes
    })),
};

export default React.memo(ImportErrorsDialog);