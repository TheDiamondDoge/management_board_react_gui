import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import EditSaveControls from "../../../../../editSaveContols/editSaveControls";
import styles from "./quality.module.css";

export default class Quality extends React.Component {
    render() {
        return (
            <>
                <div>
                    <div style={{float: "left"}}>Last synchro: 2019-07-29 14:43:54</div>
                    <EditSaveControls className={styles.float_right} />
                </div>
                <HTMLTable className={styles.quality_table}>
                    <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th className={styles.column_align_center}>Objective</th>
                        <th className={styles.column_align_center}>Actual value</th>
                        <th>Comment</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Quality KPI</td>
                        <td className={styles.column_align_center}>100</td>
                        <td className={styles.column_align_center}>0</td>
                        <td>Comment</td>
                    </tr>
                    <tr>
                        <td>New Open Defects</td>
                        <td className={styles.column_align_center}>200</td>
                        <td className={styles.column_align_center}>0</td>
                        <td>Comment</td>
                    </tr>
                    <tr>
                        <td>Backlog Reduction</td>
                        <td className={styles.column_align_center}>300</td>
                        <td className={styles.column_align_center}>0</td>
                        <td>Comment</td>
                    </tr>
                    <tr>
                        <td>Test execution (rate or number)</td>
                        <td className={styles.column_align_center}>40</td>
                        <td className={styles.column_align_center}>40</td>
                        <td>Comment</td>
                    </tr>
                    <tr>
                        <td>Test pass (rate or number)</td>
                        <td className={styles.column_align_center}>50</td>
                        <td className={styles.column_align_center}>50</td>
                        <td>Comment</td>
                    </tr>
                    </tbody>
                </HTMLTable>
            </>
        );
    }
}