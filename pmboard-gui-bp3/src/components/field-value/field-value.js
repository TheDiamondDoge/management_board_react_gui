import React from 'react';
import PropTypes from 'prop-types';
import {nullToEmptyStr, stringToUrlElem} from '../../util/transformFuncs';
import styles from "./field-value.module.css";


export default class FieldValue extends React.Component {
    render() {
        const {value, ...other} = this.props;
        return (
            <div className={styles.word_wrap} {...other}>
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
