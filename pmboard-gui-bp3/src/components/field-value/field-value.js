import React from 'react';
import PropTypes from 'prop-types';
import {nullToEmptyStr, stringToUrlElem} from '../../util/transform-funcs';
import styles from "./field-value.module.css";
import classNames from 'classnames';


export default class FieldValue extends React.Component {
    render() {
        let {value, className, useName, ...other} = this.props;
        const classes = classNames(styles.word_wrap, className);
        value = stringToUrlElem(nullToEmptyStr(value), useName);
        return (
            <div className={classes} {...other}>
                {value}
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
    useName: PropTypes.bool
};
