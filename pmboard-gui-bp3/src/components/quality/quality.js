import React from 'react';
import {HTMLTable, Icon, Button, TextArea} from "@blueprintjs/core";
import EditSaveControls from "../edit-save-contols/edit-save-controls";
import styles from "./quality.module.css";
import {FieldName} from "../field-name/field-name";
import FieldValue from "../field-value/field-value";
import PropTypes from "prop-types";

export default class Quality extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        };
    }

    onClickEdit = () => {
        this.setState(
            (prevState) => ({editMode: !prevState.editMode})
        )
    };

    render() {
        const {qualityKpi, fields} = this.props;
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
                        Last synchro: {qualityKpi.syncDate}
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
                    {
                        Object.keys(fields).map(field => {
                                if (field === "testExecution" || field === "testRate") {
                                    return this.renderComplexRows(field);
                                } else {
                                    return this.renderSingleRow(field);
                                }
                            }
                        )
                    }
                    </tbody>
                </HTMLTable>
            </>
        );
    }

    renderSingleRow = (field) => (
        <tr key={field}>
            <td>
                <FieldName name={this.props.fields[field].label}/>
            </td>
            <td className={styles.column_align_center}>
                <FieldValue value={this.props.qualityKpi[field].objective} editMode={this.state.editMode}/>
            </td>
            <td className={styles.column_align_center}>
                <FieldValue value={this.props.qualityKpi[field].actual}/>
            </td>
            <td className={styles.column_align_center}>
                {
                    this.state.editMode
                        ? <TextArea fill={true} defaultValue={this.props.qualityKpi[field].comment}/>
                        : this.props.qualityKpi[field].comment
                }
            </td>
        </tr>
    );

    renderComplexRows = (field) => {
        const rowsNum = this.props.qualityKpi[field].length;
        const rowSpan = rowsNum < 2 ? 1 : rowsNum;
        return (
            this.props.qualityKpi[field].map((row, i) => (
                <tr key={`${field}_${i}`}>
                    {
                        i === 0
                            ? <td rowSpan={rowSpan}>
                                <FieldName name={this.props.fields[field].label}/>
                              </td>
                            : ""
                    }
                    <td className={styles.column_align_center}>
                        <FieldValue value={row.objective} editMode={this.state.editMode}/>
                    </td>
                    <td className={styles.column_align_center}>
                        <FieldValue value={row.actual} editMode={this.state.editMode}/>
                    </td>
                    {
                        i === 0
                            ? <td rowSpan={rowSpan} className={styles.column_align_center}>
                                {
                                    this.state.editMode
                                        ? <TextArea fill={true} defaultValue={row.comment}/>
                                        : row.comment
                                }
                            </td>
                            : ""
                    }
                </tr>
            ))
        )
    }
}

Quality.propTypes = {
    fields: PropTypes.object,
    qualityKpi: PropTypes.object,
};