import React from 'react';
import PropTypes from 'prop-types';
import {nullToEmptyStr} from '../../util/transform-funcs';
import {isUrl} from '../../util/util';
import styles from "./field-value.module.scss";
import classNames from 'classnames';
import SafeUrl from "../safe-url/safe-url";


function FieldValue({value, className, useName, ...other}) {
    const classes = classNames(styles.word_wrap, className);
    value = nullToEmptyStr(value);
    const field = isUrl(value)
        ? (
            <SafeUrl
                url={value}
                label={useName}
                className={classes}
            />
        )
        : value;
    return (
        <div className={classes} {...other}>
            {field}
        </div>
    )
}

FieldValue.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    useName: PropTypes.string,
    className: PropTypes.string,
};

FieldValue.defaultProps = {
    value: '',
    useName: 'Click here',
    className: ''
};

export default React.memo(FieldValue);