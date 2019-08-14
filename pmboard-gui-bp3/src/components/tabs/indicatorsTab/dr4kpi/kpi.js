import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import styles from "./kpi.module.css";
import classNames from "classnames";
import {FieldName} from "../../../field-name/field-name";

export default class Kpi extends React.Component {
    render() {
        let headerClasses = classNames(styles.column_align_center, styles.border_top);
        return (
            <HTMLTable
                className={styles.kpi_table}
                striped={true}
            >
                <colgroup>
                    <col className={styles.name_col}/>
                    <col className={styles.value_col}/>
                </colgroup>
                <thead>
                <tr>
                    <td>
                        <FieldName name={"Year (based on DR1 date)"}/>
                    </td>
                    <td>2019</td>
                </tr>
                <tr>
                    <td colSpan={2} className={headerClasses}>COMMITTED vs ACTUAL</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <FieldName name={"Schedule Adherence"}/>
                    </td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td>
                        <FieldName name={"Content Adherence"}/>
                    </td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>
                        <FieldName name={"Requirements Change"}/>
                    </td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>
                        <FieldName name={"Cost Adherence"}/>
                    </td>
                    <td>N/A</td>
                </tr>
                </tbody>
            </HTMLTable>
        )
    }
}