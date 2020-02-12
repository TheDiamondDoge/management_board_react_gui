import React from 'react';
import PropTypes from 'prop-types';
import {HTMLTable} from "@blueprintjs/core";
import StatusIndicator from "../status-indicator/status-indicator";
import styles from "./health-indicators-minimal.module.css";

export default function HealthIndicatorsMinimal(props) {
    const {className} = props;
    return (
        <HTMLTable
            striped
            bordered
            condensed
            className={className}
        >
            <tr>
                <th>Schedule</th>
                <th>Scope</th>
                <th>Quality</th>
                <th>Cost</th>
            </tr>
            <tr>
                <th className={styles.td_style}>
                    <StatusIndicator status={"green"} className={styles.status_icon}/>
                </th>
                <th className={styles.td_style}>
                    <StatusIndicator status={"blank"} className={styles.status_icon}/>
                </th>
                <th className={styles.td_style}>
                    <StatusIndicator status={"yellow"} className={styles.status_icon}/>
                </th>
                <th className={styles.td_style}>
                    <StatusIndicator status={"red"} className={styles.status_icon}/>
                </th>
            </tr>
        </HTMLTable>
    )
}