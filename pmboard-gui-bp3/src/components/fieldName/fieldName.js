import React from 'react';
import styles from "./fieldName.module.css";
import PropTypes from 'prop-types';

export const FieldName = ({name}) => {
    return (<div className={styles.field}>{name}</div>)
};

FieldName.propTypes = {
    name: PropTypes.string.isRequired,
};
