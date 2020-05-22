import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import FieldName from "../field-name/field-name";
import styles from "./milestones-kpi.module.css";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {MilestoneKpiShape} from "../../util/custom-types";
import {toPercents, toPercentsOrNA} from "../../util/transform-funcs";

export default class MilestonesKpi extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            defaults: {
                noMilestonesLabel: "No suitable TR, DR4, DR5, CI milestones found"
            }
        }
    }

    render() {
        let headerClasses = classNames(styles.column_align_center, styles.borderBottom);
        return (
            <HTMLTable
                className={styles.mil_table}
                striped
            >
                <colgroup>
                    <col className={styles.mil_col}/>
                    <col className={styles.adh_col}/>
                    <col className={styles.delay_col}/>
                    <col className={styles.duration_col}/>
                </colgroup>
                <thead>
                <tr>
                    <th
                        className={headerClasses}
                        colSpan={4}
                    >
                        COMMITTED versus ACTUAL
                    </th>
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
                    this.renderBody()
                }
                </tbody>
            </HTMLTable>
        );
    }

    renderBody() {
        const {milestonesKpi} = this.props;
        const milestonesToRender = milestonesKpi
            .filter((obj) => !(obj.adherence === 0 && obj.delay === 0 && obj.duration === 0));

        if (milestonesToRender.length > 0) {
            return milestonesToRender.map((obj, i) => {
                const label = obj.label;
                const adherence = toPercentsOrNA(obj.adherence);
                const delay = obj.delay;
                const duration = obj.duration === 1 ? `${obj.duration} day` : `${obj.duration} days`;
                return (
                    <tr key={i}>
                        <td>
                            <FieldName name={label}/>
                        </td>
                        <td className={styles.column_align_center}>
                            {adherence}
                        </td>
                        <td className={styles.column_align_center}>
                            {delay}
                        </td>
                        <td className={styles.column_align_center}>
                            {duration}
                        </td>
                    </tr>
                )})
        } else {
            const message = this.state.defaults.noMilestonesLabel;
            return (
                <tr>
                    <td
                        colSpan={4}
                        className={styles.column_align_center}
                    >
                        <FieldName name={message}/>
                    </td>
                </tr>
            )
        }
    }
}

MilestonesKpi.propTypes = {
    milestonesKpi: PropTypes.arrayOf(MilestoneKpiShape),
};

MilestonesKpi.defaultProps = {
    milestonesKpi: []
};
