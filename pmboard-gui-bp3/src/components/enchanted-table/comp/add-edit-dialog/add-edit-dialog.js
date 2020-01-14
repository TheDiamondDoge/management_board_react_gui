import React from "react";
import {HTMLTable, Button, Classes, Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";
import {EnchantedTableColsConfig} from "../../../../util/custom-types";
import {Formik} from "formik";
import FormikInput from "../../../util-renderers/util-renderers";

export default class AddEditDialog extends React.Component {
    submitForm = null;

    render() {
        const {columns, data, validationSchema, onSubmit, onCancel} = this.props;
        return (
            <Formik
                onSubmit={
                    (values, formikActions) => {
                        formikActions.setSubmitting(false);
                        onSubmit(values);
                        // onCancel();
                    }
                }
                initialValues={data}
                validationSchema={validationSchema}
                render={
                    (formikProps) => {
                        this.submitForm = formikProps.submitForm;
                        return (
                            <>
                                <HTMLTable>
                                    <thead>
                                    <tr>
                                        {columns.map((col) => (
                                            col.editable && (
                                                <th key={`${col.id}_header`}>{col.headerName}</th>
                                            )
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        {columns.map((col) => (
                                            col.editable && (
                                                <td key={col.id}>
                                                    <FormikInput
                                                        type={col.inputType}
                                                        name={col.id}
                                                    />
                                                </td>
                                            )
                                        ))}
                                    </tr>
                                    </tbody>
                                </HTMLTable>
                                <div className={Classes.DIALOG_FOOTER}>
                                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                                        <Button
                                            text="Save"
                                            onClick={this.submitForm}
                                        />
                                        <Button
                                            text="Cancel"
                                            intent={Intent.DANGER}
                                            onClick={onCancel}
                                        />
                                    </div>
                                </div>
                            </>
                        );
                    }
                }
            />
        );
    }
}

AddEditDialog.propTypes = {
    columns: PropTypes.arrayOf(EnchantedTableColsConfig).isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
};