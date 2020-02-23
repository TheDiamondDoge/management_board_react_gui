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
            <HTMLTable
                striped
                bordered
                condensed
                className={className}
            >
                <thead>
                <tr>
                    <th>Schedule</th>
                    <th>Scope</th>
                    <th>Quality</th>
                    <th>Cost</th>
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