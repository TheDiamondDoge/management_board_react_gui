import React from 'react';
import {HTMLTable, Icon, Button, Intent, Position, Tooltip} from "@blueprintjs/core";
import EditSaveControls from "../edit-save-contols/edit-save-controls";
import styles from "./quality.module.css";
import {FieldName} from "../field-name/field-name";
import PropTypes from "prop-types";
import {FieldArray, Formik} from "formik";
import {renderComment, renderControls, renderInput} from "../../util/util-renders";
import HelpIcon from "../help-icon/help-icon";
import {dateFormatToString} from "../../util/transformFuncs";
import {FieldsToRenderShape, QualityIndicatorsShape} from "../../util/custom-types";

export default class Quality extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
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
        let {quality, defects, backlog, testExecution, testRate} = qualityKpi;

        quality = this.fillArrayIfEmpty(quality);
        defects = this.fillArrayIfEmpty(defects);
        backlog = this.fillArrayIfEmpty(backlog);
        testExecution = this.fillArrayIfEmpty(testExecution);
        testRate = this.fillArrayIfEmpty(testRate);

        return (
            <Formik
                initialValues={
                    {
                        quality,
                        defects,
                        backlog,
                        testExecution,
                        testRate
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

    fillArrayIfEmpty(object) {
        if (object.length === 0) {
            object.push(this.getEmptyRowObject(""));
        }
        return object;
    };

    renderQualityForm = (values) => {
        const {syncDate} = this.props.qualityKpi;
        const {fieldsToRender, onCancel} = this.props;

        return (
            <>
                <div>
                    <div className={styles.float_left}>
                        <Button
                            intent={"primary"}
                            minimal={true}
                        >
                            <Icon icon={"refresh"}/>
                        </Button>
                        Last synchro:
                        <span className={styles.sync_date}>{dateFormatToString(new Date(syncDate))}</span>
                    </div>
                    <EditSaveControls
                        className={styles.float_right}
                        onClick={this.onClickEdit}
                        onSubmit={this.onSubmitForm}
                        editMode={this.state.editMode}
                        onCancel={onCancel}
                    />
                </div>
                <HTMLTable
                    className={styles.quality_table}
                    striped={true}
                >
                    <colgroup>
                        <col className={styles.descr_col}/>
                        <col className={styles.controls_col}/>
                        <col className={styles.controls_col}/>
                        <col className={styles.obj_col}/>
                        <col className={styles.actual_col}/>
                        <col/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th className={styles.column_align_center}>Objective</th>
                        <th className={styles.column_align_center}>Actual value</th>
                        <th className={styles.column_align_center}>Comment</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(fieldsToRender).map(field => {
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
                    const rowTitle = this.props.fieldsToRender[field].label;
                    const help = this.props.fieldsToRender[field].help;
                    if (indicators && indicators.length === 0) {
                        indicators = [this.getEmptyRowObject("")];
                    }
                    const comment = indicators[0].comment;
                    const isObjEditable = this.isEditable(field);
                    return indicators.map((row, i) => (
                        <tr key={`${field}_${i}`}>
                            {
                                i === 0
                                    ? <>
                                        <td rowSpan={rowSpan}>
                                            <FieldName name={rowTitle}/>
                                            {
                                                <Tooltip content={help} position={Position.TOP}>
                                                    <HelpIcon/>
                                                </Tooltip>
                                            }
                                        </td>
                                        <td rowSpan={rowSpan}>
                                            {
                                                renderControls(
                                                    "add",
                                                    () => arrayHelpers.push(this.getEmptyRowObject(comment)),
                                                    this.state.editMode,
                                                    isControlled
                                                )
                                            }
                                        </td>
                                    </>
                                    : false
                            }
                            <td>
                                {
                                    renderControls(
                                        "delete",
                                        () => this.removeRow(values[field], arrayHelpers, i),
                                        this.state.editMode,
                                        isControlled
                                    )
                                }
                            </td>
                            <td className={styles.column_align_center}>
                                {
                                    renderInput(`${field}[${i}].objective`, row.objective, isObjEditable, "numeric")
                                }
                            </td>
                            <td className={styles.column_align_center}>
                                {
                                    renderInput(`${field}[${i}].actual`, row.actual, this.state.editMode, "numeric")
                                }
                            </td>
                            {
                                i === 0
                                    ? <td rowSpan={rowSpan} className={styles.column_align_center}>
                                        {
                                            renderComment(`${field}[${i}].comment`, comment, this.state.editMode)
                                        }
                                    </td>
                                    : false
                            }
                        </tr>
                    ))
                }
                }/>
        )
    };

    isEditable = (field) => {
        if (field === "quality" || field === "defects" || field === "backlog") {
            return false;
        } else {
            return this.state.editMode;
        }
    };

    getEmptyRowObject = (comment) => ({
        rowNumber: "",
        objective: "",
        actual: "",
        comment: comment
    });

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
    fieldsToRender: FieldsToRenderShape,
    qualityKpi: QualityIndicatorsShape,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
};