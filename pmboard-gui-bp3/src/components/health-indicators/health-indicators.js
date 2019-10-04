import React from "react";
import {FieldName} from "../field-name/field-name";
import {HTMLTable, TextArea} from "@blueprintjs/core";
import styles from "./health-indicators.module.css";
import StatusIndicator from "../status-indicator/status-indicator";
import PropTypes from "prop-types";
import EditSaveControls from "../edit-save-contols/edit-save-controls";
import {dateFormatToString} from "../../util/transformFuncs";
import {Field, Form} from "formik";

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
        const {isSummaryMode, indicators} = this.props;
        return (
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

                            {this.getImmutableIndicatorTd(indicators.statuses.prev[key], styles)}
                            {this.getIndicatorTd(indicators.statuses.current[key], "statuses.current." + key, styles)}

                            {
                                isSummaryMode ||
                                (
                                    this.getCommentTd(indicators.comments[key], styles)
                                )
                            }
                        </tr>
                    ))
                }
                </tbody>
            </HTMLTable>
        )
    }

    getCommentTd = (comment, styles) => {
        if (this.state.editCommentMode) {
            return (
                <td>
                    <TextArea fill={true} defaultValue={comment}/>
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

    getImmutableIndicatorTd = (status, styles) => (
        this.getIndicatorTd(status, styles, false)
    );

    getIndicatorTd = (status, styles, isMutable = true) => {
        if (isMutable && this.state.editStatusMode) {
            return (
                <td className={styles.column_align_center}>
                    {this.selectElement(status)}
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

    selectElement = (val) => (
      //  {/*<Field component="select" name={name} defaultValue={val}>*/}
        <select defaultValue={val}>
            <option value="">&nbsp;</option>
            <option value="1">Green</option>
            <option value="2">Yellow</option>
            <option value="3">Red</option>
        </select>
    );

    getColor = (number) => {
        switch (number) {
            case 3:
                return "green";
            case 2:
                return "yellow";
            case 1:
                return "red";
            default:
                return "blank";
        }
    };
}


HealthIndicators.propTypes = {
    indicators: PropTypes.object.isRequired,
    isSummaryMode: PropTypes.bool,
};