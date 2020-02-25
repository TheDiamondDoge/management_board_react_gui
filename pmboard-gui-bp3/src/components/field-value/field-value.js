import React from 'react';
import PropTypes from 'prop-types';
import {nullToEmptyStr} from '../../util/transform-funcs';
import styles from "./field-value.module.css";
import classNames from 'classnames';
import SafeUrl from "../safe-url/safe-url";


export default class FieldValue extends React.PureComponent {
    render() {
        let {value, className, useName, ...other} = this.props;
        const classes = classNames(styles.word_wrap, className);
        value = nullToEmptyStr(value);
        const isUrl = this.isUrl(value);
        const field = isUrl ? <SafeUrl url={value} label={useName}/> : value;
        return (
            <div className={classes} {...other}>
                {field}
            </div>
        )
    }

    isUrl = (value) => {
        if (typeof value === "string") {
            const expr = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi;
            const regExp = new RegExp(expr);
            return !!String(value).match(regExp);
        } else {
            return false;
        }
    };
};

FieldValue.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    useName: PropTypes.string
};
