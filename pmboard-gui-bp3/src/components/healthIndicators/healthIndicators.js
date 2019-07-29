import React from "react";
import {FieldName} from "../fieldName/fieldName";
import {HTMLTable} from "@blueprintjs/core";
import styles from "./healthIndicators.module.css";

export default class HealthIndicators extends React.Component {
    render() {
        return (
                <HTMLTable className={styles.health_table}>
                    <thead>
                    <tr>
                        <td className={styles.status_col}>Status</td>
                        <td className={styles.prev_column}>Previous</td>
                        <td className={styles.cur_column}>Current</td>
                        <td className={styles.column_align_center}>Comments</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <FieldName name={"Overall Project Status"}/>
                        </td>
                        <td></td>
                        <td></td>
                        <td className={styles.column_align_center}>First comment</td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Schedule"}/>
                        </td>
                        <td></td>
                        <td></td>
                        <td className={styles.column_align_center}>First comment</td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Scope"}/>
                        </td>
                        <td></td>
                        <td></td>
                        <td className={styles.column_align_center}>First comment</td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Quality"}/>
                        </td>
                        <td></td>
                        <td></td>
                        <td className={styles.column_align_center}>First comment</td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Cost"}/>
                        </td>
                        <td></td>
                        <td></td>
                        <td className={styles.column_align_center}>First comment</td>
                    </tr>
                    </tbody>
                </HTMLTable>
        )
    }
}