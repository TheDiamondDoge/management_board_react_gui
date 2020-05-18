import React from 'react';
import PropTypes from 'prop-types';
import styles from './updated-info.module.css';
import LastUpdated from "../last-updated/last-updated";

export default class UpdatedInfo extends React.PureComponent {
    render() {
        const {date, ...others} = this.props;
        return (
            <div {...others}>
                Updated On:
                <LastUpdated
                    className={styles.updated}
                    dateStr={date}
                />
            </div>
        )
    }
}

UpdatedInfo.propTypes = {
    date: PropTypes.string,
};