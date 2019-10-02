import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import {FieldName} from "../field-name/field-name";
import styles from "./milestones.module.css";
import {MILESTONES_DATA} from "./milestonesObject";
import classNames from 'classnames';

export default class Milestones extends React.Component {
    render() {
        let headerClasses = classNames(styles.column_align_center, styles.borderBottom);
        return (
            <HTMLTable
                className={styles.mil_table}
                striped={true}
            >
                <colgroup>
                    <col className={styles.mil_col}/>
                    <col className={styles.adh_col}/>
                    <col className={styles.delay_col}/>
                    <col className={styles.duration_col}/>
                </colgroup>
                <thead>
                    <tr>
                        <th className={headerClasses} colSpan={4}>COMMITTED versus ACTUAL</th>
                    </tr>
                    <tr>
                        <th>
                            Milestone
                        </th>
                        <th className={styles.column_align_center}>
                            Schedule Adherence
                        </th>
                        <th className={styles.column_align_center}>
                            Delay (days)
                        </th>
                        <th className={styles.column_align_center}>
                            Project Duration from DR1
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    MILESTONES_DATA.map((obj, i) => (
                        <tr key={i}>
                            <td><FieldName name={obj.label}/></td>
                            <td className={styles.column_align_center}>{obj.adherence}%</td>
                            <td className={styles.column_align_center}>{obj.delay}</td>
                            <td className={styles.column_align_center}>{obj.duration} days</td>
                        </tr>
                    ))
                }
                </tbody>
            </HTMLTable>
        );
    }
}