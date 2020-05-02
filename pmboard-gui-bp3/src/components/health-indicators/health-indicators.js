import React from "react";
import FieldName from "../field-name/field-name";
import {HTMLTable, Position, Tooltip} from "@blueprintjs/core";
import styles from "./health-indicators.module.css";
import StatusIndicator from "../status-indicator/status-indicator";
import PropTypes from "prop-types";
import EditSaveControls from "../controls/edit-save-controls/edit-save-controls";
import {dateFormatToString, getIndicatorsColor} from "../../util/transform-funcs";
import {Field, Formik} from "formik";
import HelpIcon from "../help-icon/help-icon";
import {healthStatusHelp} from "../../util/global-helps";
import TooltipContent from "../tooltip-content/tooltip-content";
import {FieldsToRenderShape, HealthIndicatorsShape} from "../../util/custom-types";
import FormikInput from "../controls/util-renderers";

export default class HealthIndicators extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editStatusMode: false,
            editCommentMode: false,
        };

        this.onClickEditStatus = this.onClickEditStatus.bind(this);
        this.onClickEditComment = this.onClickEditComment.bind(this);
    }

    submitForm = null;

    bindFormSubmission = (formikSubmitForm) => {
        this.submitForm = formikSubmitForm;
    };

    onClickEditStatus = () => {
        this.setState(
            (prevState) => ({editStatusMode: !prevState.editStatusMode})
        )
    };

    onClickEditComment = () => {
        this.setState(
            (prevState) => ({editCommentMode: !prevState.editCommentMode})
        )
    };

    render() {
        const {isSummaryMode, indicators, onIndicatorsSubmit, onCommentsSubmit} = this.props;
        return (
            <Formik
                onSubmit={(values, formikActions) => {
                    formikActions.setSubmitting(false);
                    if (this.state.editStatusMode) {
                        onIndicatorsSubmit(values);
                    } else if (this.state.editCommentMode) {
                        onCommentsSubmit(values);
                    }
                }}
                initialValues={{
                    ...indicators
                }}
                render={
                    (formikProps) => {
                        this.bindFormSubmission(formikProps.submitForm);
                        return (this.getHealthIndicatorsTable(formikProps.values, isSummaryMode))
                    }
                }
            />
        )
    }

    getHealthIndicatorsTable = (values, isSummaryMode) => {
        const {prevStatusSet, currentStatusSet} = values;
        const {onCancel, fieldsToRender} = this.props;
        return (
            <HTMLTable
                striped
                className={styles.health_table}
            >
                <colgroup>
                    <col className={styles.status_col}/>
                    <col className={styles.prev_column}/>
                    <col className={styles.cur_column}/>
                    {isSummaryMode || <col/>}
                </colgroup>
                <thead>
                <tr>
                    <th>
                        <FieldName name={"Status"}/>
                        <Tooltip
                            content={<TooltipContent
                                        title={healthStatusHelp.title}
                                        content={healthStatusHelp.content}
                                    />}
                            position={Position.TOP}
                        >
                            <HelpIcon className={styles.help_icon}/>
                        </Tooltip>
                        {
                            !isSummaryMode && !this.state.editCommentMode &&
                            <EditSaveControls
                                smallSize
                                className={styles.inline_block}
                                editMode={this.state.editStatusMode}
                                onClick={this.onClickEditStatus}
                                onSubmit={this.submitForm}
                                onCancel={onCancel}
                            />
                        }
                    </th>
                    <th className={styles.column_align_center}>
                        <FieldName name={"Previous"}/><br/>
                        <FieldName name={dateFormatToString(new Date(prevStatusSet))}/>
                    </th>
                    <th className={styles.column_align_center}>
                        <FieldName name={"Current "}/><br/>
                        <FieldName name={dateFormatToString(new Date(currentStatusSet))}/>
                    </th>

                    {
                        isSummaryMode ||
                        <th className={styles.column_align_center}>
                            <FieldName name={"Comments"}/>
                            {
                                !this.state.editStatusMode &&
                                <EditSaveControls
                                    smallSize
                                    className={styles.inline_block}
                                    editMode={this.state.editCommentMode}
                                    onClick={this.onClickEditComment}
                                    onCancel={onCancel}
                                    onSubmit={this.submitForm}
                                />
                            }
                        </th>
                    }
                </tr>
                </thead>
                <tbody>
                {
                    Object.keys(fieldsToRender).map((field) => {
                        const label = fieldsToRender[field].label;
                        let prevValue = "", currentValue = "";
                        if (values.statuses.prev) {
                            prevValue = values.statuses.prev[field];
                        }

                        if (values.statuses.current) {
                            currentValue = values.statuses.current[field];
                        }

                        const comment = values.comments[field];
                        return (
                            <tr key={field}>
                                <td>
                                    <FieldName name={label}/>
                                </td>

                                {this.getImmutableIndicatorTd(prevValue, "statuses.current." + field, styles)}
                                {this.getIndicatorTd(currentValue, "statuses.current." + field, styles)}

                                {
                                    isSummaryMode ||
                                    (
                                        this.getCommentTd(comment, "comments." + field, styles)
                                    )
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </HTMLTable>
        )
    };

    getCommentTd = (comment, name, styles) => {
        if (this.state.editCommentMode) {
            return (
                <td>
                    <FormikInput type="textarea" name={name}/>
                </td>
            )
        } else {
            return (
                <td className={styles.column_align_center}>
                    {comment}
                </td>
            )
        }
    };

    getImmutableIndicatorTd = (status, name, styles) => (
        this.getIndicatorTd(status, name, styles, false)
    );

    getIndicatorTd = (status, name, styles, isMutable = true) => {
        if (isMutable && this.state.editStatusMode) {
            return (
                <td className={styles.column_align_center}>
                    {this.selectElement(name)}
                </td>
            )
        } else {
            return (
                <td className={styles.column_align_center}>
                    <StatusIndicator
                        className={styles.inline_block}
                        status={getIndicatorsColor(status)}
                    />
                </td>
            )
        }
    };

    selectElement = (name) => {
        return (
            <Field component="select" name={name}>
                <option value="">&nbsp;</option>
                <option value="1">Green</option>
                <option value="2">Yellow</option>
                <option value="3">Red</option>
            </Field>
        )
    };
}


HealthIndicators.propTypes = {
    indicators: HealthIndicatorsShape.isRequired,
    fieldsToRender: FieldsToRenderShape.isRequired,
    isSummaryMode: PropTypes.bool,
    onIndicatorsSubmit: PropTypes.func,
    onCommentsSubmit: PropTypes.func,
    onCancel: PropTypes.func,
};