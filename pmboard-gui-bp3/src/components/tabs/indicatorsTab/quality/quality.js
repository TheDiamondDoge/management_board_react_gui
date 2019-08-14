import React from 'react';
import {HTMLTable, Icon, Button, TextArea} from "@blueprintjs/core";
import EditSaveControls from "../../../edit-save-contols/edit-save-controls";
import styles from "./quality.module.css";
import {FieldName} from "../../../field-name/field-name";
import FieldValue from "../../../field-value/field-value";

export default class Quality extends React.Component {
    state = {
        editMode: false,
    };

    onClickEdit = () => {
        this.setState(
            (prevState) => ({editMode: !prevState.editMode})
        )
    };

    render() {
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
                        Last synchro: 2019-07-29 14:43:54
                    </div>
                    <EditSaveControls
                        className={styles.float_right}
                        onClick={this.onClickEdit}
                        editMode={this.state.editMode}
                    />
                </div>
                <HTMLTable
                    className={styles.quality_table}
                    striped={true}
                >
                    <colgroup>
                        <col className={styles.descr_col}/>
                        <col className={styles.obj_col}/>
                        <col className={styles.actual_col}/>
                        <col/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th className={styles.column_align_center}>Objective</th>
                        <th className={styles.column_align_center}>Actual value</th>
                        <th className={styles.column_align_center}>Comment</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <FieldName name={"Quality KPI"}/>
                        </td>
                        <td className={styles.column_align_center}>
                            <FieldValue value={"100"} editMode={this.state.editMode}/>
                        </td>
                        <td className={styles.column_align_center}>0</td>
                        <td className={styles.column_align_center}>
                            {
                                this.state.editMode
                                    ? <TextArea fill={true} defaultValue={"Comment"}/>
                                    : "Comment"

                            }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"New Open Defects"}/>
                        </td>
                        <td className={styles.column_align_center}>
                            <FieldValue value={"200"} editMode={this.state.editMode}/>
                        </td>
                        <td className={styles.column_align_center}>0</td>
                        <td className={styles.column_align_center}>
                            {
                                this.state.editMode
                                    ? <TextArea fill={true} defaultValue={"Comment"}/>
                                    : "Comment"

                            }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Backlog Reduction"}/>
                        </td>
                        <td className={styles.column_align_center}>
                            <FieldValue value={"300"} editMode={this.state.editMode}/>
                        </td>
                        <td className={styles.column_align_center}>0</td>
                        <td className={styles.column_align_center}>
                            {
                                this.state.editMode
                                    ? <TextArea fill={true} defaultValue={"Comment"}/>
                                    : "Comment"

                            }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Test execution (rate or number)"}/>
                        </td>
                        <td className={styles.column_align_center}>
                            <FieldValue value={"40"} editMode={this.state.editMode}/>
                        </td>
                        <td className={styles.column_align_center}>40</td>
                        <td className={styles.column_align_center}>
                            {
                                this.state.editMode
                                    ? <TextArea fill={true} defaultValue={"Comment"}/>
                                    : "Comment"

                            }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Test pass (rate or number)"}/>
                        </td>
                        <td className={styles.column_align_center}>
                            <FieldValue value={"50"} editMode={this.state.editMode}/>
                        </td>
                        <td className={styles.column_align_center}>50</td>
                        <td className={styles.column_align_center}>
                            {
                                this.state.editMode
                                    ? <TextArea fill={true} defaultValue={"Comment"}/>
                                    : "Comment"

                            }
                        </td>
                    </tr>
                    </tbody>
                </HTMLTable>
            </>
        );
    }
}