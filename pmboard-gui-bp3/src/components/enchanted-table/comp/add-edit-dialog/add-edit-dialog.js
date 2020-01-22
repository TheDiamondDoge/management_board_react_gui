import React from "react";
import {HTMLTable, Button, Classes, Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";
import {EnchantedTableColsConfig} from "../../../../util/custom-types";
import {Formik} from "formik";
import FormikInput from "../../../util-renderers/util-renderers";
import {FieldName} from "../../../field-name/field-name";
import styles from "./add-edit-dialog.module.css";
import {formikFieldHandleChange} from "../../../../util/util";

export default class AddEditDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            multiselect: {}
        };
    }

    submitForm = null;

    render() {
        const {columns, data, validationSchema, onSubmit, onCancel} = this.props;
        return (
            <Formik
                onSubmit={
                    (values, formikActions) => {
                        formikActions.setSubmitting(false);
                        onSubmit(values);
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
                                        {/*TODO: multiselect + dynamic select population ???*/}
                                        {columns.map((col) => {
                                            const columnId = col.id;
                                            const columnName = col.headerName;
                                            const input = col.inputType;
                                            let optionalProps = {};
                                            if (input === "date") {
                                                optionalProps.onChange = formikFieldHandleChange(formikProps)(columnId);
                                            }

                                            if (input === "select") {
                                                optionalProps.values = col.selectValues ? col.selectValues : [];
                                            }
                                            //TODO: end it
                                            if (input === "multiselect") {
                                                optionalProps.items = [
                                                    {value: "1", label: "1"},
                                                    {value: "2", label: "2"},
                                                    {value: "3", label: "3"},
                                                ];
                                                optionalProps.selectedItems = this.state.multiselect[columnId] || [];
                                                optionalProps.onItemSelect = this.onItemSelect(columnId, formikProps);
                                                optionalProps.onRemove = this.onRemove(columnId, formikProps);
                                            }

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
                                                                {...optionalProps}
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

    //TODO: refactor this
    onItemSelect(id, formikProps) {
        const self = this;
        return function (val) {
            console.log(val);
            self.setState((prev) => {
                let prevFilters = prev.multiselect[id] ? prev.multiselect[id] : [];
                const isExist = self.getObjByLabel(val.label, prevFilters) || false;
                if (val && !isExist) {
                    const filtersArr = [...prevFilters, val];
                    self.updateForm(id, filtersArr.map((obj) => obj.value), formikProps);
                    return {
                        multiselect: {...prev.multiselect, [id]: filtersArr}
                    }
                }
            });
        }
    };

    //TODO: refactor this
    getObjByLabel(label, selectedItems) {
        console.log("LABEL", label);
        const {empty} = "(none)";
        label = label === empty ? "" : label;
        selectedItems = selectedItems || [];
        console.log("SELEEECTEEED", selectedItems);
        for (let i = 0; i < selectedItems.length; i++) {
            if (selectedItems[i].label == label) {
                console.log("OBJECT", selectedItems[i]);
                return selectedItems[i];
            }
        }
    }

    //TODO: refactor this
    updateForm(id, value, formikProps) {
        formikProps.setFieldValue(id, value);
    }

    //TODO: refactor this
    onRemove(id, formikProps) {
        const self = this;
        return function (value) {
            let filtersArr = self.state.multiselect[id];
            let index = -1;
            filtersArr.forEach((obj, i) => {
                if (obj.value === value.value) {
                    index = i;
                }
            });

            if (index !== -1) {
                filtersArr.splice(index, 1);
                self.updateForm(id, filtersArr.map((obj) => obj.value), formikProps);
                self.setState((prev) => ({
                    multiselect: {...prev.multiselect, [id]: filtersArr}
                }));
            }
        }
    }
}

AddEditDialog.propTypes = {
    columns: PropTypes.arrayOf(EnchantedTableColsConfig).isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
};