import React from "react";
import {FieldName} from "../fieldName/fieldName";
import {HTMLTable} from "@blueprintjs/core";
import styles from "./healthIndicators.module.css";
import StatusIndicator from "../statusIndicator/statusIndicator";

export default class HealthIndicators extends React.Component {
    render() {
        return (
                <HTMLTable
                    className={styles.health_table}
                    striped={true}
                >
                    <thead>
                    <tr>
                        <th className={styles.status_col}><FieldName name={"Status"}/></th>
                        <th className={styles.prev_column}><FieldName name={"Previous"}/></th>
                        <th className={styles.cur_column}><FieldName name={"Current"}/></th>
                        <th className={styles.column_align_center}><FieldName name={"Comments"}/></th>
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
                                status={"red"}
                            />
                        </td>
                        <td className={styles.column_align_center}>
                            <StatusIndicator
                                className={styles.inline_block}
                                status={"yellow"}
                            />
                        </td>
                        <td className={styles.column_align_center}>First comment</td>
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
                            <StatusIndicator
                                className={styles.inline_block}
                            />
                        </td>
                        <td className={styles.column_align_center}>First comment</td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Scope"}/>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td className={styles.column_align_center}>First comment</td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Quality"}/>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td className={styles.column_align_center}>First comment</td>
                    </tr>
                    <tr>
                        <td>
                            <FieldName name={"Cost"}/>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td className={styles.column_align_center}>First comment</td>
                    </tr>
                    </tbody>
                </HTMLTable>
        )
    }
}