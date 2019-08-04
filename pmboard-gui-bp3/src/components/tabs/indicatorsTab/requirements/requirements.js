import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import EditSaveControls from "../../../editSaveContols/editSaveControls";
import styles from "./requirements.module.css";
import classNames from "classnames";
import {FieldName} from "../../../fieldName/fieldName";

export default class Requirements extends React.Component {
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
                            <th className={styles.table_header} colSpan={2}><EditSaveControls /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><FieldName name={"DR1 date (actual)"}/></td>
                            <td>05-Mar-19</td>
                        </tr>
                        <tr>
                            <td><FieldName name={"# Requirements committed (baseline) at DR1"}/></td>
                            <td>06-Mar-19</td>
                        </tr>
                        <tr>
                            <td><FieldName name={"Current # of requirements added after DR1"}/></td>
                            <td>07-Mar-19</td>
                        </tr>
                        <tr>
                            <td><FieldName name={"Current # of baselined requirements removed after DR1"}/></td>
                            <td>08-Mar-19</td>
                        </tr>
                        <tr>
                            <td><FieldName name={"Current # of baselined requirements modified after DR1"}/></td>
                            <td>09-Mar-19</td>
                        </tr>
                        <tr>
                            <td><FieldName name={"Current # of scoped requirements"}/></td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </HTMLTable>
            </>
        )
    }
}