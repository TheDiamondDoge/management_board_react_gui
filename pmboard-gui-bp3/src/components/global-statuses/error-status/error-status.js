import React from 'react';
import {Icon, Intent} from '@blueprintjs/core';
import styles from './error-status.module.scss';

function ErrorStatus() {
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

export default React.memo(ErrorStatus);