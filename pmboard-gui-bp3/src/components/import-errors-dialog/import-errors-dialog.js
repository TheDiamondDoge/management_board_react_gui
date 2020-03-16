import React from 'react';
import PropTypes from 'prop-types';
import {Classes, Dialog, Icon} from "@blueprintjs/core";
import {Intent} from "@blueprintjs/core/lib/cjs/common/intent";
import ExcelError from "../excel-error/excel-error";


export default function ImportErrorsDialog(props) {
    const {isOpen, onClose, errors} = props;
    const message = "Excel file uploaded with following errors:";
    return (
        <Dialog isOpen={isOpen}
                title={"Warning"}
                icon={
                    <Icon icon={"warning-sign"} intent={Intent.WARNING}/>
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
        ExcelError
    })),
};