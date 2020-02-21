import React from 'react';
import styles from "./field-name.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class FieldName extends React.PureComponent {
    render() {
        const {className, name, ...other} = this.props;
        const styleClass = classNames(className, styles.field);
        return (<div className={styleClass} {...other}>{name}</div>)
    }
}

FieldName.propTypes = {
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired
};