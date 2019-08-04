import React from "react";
import {HTMLTable} from "@blueprintjs/core";
import PropTypes from "prop-types";
import styles from "./costTable.module.css";

export default class CostTable extends React.Component{
    render() {
        const {tableName} = this.props;
        return (
            <HTMLTable
                className={styles.cost_table}
                striped={true}
            >
                <colgroup>
                    <col className={styles.effort_col}/>
                    <col className={styles.value_col} />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th>{tableName}</th>
                        <th className={styles.column_align_center}>Value ($)</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Committed at DR1</td>
                        <td className={styles.column_align_center}>0</td>
                        <td>Comment here!</td>
                    </tr>
                    <tr>
                        <td>Released at DR4</td>
                        <td className={styles.column_align_center}>0</td>
                        <td>Comment here too!</td>
                    </tr>
                </tbody>
            </HTMLTable>
        )
    }
}

CostTable.propTypes = {
    tableName: PropTypes.string.isRequired,
};