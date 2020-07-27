import React, {useState} from "react";
import FieldName from "../field-name/field-name";
import {HTMLTable, Position, Tooltip} from "@blueprintjs/core";
import styles from "./health-indicators.module.scss";
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
import Comment from "../comment/comment";
import {Messages} from "../../util/constants";
import validationSchema from "./validation-schema";
import OnSubmitValidationError from "../formik-onsubmit-validator";

export default function HealthIndicators(props) {
    const [editStatusMode, setEditStatusMode] = useState(false);
    const [editCommentMode, setEditCommentMode] = useState(false);

    const onClickEditStatus = () => {
        setEditStatusMode(status => !status)
    };

    const onClickEditComment = () => {
        setEditCommentMode(status => !status)
    };

    const {isSummaryMode, indicators, onIndicatorsSubmit, onCommentsSubmit} = props;
    return (
        <Formik
            isInitialValid
            onSubmit={(values, formikActions) => {
                formikActions.setSubmitting(false);
                if (editStatusMode) {
                    onIndicatorsSubmit(values);
                } else if (editCommentMode) {
                    onCommentsSubmit(values);
                }
            }}
            initialValues={{
                ...indicators
            }}
            validationSchema={
                validationSchema
            }
            render={
                (formikProps) =>
                    (getHealthIndicatorsTable(formikProps.values, isSummaryMode, formikProps.submitForm))
            }
        />
    )

    function getHealthIndicatorsTable(values, isSummaryMode, submitForm) {
        const {prevStatusSet, currentStatusSet} = values;
        const {onCancel, fieldsToRender, blocked} = props;
        const isStatusControlsShown = !isSummaryMode && !blocked && !editCommentMode;
        const isCommentsControlsShown = !editStatusMode && !blocked;
        const prevDate = dateFormatToString(new Date(prevStatusSet));
        const currentDate = dateFormatToString(new Date(currentStatusSet));
        return (
            <>
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
                                content={
                                    (<TooltipContent
                                        title={healthStatusHelp.title}
                                        content={healthStatusHelp.content}
                                    />)
                                }
                                position={Position.RIGHT}
                            >
                                <HelpIcon className={styles.help_icon}/>
                            </Tooltip>
                            {
                                isStatusControlsShown &&
                                <EditSaveControls
                                    smallSize
                                    className={styles.inline_block}
                                    editMode={editStatusMode}
                                    onClick={onClickEditStatus}
                                    onSubmit={submitForm}
                                    onCancel={onCancel}
                                />
                            }
                        </th>
                        <th className={styles.column_align_center}>
                            <FieldName name={"Previous"}/><br/>
                            <FieldName name={prevDate}/>
                        </th>
                        <th className={styles.column_align_center}>
                            <FieldName name={"Current "}/><br/>
                            <FieldName name={currentDate}/>
                        </th>

                        {
                            isSummaryMode ||
                            <th className={styles.column_align_center}>
                                <FieldName name={"Comments"}/>
                                {
                                    isCommentsControlsShown &&
                                    <EditSaveControls
                                        smallSize
                                        className={styles.inline_block}
                                        editMode={editCommentMode}
                                        onClick={onClickEditComment}
                                        onCancel={onCancel}
                                        onSubmit={submitForm}
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
                            const prevValue = values.statuses.prev ? values.statuses.prev[field] : "";
                            const currentValue = values.statuses.current ? values.statuses.current[field] : "";
                            const comment = values.comments[field];
                            const immutableIndicatorName = "statuses.prev." + field;
                            const indicatorName = "statuses.current." + field;
                            const commentName = "comments." + field;
                            return (
                                <tr key={field}>
                                    <td>
                                        <FieldName name={label}/>
                                    </td>

                                    {getImmutableIndicatorTd(prevValue, immutableIndicatorName, styles)}
                                    {getIndicatorTd(currentValue, indicatorName, styles)}
                                    {isSummaryMode || getCommentTd(comment, commentName, styles)}
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </HTMLTable>
                <OnSubmitValidationError callback={handleSubmitWithErrors}/>
            </>
        )
    }

    function getCommentTd(comment, name, styles) {
        if (editCommentMode) {
            return (
                <td>
                    <FormikInput type="textarea" name={name}/>
                </td>
            )
        } else {
            return (
                <td className={styles.column_align_center}>
                    <Comment value={comment}/>
                </td>
            )
        }
    }

    function getImmutableIndicatorTd(status, name, styles) {
        return getIndicatorTd(status, name, styles, false)
    }

    function getIndicatorTd(status, name, styles, isMutable = true) {
        if (isMutable && editStatusMode) {
            const selectComponent = selectElement(name);
            return (
                <td className={styles.column_align_center}>
                    {selectComponent}
                </td>
            )
        } else {
            const statusIndicator = getIndicatorsColor(status);
            return (
                <td className={styles.column_align_center}>
                    <StatusIndicator
                        className={styles.inline_block}
                        status={statusIndicator}
                    />
                </td>
            )
        }
    }

    function selectElement(name) {
        return (
            <Field component="select" name={name}>
                <option value="">&nbsp;</option>
                <option value="1">Green</option>
                <option value="2">Yellow</option>
                <option value="3">Red</option>
            </Field>
        )
    }

    function handleSubmitWithErrors(formikProps) {
        if (!formikProps.isValid) {
            props.onSubmitErrorCallback(Messages.FORM_SUBMIT_ERROR)
        }
    }
}


HealthIndicators.propTypes = {
    indicators: HealthIndicatorsShape.isRequired,
    fieldsToRender: FieldsToRenderShape.isRequired,
    isSummaryMode: PropTypes.bool,
    onIndicatorsSubmit: PropTypes.func,
    onCommentsSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    blocked: PropTypes.bool,
    onSubmitErrorCallback: PropTypes.func
};

HealthIndicators.defaultProps = {
    isSummaryMode: false,
    onIndicatorsSubmit: () => {
    },
    onCommentsSubmit: () => {
    },
    onCancel: () => {
    },
    blocked: false,
    onSubmitErrorCallback: () => {
    }
}