import React from 'react';
import PropTypes from 'prop-types';
import {nullToEmptyStr} from '../../util/transform-funcs';
import {isUrl} from '../../util/util';
import styles from "./field-value.module.css";
import classNames from 'classnames';
import SafeUrl from "../safe-url/safe-url";


export default class FieldValue extends React.PureComponent {
    render() {
        let {value, className, useName, ...other} = this.props;
        const classes = classNames(styles.word_wrap, className);
        value = nullToEmptyStr(value);
        const field = isUrl(value)
            ? <SafeUrl url={value} label={useName}/>
            : value;
        return (
            <div className={classes} {...other}>
                {field}
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
    useName: PropTypes.string,
    className: PropTypes.string,
};
