import React from "react";
import {HTMLTable, Button, Classes, Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";
import {EnchantedTableColsConfig} from "../../../../util/custom-types";
import {Formik} from "formik";
import FormikInput from "../../../util-renderers/util-renderers";
import {FieldName} from "../../../field-name/field-name";
import styles from "./add-edit-dialog.module.css";

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
                                <div className={styles.table_container}>
                                    <HTMLTable>
                                        <thead>
                                        <tr>
                                            <td className={styles.col_name}>
                                                <FieldName name={"Column name"}/>
                                            </td>
                                            <td className={styles.col_value}>
                                                <FieldName name={"Value"}/>
                                            </td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {/*TODO: add formic custom input handler for type = "date"*/}
                                        {/*TODO: multiselect + dynamic select population ???*/}
                                        {columns.map((col) => {
                                            const columnId = col.id;
                                            const columnName = col.headerName;
                                            const input = col.inputType;
                                            const selectValues = col.selectValues ? col.selectValues : [];
                                            return (
                                                col.editable && (
                                                    <tr key={columnId}>
                                                        <td className={styles.col_name}>
                                                            <FieldName name={columnName}/>
                                                        </td>
                                                        <td className={styles.col_value}>
                                                            <FormikInput
                                                                type={input}
                                                                name={columnId}
                                                                values={selectValues}
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        })}
                                        </tbody>
                                    </HTMLTable>
                                </div>
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