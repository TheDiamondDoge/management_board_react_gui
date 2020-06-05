import React from 'react';
import styles from "./status-container.module.scss";

export default function StatusContainer(props) {
    const {children, ...otherProps} = props;
    return (
        <div
            className={styles.container}
            {...otherProps}
        >
            {children}
        </div>
    )
}