import React from "react";
import {FieldName} from "../field-name/field-name";
import {HTMLTable, TextArea} from "@blueprintjs/core";
import styles from "./health-indicators.module.css";
import StatusIndicator from "../status-indicator/status-indicator";
import PropTypes from "prop-types";
import EditSaveControls from "../edit-save-contols/edit-save-controls";
import {dateFormatToString} from "../../util/transformFuncs";
import {Field, Formik} from "formik";
import FormikCustomField from "../formik-custom-field/formik-custom-field";

//TODO sync data edit with display form
export default class HealthIndicators extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editStatusMode: false,
            editCommentMode: false,
        };

        this.labels = {
            overall: 'Overall Project Status',
            schedule: 'Schedule',
            scope: 'Scope',
            quality: 'Quality',
            cost: 'Cost'
        };
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
        const {isSummaryMode, indicators, onSubmit} = this.props;
        return (
            <Formik
                onSubmit={(values, formikActions) => {
                    formikActions.setSubmitting(false);
                    console.log(values);
                    onSubmit(values);
                }}
                initialValues={{
                    statuses: {
                        current: {
                            overall: 1,
                            schedule: 2,
                            scope: 3,
                            quality: 3,
                            cost: 2,
                        }
                    },
                    comments: {
                        overall: "Overall Comment",
                        schedule: "Schedule Comment",
                        scope: "Scope Comment",
                        quality: "Quality Comment",
                        cost: "Cost Comment!",
                    }
                }}
                render={
                    (formikProps) => {
                        this.bindFormSubmission(formikProps.submitForm);
                        return (this.getHealthIndicatorsTable(indicators, isSummaryMode))
                    }
                }
            />
        )
    }

    getHealthIndicatorsTable = (indicators, isSummaryMode) => (
        <HTMLTable
            className={styles.health_table}
            striped={true}
        >
            <colgroup>
                <col className={styles.status_col}/>
                <col className={styles.prev_column}/>
                <col className={styles.cur_column}/>
                <col/>
            </colgroup>
            <thead>
            <tr>
                <th>
                    <FieldName name={"Status"}/>
                    {
                        !isSummaryMode && !this.state.editCommentMode &&
                        <EditSaveControls
                            className={styles.inline_block}
                            editMode={this.state.editStatusMode}
                            onClick={() => this.onClickEditStatus()}
                            onSubmit={() => this.submitForm()}
                            onCancel={() => this.onClickEditStatus()}
                            smallSize={true}
                        />
                    }
                </th>
                <th className={styles.column_align_center}>
                    <FieldName name={"Previous"}/>
                    <FieldName name={dateFormatToString(new Date(indicators.prevStatusSet))}/>
                </th>
                <th className={styles.column_align_center}>
                    <FieldName name={"Current"}/>
                    <FieldName name={dateFormatToString(new Date(indicators.currentStatusSet))}/>
                </th>

                {
                    isSummaryMode ||
                    <th className={styles.column_align_center}>
                        <FieldName name={"Comments"}/>
                        {
                            !this.state.editStatusMode &&
                            <EditSaveControls
                                className={styles.inline_block}
                                editMode={this.state.editCommentMode}
                                onClick={() => this.onClickEditComment()}
                                onCancel={() => this.onClickEditComment()}
                                onSubmit={() => this.submitForm()}
                                smallSize={true}
                            />
                        }
                    </th>
                }
            </tr>
            </thead>
            <tbody>
            {
                Object.keys(this.labels).map((key) => (
                    <tr key={key}>
                        <td>
                            <FieldName name={this.labels[key]}/>
                        </td>

                        {this.getImmutableIndicatorTd(indicators.statuses.prev[key], "statuses.current." + key, styles)}
                        {this.getIndicatorTd(indicators.statuses.current[key], "statuses.current." + key, styles)}

                        {
                            isSummaryMode ||
                            (
                                this.getCommentTd(indicators.comments[key], "comments." + key, styles)
                            )
                        }
                    </tr>
                ))
            }
            </tbody>
        </HTMLTable>
    );

    getCommentTd = (comment, name, styles) => {
        if (this.state.editCommentMode) {
            return (
                <td>
                    <Field type="area" name={name} component={FormikCustomField}/>
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
                        status={this.getColor(status)}
                    />
                </td>
            )
        }
    };

    selectElement = (name) => {
        console.log(name);
        return (
            <Field component="select" name={name}>
                <option value="">&nbsp;</option>
                <option value="1">Green</option>
                <option value="2">Yellow</option>
                <option value="3">Red</option>
            </Field>
        )
    };

    getColor = (number) => {
        switch (number) {
            case 1:
                return "green";
            case 2:
                return "yellow";
            case 3:
                return "red";
            default:
                return "blank";
        }
    };
}


HealthIndicators.propTypes = {
    indicators: PropTypes.object.isRequired,
    isSummaryMode: PropTypes.bool,
    onSubmit: PropTypes.func,
};