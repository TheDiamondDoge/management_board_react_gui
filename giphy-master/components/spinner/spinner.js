import React from 'react';
import styles from './spinner.css';

export default () => (
    <div className={styles.container}>
        <img alt={'Loading...'} src="/images/ajax-loader.gif" />
    </div>
)