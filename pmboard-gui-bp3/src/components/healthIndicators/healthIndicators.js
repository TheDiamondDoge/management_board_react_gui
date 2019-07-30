import React from "react";
import {FieldName} from "../fieldName/fieldName";
import {HTMLTable} from "@blueprintjs/core";
import styles from "./healthIndicators.module.css";
import StatusIndicator from "../statusIndicator/statusIndicator";
import PropTypes from "prop-types";

export default class HealthIndicators extends React.Component {
    render() {
        const {isSummaryMode} = this.props;
        return (
            <HTMLTable
                className={styles.health_table}
                striped={true}
            >
                <colgroup>
                    <col className={styles.status_col}/>
                    <col className={styles.prev_column}/>
                    <col className={styles.cur_column}/>
                    <col/>
                </colgroup>
                <thead>
                <tr>
                    <th>
                        <FieldName name={"Status"}/>
                    </th>
                    <th className={styles.column_align_center}>
                        <FieldName name={"Previous"}/>
                    </th>
                    <th className={styles.column_align_center}>
                        <FieldName name={"Current"}/>
                    </th>

                    {isSummaryMode || <th className={styles.column_align_center}><FieldName name={"Comments"}/></th>}
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
                    {isSummaryMode || <td className={styles.column_align_center}>First comment</td>}
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
                    {isSummaryMode || <td className={styles.column_align_center}>First comment</td>}
                </tr>
                <tr>
                    <td>
                        <FieldName name={"Scope"}/>
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    {isSummaryMode || <td className={styles.column_align_center}>First comment</td>}
                </tr>
                <tr>
                    <td>
                        <FieldName name={"Quality"}/>
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    {isSummaryMode || <td className={styles.column_align_center}>First comment</td>}
                </tr>
                <tr>
                    <td>
                        <FieldName name={"Cost"}/>
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    {isSummaryMode || <td className={styles.column_align_center}>First comment</td>}
                </tr>
                </tbody>
            </HTMLTable>
        )
    }
}

HealthIndicators.propTypes = {
    isSummaryMode: PropTypes.bool,
};