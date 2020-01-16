import React from 'react';
import styles from "./field-name.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export function FieldName(props) {
    const {className, name, ...other} = props;
    const styleClass = classNames(className, styles.field);
    return (<div className={styleClass} {...other}>{name}</div>)
}

FieldName.propTypes = {
    name: PropTypes.oneOf(PropTypes.string, PropTypes.number, PropTypes.bool).isRequired
};