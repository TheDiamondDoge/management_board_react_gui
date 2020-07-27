import React from 'react';
import styles from "./field-name.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

function FieldName({className, name, ...other}) {
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

FieldName.propTypes = {
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    className: PropTypes.string,
};

FieldName.defaultProps = {
    className: ''
}

export default React.memo(FieldName);