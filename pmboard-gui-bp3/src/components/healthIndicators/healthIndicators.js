import React from "react";
import {FieldName} from "../fieldName/fieldName";
import {HTMLTable, TextArea} from "@blueprintjs/core";
import styles from "./healthIndicators.module.css";
import StatusIndicator from "../statusIndicator/statusIndicator";
import PropTypes from "prop-types";
import EditSaveControls from "../editSaveContols/editSaveControls";

export default class HealthIndicators extends React.Component {
    state = {
        editStatusMode: false,
        editCommentMode: false,
    };

    onClickEditStatus = () => {
        this.setState(
            (prevState) => ({ editStatusMode: !prevState.editStatusMode })
        )
    };

    onClickEditComment = () => {
        this.setState(
            (prevState) => ({ editCommentMode: !prevState.editCommentMode })
        )
    };

    render() {
        const {isSummaryMode} = this.props;
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
                    </th>
                    <th className={styles.column_align_center}>
                        <FieldName name={"Current"}/>
                    </th>

                    {
                        !isSummaryMode &&
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
                <tr>
                    <td>
                        <FieldName name={"Overall Project Status"}/>
                    </td>
                    <td className={styles.column_align_center}>
                        <StatusIndicator
                            className={styles.inline_block}
                            status={"yellow"}
                        />
                    </td>
                    <td className={styles.column_align_center}>
                        {
                            this.state.editStatusMode
                                ? this.selectElement(1)
                                : <StatusIndicator
                                    className={styles.inline_block}
                                    status={"red"}
                                />
                        }
                    </td>
                    {
                        isSummaryMode ||
                        (
                            this.state.editCommentMode
                                ? <td>
                                    <TextArea fill={true} defaultValue={"First comment"}/>
                                  </td>
                                : <td className={styles.column_align_center}>
                                    First comment
                                  </td>
                        )
                    }
                </tr>
                <tr>
                    <td>
                        <FieldName name={"Schedule"}/>
                    </td>
                    <td className={styles.column_align_center}>
                        <StatusIndicator
                            className={styles.inline_block}
                            status={"green"}
                        />
                    </td>
                    <td className={styles.column_align_center}>
                        {
                            this.state.editStatusMode
                                ? this.selectElement(1)
                                : <StatusIndicator
                                    className={styles.inline_block}
                                />
                        }
                    </td>
                    {
                        isSummaryMode ||
                        (
                            this.state.editCommentMode
                                ? <td>
                                    <TextArea fill={true} defaultValue={"First comment"}/>
                                </td>
                                : <td className={styles.column_align_center}>
                                    First comment
                                </td>
                        )
                    }
                </tr>
                <tr>
                    <td>
                        <FieldName name={"Scope"}/>
                    </td>
                    <td className={styles.column_align_center}>
                        <StatusIndicator
                            className={styles.inline_block}
                            status={"yellow"}
                        />
                    </td>
                    <td className={styles.column_align_center}>
                        {
                            this.state.editStatusMode
                                ? this.selectElement(1)
                                : <StatusIndicator
                                    className={styles.inline_block}
                                />
                        }
                    </td>
                    {
                        isSummaryMode ||
                        (
                            this.state.editCommentMode
                                ? <td>
                                    <TextArea fill={true} defaultValue={"First comment"}/>
                                </td>
                                : <td className={styles.column_align_center}>
                                    First comment
                                </td>
                        )
                    }
                </tr>
                <tr>
                    <td>
                        <FieldName name={"Quality"}/>
                    </td>
                    <td className={styles.column_align_center}>
                        <StatusIndicator
                            className={styles.inline_block}
                            status={"yellow"}
                        />
                    </td>
                    <td className={styles.column_align_center}>
                        {
                            this.state.editStatusMode
                                ? this.selectElement(1)
                                : <StatusIndicator
                                    className={styles.inline_block}
                                />
                        }
                    </td>
                    {
                        isSummaryMode ||
                        (
                            this.state.editCommentMode
                                ? <td>
                                    <TextArea fill={true} defaultValue={"First comment"}/>
                                </td>
                                : <td className={styles.column_align_center}>
                                    First comment
                                </td>
                        )
                    }
                </tr>
                <tr>
                    <td>
                        <FieldName name={"Cost"}/>
                    </td>
                    <td className={styles.column_align_center}>
                        <StatusIndicator
                            className={styles.inline_block}
                            status={"yellow"}
                        />
                    </td>
                    <td className={styles.column_align_center}>
                        {
                            this.state.editStatusMode
                                ? this.selectElement(1)
                                : <StatusIndicator
                                    className={styles.inline_block}
                                />
                        }
                    </td>
                    {
                        isSummaryMode ||
                        (
                            this.state.editCommentMode
                                ? <td>
                                    <TextArea fill={true} defaultValue={"First comment"}/>
                                </td>
                                : <td className={styles.column_align_center}>
                                    First comment
                                </td>
                        )
                    }
                </tr>
                </tbody>
            </HTMLTable>
        )
    }

    selectElement = (val) => (
        <select defaultValue={val}>
            <option value="">&nbsp;</option>
            <option value="1">Green</option>
            <option value="2">Yellow</option>
            <option value="3">Red</option>
        </select>
    );
}

HealthIndicators.propTypes = {
    isSummaryMode: PropTypes.bool,
};