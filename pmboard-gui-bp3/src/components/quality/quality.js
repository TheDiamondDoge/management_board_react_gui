import React from 'react';
import {HTMLTable, Icon, Button, Intent} from "@blueprintjs/core";
import EditSaveControls from "../edit-save-contols/edit-save-controls";
import styles from "./quality.module.css";
import {FieldName} from "../field-name/field-name";
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
        const {qualityKpi, onSubmit} = this.props;
        const {quality, defects, backlog, testExecution, testRate} = qualityKpi;
        return (
            <Formik
                initialValues={
                    {
                        quality, defects, backlog, testExecution, testRate
                    }
                }
                onSubmit={
                    values => {
                        onSubmit(values);
                        this.onClickEdit();
                    }
                }
                render={
                    (formikProps) => {
                        this.bindFormSubmission(formikProps.submitForm);
                        return this.renderQualityForm(formikProps.values);
                    }
                }
            />

        );
    }

    renderQualityForm = (values) => {
        const {syncDate} = this.props.qualityKpi;
        const fields = this.props.fields;
        return(
            <>
                <div>
                    <div className={styles.float_left}>
                        <Button
                            intent={"primary"}
                            minimal={true}
                        >
                            <Icon icon={"refresh"}/>
                        </Button>
                        Last synchro: {syncDate}
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
                                    return this.renderComplexRows(values, field, true);
                                } else {
                                    return this.renderComplexRows(values, field, false);

                                }
                            }
                        )
                    }
                    </tbody>
                </HTMLTable>
            </>
        )
    };

    renderComplexRows = (values, field, isControlled) => {
        const rowsNum = values[field].length;
        const rowSpan = rowsNum < 2 ? 1 : rowsNum;
        let indicators = values[field];
        return (
            <FieldArray
                key={field}
                name={field}
                render={(arrayHelpers) => {
                    const rowTitle = this.props.fields[field].label;
                    if (indicators && indicators.length === 0) {
                        indicators = [this.getEmptyRowObject()];
                    }

                    return indicators.map((row, i) => (
                        <tr key={`${field}_${i}`}>
                            {
                                i === 0
                                    ? <td rowSpan={rowSpan}>
                                        <FieldName name={rowTitle}/>
                                        {
                                            this.renderControls(
                                                "add",
                                                () => arrayHelpers.push(this.getEmptyRowObject()),
                                                this.state.editMode,
                                                isControlled
                                            )
                                        }
                                    </td>
                                    : ""
                            }
                            <td>
                                {
                                    this.renderControls(
                                        "delete",
                                        () => this.removeRow(values[field], arrayHelpers, i),
                                        this.state.editMode,
                                        isControlled
                                    )
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

    renderControls = (type, onClick, isEditMode, isControlled) => {
        const args = this.getControlProps(type);
        return (
            isEditMode && isControlled
                ? this.getMiniButton(onClick, args.icon, args.intent)
                : ""
        )
    };

    getControlProps = (type) => {
        if (type === "delete") {
            return ({
                icon: "delete",
                intent: Intent.DANGER
            })
        } else {
            return ({
                icon: "add",
                intent: Intent.SUCCESS
            })
        }
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