import React from "react";
import {HTMLTable} from "@blueprintjs/core";
import PropTypes from "prop-types";
import styles from "./cost-table.module.scss";
import {nanToEmptyString, toTwoTrailingDigits} from "../../util/transform-funcs";
import Comment from "../comment/comment";

export default function CostTable({tableName, data}) {
    let {committed, realized} = data;
    if (committed == null) committed = {};
    if (realized == null) realized = {};

    const committedValue = toTwoTrailingDigits(nanToEmptyString(committed.value));
    const realizedValue = toTwoTrailingDigits(nanToEmptyString(realized.value));
    const committedMilestone = committed.milestone;
    const committedMilestoneComment = committed.comment;
    const realizedMilestone = realized.milestone;
    const realizedMilestoneComment = realized.comment;
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
                <th className={styles.data_column}>
                    Value (k&euro;)
                </th>
                <th>Comment</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Committed at {committedMilestone}</td>
                <td className={styles.data_column}>
                    {committedValue}
                </td>
                <td>
                    <Comment value={committedMilestoneComment}/>
                </td>
            </tr>
            <tr>
                <td>Released at {realizedMilestone}</td>
                <td className={styles.data_column}>
                    {realizedValue}
                </td>
                <td>
                    <Comment value={realizedMilestoneComment}/>
                </td>
            </tr>
            </tbody>
        </HTMLTable>
    )
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

CostTable.defaultProps = {
    data: {
        committed: {},
        realized: {}
    }
};