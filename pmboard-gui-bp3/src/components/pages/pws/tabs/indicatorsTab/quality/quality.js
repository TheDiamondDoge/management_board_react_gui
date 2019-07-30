import React from 'react';
import {HTMLTable, Icon, Button} from "@blueprintjs/core";
import EditSaveControls from "../../../../../editSaveContols/editSaveControls";
import styles from "./quality.module.css";
import {FieldName} from "../../../../../fieldName/fieldName";

export default class Quality extends React.Component {
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
                    <EditSaveControls className={styles.float_right}/>
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
                        <td className={styles.column_align_center}>100</td>
                        <td className={styles.column_align_center}>0</td>
                        <td className={styles.column_align_center}>Comment</td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"New Open Defects"}/>
                        </td>
                        <td className={styles.column_align_center}>200</td>
                        <td className={styles.column_align_center}>0</td>
                        <td className={styles.column_align_center}>Comment</td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Backlog Reduction"}/>
                        </td>
                        <td className={styles.column_align_center}>300</td>
                        <td className={styles.column_align_center}>0</td>
                        <td className={styles.column_align_center}>Comment</td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Test execution (rate or number)"}/>
                        </td>
                        <td className={styles.column_align_center}>40</td>
                        <td className={styles.column_align_center}>40</td>
                        <td className={styles.column_align_center}>Comment</td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Test pass (rate or number)"}/>
                        </td>
                        <td className={styles.column_align_center}>50</td>
                        <td className={styles.column_align_center}>50</td>
                        <td className={styles.column_align_center}>Comment</td>
                    </tr>
                    </tbody>
                </HTMLTable>
            </>
        );
    }
}