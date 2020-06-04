import React from 'react';
import styles from "./field-name.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class FieldName extends React.PureComponent {
    render() {
        const {className, name, ...other} = this.props;
        const styleClass = classNames(className, styles.field);
        return (
            <span
                className={styleClass}
                {...other}
            >
                {name}
            </span>
        )
    }
}

FieldName.propTypes = {
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    className: PropTypes.string,
};

FieldName.defaultProps = {
    className: ''
}