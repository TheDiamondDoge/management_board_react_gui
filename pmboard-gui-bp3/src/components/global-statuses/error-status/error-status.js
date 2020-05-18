import React from 'react';
import {Icon, Intent} from '@blueprintjs/core';
import styles from './error-status.module.css';

export default class ErrorStatus extends React.PureComponent {
    render() {
        const iconSize = 50;
        return (
            <div className={styles.container}>
                <Icon
                    icon={"error"}
                    iconSize={iconSize}
                    intent={Intent.PRIMARY}
                    className={styles.icon}
                />
                Something went wrong. Please try again.
            </div>
        )
    }
}