import React from "react";
import {HTMLTable, Button, Classes, Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";
import {EnchantedTableColsConfig} from "../../../../util/custom-types";
import {Formik} from "formik";
import FormikInput from "../../../controls/util-renderers";
import FieldName from "../../../field-name/field-name";
import styles from "./add-edit-dialog.module.css";
import {formikFieldHandleChange, getPropFromStringPath} from "../../../../util/util";
import {getObjByLabel, removeSelectedObjByLabel} from "../../util";

export default class AddEditDialog extends React.Component {
    submitForm = null;

    render() {
        const {columns, data, validationSchema, editDynamicInputVals, onSubmit, onCancel} = this.props;
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
                                        {columns.map((col) => {
                                            const columnId = col.id;
                                            const columnName = col.headerName;
                                            const inputType = col.inputType;
                                            const itemsToSelectFrom = col.selectValues || getPropFromStringPath(editDynamicInputVals, columnId);
                                            let optionalProps = this.getSpecificProps(inputType, {
                                                formikProps,
                                                columnId,
                                                items: itemsToSelectFrom,
                                                selected: this.mapSelectedToObject(formikProps.values[columnId]),
                                            });
                                            return (
                                                col.editable && (
                                                    <tr key={columnId}>
                                                        <td className={styles.col_name}>
                                                            <FieldName name={columnName}/>
                                                        </td>
                                                        <td className={styles.col_value}>
                                                            <FormikInput
                                                                type={inputType}
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

    mapSelectedToObject(selected) {
        return Array.isArray(selected)
            ? selected.map(item => ({value: item, label: item}))
            : selected;
    }

    onItemSelect(id, formikProps) {
        return function (val) {
            let prevFilters = formikProps.values[id] ? formikProps.values[id] : [];
            const isExist = getObjByLabel(val.label, prevFilters) || false;
            if (val && !isExist) {
                const filtersArr = [...prevFilters, val.label];
                formikFieldHandleChange(formikProps)(id)(filtersArr);
            }
        }
    };

    onRemove(id, selectedValues, formikProps) {
        return function (obj) {
            let newArr = removeSelectedObjByLabel(obj, selectedValues);
            const values = newArr.map((elem) => elem.value);
            formikFieldHandleChange(formikProps)(id)(values);
        }
    }

    getSpecificProps(type, {formikProps, columnId, selected, items}) {
        let optionalProps = {};
        switch (type) {
            case "date":
                optionalProps.onChange = formikFieldHandleChange(formikProps)(columnId);
                break;
            case "select":
                optionalProps.values = items ? items : [];
                break;
            case "multiselect":
                optionalProps.items = items;
                optionalProps.selectedItems = this.mapSelectedToObject(formikProps.values[columnId]) || [];
                optionalProps.onItemSelect = this.onItemSelect(columnId, formikProps);
                optionalProps.onRemove = this.onRemove(columnId, selected, formikProps);
                break;
            case "checkbox":
                optionalProps.value = formikProps.values[columnId];
                break;
            default:
                return optionalProps;
        }

        return optionalProps;
    }
}

AddEditDialog.propTypes = {
    columns: PropTypes.arrayOf(EnchantedTableColsConfig).isRequired,
    data: PropTypes.object,
    validationSchema: PropTypes.object,
    editDynamicInputVals: PropTypes.object,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
};