import React from 'react';
import PropTypes from 'prop-types';
import {nullToEmptyStr} from '../../util/transform-funcs';
import styles from "./field-value.module.css";
import classNames from 'classnames';
import SafeUrl from "../safe-url/safe-url";


export default class FieldValue extends React.Component {
    render() {
        let {value, className, useName, ...other} = this.props;
        const classes = classNames(styles.word_wrap, className);
        value = nullToEmptyStr(value);
        return (
            <div className={classes} {...other}>
                <SafeUrl url={value} label={useName} />
            </div>
        )
    }
};

FieldValue.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    useName: PropTypes.string
};
