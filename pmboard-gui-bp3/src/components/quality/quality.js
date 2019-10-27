import React from 'react';
import {HTMLTable, Icon, Button, Intent} from "@blueprintjs/core";
import EditSaveControls from "../edit-save-contols/edit-save-controls";
import styles from "./quality.module.css";
import {FieldName} from "../field-name/field-name";
import FieldValue from "../field-value/field-value";
import PropTypes from "prop-types";
import {FieldArray, Formik} from "formik";
import {renderComment, renderInput} from "../../util/util-renders";

export default class Quality extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: true,
        };
    }

    onSubmitForm = null;

    bindFormSubmission = (formikSubmit) => {
        this.onSubmitForm = formikSubmit;
    };

    onClickEdit = () => {
        this.setState(
            (prevState) => ({editMode: !prevState.editMode})
        )
    };

    render() {
        const {qualityKpi, fields, onSubmit} = this.props;
        return (
            <Formik
                initialValues={
                    {
                        quality: qualityKpi.quality,
                        defects: qualityKpi.defects,
                        backlog: qualityKpi.backlog,
                        testExecution: qualityKpi.testExecution,
                        testRate: qualityKpi.testRate
                    }
                }
                onSubmit={values => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 500);

                    onSubmit(values);
                }
                }
                render={
                    (formikProps) => {
                        this.bindFormSubmission(formikProps.submitForm);
                        return this.renderQualityForm(formikProps.values, fields);
                    }
                }
            />

        );
    }

    renderQualityForm = (values, fields) => (
        <>
            <div>
                <div className={styles.float_left}>
                    <Button
                        intent={"primary"}
                        minimal={true}
                    >
                        <Icon icon={"refresh"}/>
                    </Button>
                    Last synchro: {this.props.qualityKpi.syncDate}
                </div>
                <EditSaveControls
                    className={styles.float_right}
                    onClick={this.onClickEdit}
                    onSubmit={this.onSubmitForm}
                    editMode={this.state.editMode}
                />
            </div>
            <HTMLTable
                className={styles.quality_table}
                striped={true}
            >
                <colgroup>
                    <col className={styles.descr_col}/>
                    <col className={styles.controls_col}/>
                    <col className={styles.obj_col}/>
                    <col className={styles.actual_col}/>
                    <col/>
                </colgroup>
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th className={styles.column_align_center}>Objective</th>
                    <th className={styles.column_align_center}>Actual value</th>
                    <th className={styles.column_align_center}>Comment</th>
                </tr>
                </thead>
                <tbody>
                {
                    Object.keys(fields).map(field => {
                            if (field === "testExecution" || field === "testRate") {
                                return this.renderComplexRows(values, field);
                            } else {
                                return this.renderSingleRow(values, field);
                            }
                        }
                    )
                }
                </tbody>
            </HTMLTable>
        </>
    );

    renderSingleRow = (values, field) => (
        <tr key={field}>
            <td>
                <FieldName name={this.props.fields[field].label}/>
            </td>
            <td>&nbsp;</td>
            <td className={styles.column_align_center}>
                <FieldValue value={values[field].objective} editMode={this.state.editMode}/>
            </td>
            <td className={styles.column_align_center}>
                {
                    renderInput(`${field}.actual`, values[field].actual, this.state.editMode)
                }

            </td>
            <td className={styles.column_align_center}>
                {
                    renderComment(`${field}.comment`, values[field].comment, this.state.editMode)
                }
            </td>
        </tr>
    );

    renderComplexRows = (values, field) => {
        const rowsNum = values[field].length;
        const rowSpan = rowsNum < 2 ? 1 : rowsNum;
        return (
            <FieldArray
                key={field}
                name={field}
                render={(arrayHelpers) => {
                    if (values[field] && values[field].length === 0) {
                        values[field] = [this.getEmptyRowObject()];
                    }

                    return values[field].map((row, i) => (
                        <tr key={`${field}_${i}`}>
                            {
                                i === 0
                                    ? <td rowSpan={rowSpan}>
                                        <FieldName name={this.props.fields[field].label}/>
                                        {
                                            this.state.editMode
                                                ? this.getMiniButton(
                                                () => arrayHelpers.push(this.getEmptyRowObject()),
                                                "add",
                                                Intent.SUCCESS
                                                )
                                                : ""
                                        }
                                    </td>
                                    : ""
                            }
                            <td>
                                {
                                    this.state.editMode
                                        ? this.getMiniButton(
                                        () => this.removeRow(values[field], arrayHelpers, i),
                                        "delete",
                                        Intent.DANGER
                                        )
                                        : ""
                                }
                            </td>
                            <td className={styles.column_align_center}>
                                {
                                    renderInput(`${field}[${i}].objective`, row.objective, this.state.editMode)
                                }
                            </td>
                            <td className={styles.column_align_center}>
                                {
                                    renderInput(`${field}[${i}].actual`, row.actual, this.state.editMode)
                                }
                            </td>
                            {
                                i === 0
                                    ? <td rowSpan={rowSpan} className={styles.column_align_center}>
                                        {
                                            renderComment(`${field}[${i}].comment`, row.comment, this.state.editMode)
                                        }
                                    </td>
                                    : ""
                            }
                        </tr>
                    ))
                }
                }/>
        )
    };

    getEmptyRowObject = () => ({
        rowNumber: "",
        objective: "",
        actual: "",
        comment: ""
    });

    getMiniButton = (onClick, icon, intent) => (
        <Button
            style={{display: "inline-block"}}
            onClick={onClick}
            minimal
            icon={icon}
            intent={intent}
        />
    );

    removeRow = (values, arrayHelpers, i) => {
        if (values.length === 1) {
            arrayHelpers.unshift(this.getEmptyRowObject());
            arrayHelpers.pop();
        } else {
            arrayHelpers.remove(i);
        }
    };
}

Quality.propTypes = {
    fields: PropTypes.object,
    qualityKpi: PropTypes.object,
    onSubmit: PropTypes.func,
};