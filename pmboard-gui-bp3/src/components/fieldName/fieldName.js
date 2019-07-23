import React from 'react';
import styles from "./fieldName.module.css";

export default ({name, size}) => (
    <div style={{width: size, height: '100%'}} className={styles.field}>{name}:</div>
);