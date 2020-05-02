import React from 'react';
import PropTypes from 'prop-types';
import {HTMLTable} from "@blueprintjs/core";
import StatusIndicator from "../status-indicator/status-indicator";
import styles from "./health-indicators-minimal.module.css";
import {getIndicatorsColor} from "../../util/transform-funcs";

export default class HealthIndicatorsMinimal extends React.PureComponent {
    render() {
        const {indicators, className} = this.props;
        const {schedule, scope, quality, cost} = indicators;
        return (
            <div className={className}>
                <HTMLTable
                    striped
                    bordered
                    condensed
                >
                    <colgroup>
                        <col className={styles.col_width}/>
                        <col className={styles.col_width}/>
                        <col className={styles.col_width}/>
                        <col className={styles.col_width}/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th className={styles.td_style}>
                            Schedule
                        </th>
                        <th className={styles.td_style}>
                            Scope
                        </th>
                        <th className={styles.td_style}>
                            Quality
                        </th>
                        <th className={styles.td_style}>
                            Cost
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={styles.td_style}>
                            <StatusIndicator status={getIndicatorsColor(schedule)} className={styles.status_icon}/>
                        </td>
                        <td className={styles.td_style}>
                            <StatusIndicator status={getIndicatorsColor(scope)} className={styles.status_icon}/>
                        </td>
                        <td className={styles.td_style}>
                            <StatusIndicator status={getIndicatorsColor(quality)} className={styles.status_icon}/>
                        </td>
                        <td className={styles.td_style}>
                            <StatusIndicator status={getIndicatorsColor(cost)} className={styles.status_icon}/>
                        </td>
                    </tr>
                    </tbody>
                </HTMLTable>
            </div>
        )
    }
}

HealthIndicatorsMinimal.propTypes = {
    indicators: PropTypes.shape({
        cost: PropTypes.number.isRequired,
        quality: PropTypes.number.isRequired,
        schedule: PropTypes.number.isRequired,
        scope: PropTypes.number.isRequired,
    })
};