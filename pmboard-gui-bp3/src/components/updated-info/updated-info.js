import React from 'react';
import PropTypes from 'prop-types';
import styles from './updated-info.module.css';
import {getDateFromStringWithTime} from "../../util/transform-funcs";

export default function UpdatedInfo(props) {
    const {date, ...others} = props;
    const updated = getDateFromStringWithTime(date);
    return (
        <div {...others}>
            Updated On:
            <span className={styles.updated}>
                {updated}
            </span>
        </div>
    )
}

UpdatedInfo.propTypes = {
    date: PropTypes.string,
};