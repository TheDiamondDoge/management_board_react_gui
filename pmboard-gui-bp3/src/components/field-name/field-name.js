import React from 'react';
import styles from "./field-name.module.css";
import classNames from "classnames";

export const FieldName = (props) => {
    const {className, name, ...other} = props;
    const styleClass = classNames(className, styles.field);
    return (<div className={styleClass} {...other}>{name}</div>)
};

