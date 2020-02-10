import React from "react";
import {HTMLTable} from "@blueprintjs/core";
import PropTypes from "prop-types";
import styles from "./costTable.module.css";

export default class CostTable extends React.Component {
    render() {
        const {tableName, data} = this.props;
        let {committed, realized} = data;
        if (committed == null) committed = {};
        if (realized == null) realized = {};
        return (
            <HTMLTable
                striped
                className={styles.cost_table}
            >
                <colgroup>
                    <col className={styles.effort_col}/>
                    <col className={styles.value_col}/>
                    <col/>
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
                    <td>Committed at {committed.milestone}</td>
                    <td className={styles.column_align_center}>{committed.value}</td>
                    <td>{committed.comment}</td>
                </tr>
                <tr>
                    <td>Released at {realized.milestone}</td>
                    <td className={styles.column_align_center}>{realized.value}</td>
                    <td>{realized.comment}</td>
                </tr>
                </tbody>
            </HTMLTable>
        )
    }
}

CostTable.propTypes = {
    tableName: PropTypes.string.isRequired,
    data: PropTypes.shape({
        committed: PropTypes.shape({
            state: PropTypes.number,
            milestone: PropTypes.string,
            value: PropTypes.number,
            comment: PropTypes.string
        }),
        realized: PropTypes.shape({
            state: PropTypes.number,
            milestone: PropTypes.string,
            value: PropTypes.number,
            comment: PropTypes.string
        })
    }),
};