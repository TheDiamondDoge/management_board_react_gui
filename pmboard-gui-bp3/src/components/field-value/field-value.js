import React from 'react';
import PropTypes from 'prop-types';
import {nullToEmptyStr, stringToUrlElem} from '../../util/transform-funcs';
import styles from "./field-value.module.css";
import classNames from 'classnames';


export default class FieldValue extends React.Component {
    render() {
        const {value, className, ...other} = this.props;
        const classes = classNames(styles.word_wrap, className);
        return (
            <div className={classes} {...other}>
                {stringToUrlElem(nullToEmptyStr(value))}
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
};
