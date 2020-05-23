import React from 'react';
import {HTMLTable, Icon, Button, Position, Tooltip} from "@blueprintjs/core";
import EditSaveControls from "../controls/edit-save-controls/edit-save-controls";
import styles from "./quality.module.css";
import FieldName from "../field-name/field-name";
import PropTypes from "prop-types";
import {FieldArray, Formik} from "formik";
import FormikInput, {RenderControls} from "../controls/util-renderers";
import HelpIcon from "../help-icon/help-icon";
import {FieldsToRenderShape, ProjectDefaults, QualityIndicatorsShape} from "../../util/custom-types";
import FieldValue from "../field-value/field-value";
import {formikFieldHandleChange, getSpecialNumericRegexp} from "../../util/util";
import getValidationSchema from "./validation-schema";
import Comment from "../comment/comment";
import RenderFieldHelper from "../../util/render-field-helper";
import LastUpdated from "../last-updated/last-updated";
import {Messages} from "../../util/constants";
import OnSubmitValidationError from "../formik-onsubmit-validator";
import SafeUrl from "../safe-url/safe-url";

export default class Quality extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        };
    }

    onSubmitForm = null;
    updateNumericHandler = null;

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
                isInitialValid
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
                validationSchema={
                    getValidationSchema()
                }
                render={
                    (formikProps) => {
                        this.bindFormSubmission(formikProps.submitForm);
                        this.updateNumericHandler = formikFieldHandleChange(formikProps);
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
        const controlsAttrName = "controls";
        const {syncDate} = this.props.qualityKpi;
        const {fieldsToRender, onCancel, fieldsRenderValidation} = this.props;
        const renderHelper = new RenderFieldHelper(fieldsToRender, fieldsRenderValidation);
        const controlsRendered = renderHelper.displayOrNot(controlsAttrName);
        const editBtnProps = this.getSyncButtonProps(!!fieldsRenderValidation.dr1Actual);

        return (
            <>
                <div>
                    <div className={styles.float_left}>
                        {
                            controlsRendered &&
                            <Button
                                minimal
                                intent={"primary"}
                                {...editBtnProps}
                            >
                                <Icon icon={"refresh"}/>
                            </Button>
                        }
                        Last synchro:
                        <LastUpdated
                            className={styles.sync_date}
                            dateStr={syncDate}
                        />
                    </div>
                    {
                        controlsRendered &&
                        <EditSaveControls
                            className={styles.float_right}
                            onClick={this.onClickEdit}
                            onSubmit={this.onSubmitForm}
                            editMode={this.state.editMode}
                            onCancel={onCancel}
                        />
                    }
                </div>
                <HTMLTable
                    striped
                    className={styles.quality_table}
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
                        <th/>
                        <th/>
                        <th/>
                        <th className={styles.column_align_center}>Objective</th>
                        <th className={styles.column_align_center}>Actual value</th>
                        <th className={styles.column_align_center}>Comment</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(fieldsToRender).map(field => {
                                if (renderHelper.displayOrNot(field)) {
                                    if (field === "testExecution" || field === "testRate") {
                                        return this.renderComplexRows(values, field, true);
                                    } else {
                                        return this.renderComplexRows(values, field, false);
                                    }
                                }

                                return true;
                            }
                        )
                    }
                    </tbody>
                </HTMLTable>
                <OnSubmitValidationError callback={this.handleSubmitWithErrors}/>
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
                    const isActualEditable = this.isEditable(field);
                    return indicators.map((row, i) => {
                        const inputAttrs = this.getInputAttrs(isControlled, field, i);
                        const isRenderControlsNeeded = this.state.editMode && isControlled;
                        const objectiveName = `${field}[${i}].objective`;
                        const actualName = `${field}[${i}].actual`;
                        const commentName = `${field}[${i}].comment`;
                        return (
                            <tr key={`${field}_${i}`}>
                                {
                                    (i === 0) &&
                                    <>
                                        <td rowSpan={rowSpan}>
                                            <div className={styles.title_container}>
                                                <div className={styles.row_name_container}>
                                                    <FieldName name={rowTitle}/>
                                                </div>
                                                <div className={styles.help_container}>
                                                    <Tooltip content={help} position={Position.TOP}>
                                                        <HelpIcon className={styles.help_icon}/>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </td>
                                        <td rowSpan={rowSpan}>
                                            {
                                                isRenderControlsNeeded &&
                                                <RenderControls
                                                    type="add"
                                                    onClick={() => arrayHelpers.push(this.getEmptyRowObject(comment))}
                                                    className={styles.controls}
                                                />
                                            }
                                        </td>
                                    </>
                                }
                                <td>
                                    {
                                        isRenderControlsNeeded &&
                                        <RenderControls
                                            type="delete"
                                            onClick={() => this.removeRow(values[field], arrayHelpers, i)}
                                            className={styles.controls}
                                        />
                                    }
                                </td>
                                <td className={styles.column_align_center}>
                                    {
                                        this.state.editMode
                                            ? (
                                                <FormikInput
                                                    name={objectiveName}
                                                    {...inputAttrs}
                                                />
                                            )
                                            : <FieldValue value={this.emptyToZero(row.objective)}/>
                                    }
                                </td>
                                <td className={styles.column_align_center}>
                                    {
                                        this.renderActual(isActualEditable, actualName, row.actual)
                                    }
                                </td>
                                {
                                    (i === 0) &&
                                    <td
                                        rowSpan={rowSpan}
                                        className={styles.column_align_center}
                                    >
                                        {
                                            this.state.editMode
                                                ? (
                                                    <FormikInput
                                                        type="textarea"
                                                        name={commentName}
                                                    />
                                                )
                                                : <Comment value={comment}/>
                                        }
                                    </td>
                                }
                            </tr>
                        )
                    })
                }
                }/>
        )
    }

    isEditable = (field) => {
        if (field === "quality" || field === "defects" || field === "backlog") {
            return false;
        } else {
            return this.state.editMode;
        }
    };

    emptyToZero = (value) => {
        return value === "" ? 0 : value;
    }

    getEmptyRowObject = (comment) => ({
        rowNumber: 0,
        objective: 0,
        actual: 0,
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

    getSyncButtonProps(isDr1ActualExists) {
        const {updateInProcess} = this.props.qualityKpi;
        const editBtnProps = {};
        if (!isDr1ActualExists) {
            editBtnProps.disabled = true;
            editBtnProps.title = "Set DR1 date to enable syncro";
        }
        editBtnProps.loading = updateInProcess;

        return editBtnProps;
    }

    getInputAttrs(isControlled, fieldName, i) {
        const inputAttrs = {};
        const name = `${fieldName}[${i}].objective`;
        if (isControlled) {
            const regexp = getSpecialNumericRegexp();
            inputAttrs.onChange = this.updateNumericHandler(name, regexp);
            inputAttrs.type = "text";
        } else {
            inputAttrs.onValueChange = this.updateNumericHandler(name);
            inputAttrs.type = "numeric";
        }

        return inputAttrs;
    }

    renderActual(isEditable, name, value) {
        if (isEditable) {
            return (
                <FormikInput
                    type="text"
                    name={name}
                />
            )
        } else {
            const val = this.emptyToZero(value);
            const regex = new RegExp(/backlog|quality|defects/);
            const {projectId} = this.props;
            // eslint-disable-next-line eqeqeq
            if (val != 0 && regex.test(name)) {
                const type = name.match(regex);
                const url = `http://localhost:8080/api/kpi/${type}/issuesList/${projectId}`;
                return <SafeUrl url={url} label={val}/>
            } else {
                return (
                    <FieldValue value={val}/>
                )
            }
        }
    }

    handleSubmitWithErrors = (formikProps) => {
        if (!formikProps.isValid && !formikProps.isSubmitting) {
            this.props.onSubmitErrorCallback(Messages.FORM_SUBMIT_ERROR)
        }
    }
}

Quality.propTypes = {
    projectId: PropTypes.number,
    fieldsToRender: FieldsToRenderShape,
    qualityKpi: QualityIndicatorsShape,
    fieldsRenderValidation: ProjectDefaults,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    onSubmitErrorCallback: PropTypes.func,
};

Quality.defaultProps = {
    onSubmit: () => {},
    onCancel: () => {},
    onSubmitErrorCallback: () => {},
};