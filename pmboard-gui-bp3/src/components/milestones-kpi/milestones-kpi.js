import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import {FieldName} from "../field-name/field-name";
import styles from "./milestones.module.css";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {MilestoneKpiShape} from "../../util/custom-types";

export default class MilestonesKpi extends React.Component {
    render() {
        let headerClasses = classNames(styles.column_align_center, styles.borderBottom);
        const {milestonesKpi} = this.props;
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
                    //TODO: Round at backend
                    milestonesKpi
                        .filter((obj) => !(obj.adherence === 0 && obj.delay === 0 && obj.duration === 0))
                        .map((obj, i) => (
                        <tr key={i}>
                            <td><FieldName name={obj.label}/></td>
                            <td className={styles.column_align_center}>{obj.adherence * 100}%</td>
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

MilestonesKpi.propTypes = {
    milestonesKpi: PropTypes.arrayOf(MilestoneKpiShape),
};
