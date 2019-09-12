import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import EditSaveControls from "../../../edit-save-contols/edit-save-controls";
import styles from "./requirements.module.css";
import classNames from "classnames";
import {FieldName} from "../../../field-name/field-name";
import FieldValue from "../../../field-value/field-value";

export default class Requirements extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editMode: false,
        };
    }

    onClickEdit = () => {
        this.setState(
            (prevState) => ({ editMode: !prevState.editMode })
        )
    };

    render() {
        let valueColumnClasses = classNames(styles.value_col, styles.column_align_center);
        return (
            <>
                <HTMLTable
                    className={styles.req_table}
                    striped={true}
                >
                    <colgroup>
                        <col className={styles.title_col} />
                        <col className={valueColumnClasses} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th className={styles.table_header} colSpan={2}>
                                <EditSaveControls onClick={this.onClickEdit} editMode={this.state.editMode} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><FieldName name={"DR1 date (actual)"}/></td>
                            <td><FieldValue value={ "05-Mar-19" } editMode={this.state.editMode}/></td>
                        </tr>
                        <tr>
                            <td><FieldName name={"# Requirements committed (baseline) at DR1"}/></td>
                            <td><FieldValue value={ "06-Mar-19" } editMode={this.state.editMode}/></td>
                        </tr>
                        <tr>
                            <td><FieldName name={"Current # of requirements added after DR1"}/></td>
                            <td><FieldValue value={ "07-Mar-19" } editMode={this.state.editMode}/></td>
                        </tr>
                        <tr>
                            <td><FieldName name={"Current # of baselined requirements removed after DR1"}/></td>
                            <td><FieldValue value={ "08-Mar-19" } editMode={this.state.editMode}/></td>
                        </tr>
                        <tr>
                            <td><FieldName name={"Current # of baselined requirements modified after DR1"}/></td>
                            <td><FieldValue value={ "09-Mar-19" } editMode={this.state.editMode}/></td>
                        </tr>
                        <tr>
                            <td><FieldName name={"Current # of scoped requirements"}/></td>
                            <td><FieldValue value={ "0" } editMode={this.state.editMode}/></td>
                        </tr>
                    </tbody>
                </HTMLTable>
            </>
        )
    }
}