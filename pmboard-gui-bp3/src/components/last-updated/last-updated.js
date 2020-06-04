import React from 'react';
import PropTypes from 'prop-types';
import {getDateFromStringWithTime, isDateLateForOneMonth} from "../../util/transform-funcs";
import classNames from 'classnames';
import styles from './last-updated.module.scss';
import {Icon, Intent} from "@blueprintjs/core";

export default class LastUpdated extends React.PureComponent {
    render() {
        const {dateStr, ...others} = this.props;
        const formattedDate = getDateFromStringWithTime(dateStr);
        const isNotUpdatedForLong = isDateLateForOneMonth(dateStr);
        const title = "Last time updated more than 1 month ago";
        const classes = classNames(styles.margin_right, {[styles.red]: isNotUpdatedForLong});
        return (
            <div {...others}>
                <span className={classes}>
                    {formattedDate}
                </span>
                {isNotUpdatedForLong &&
                    <span title={title}>
                        <Icon
                            icon={"warning-sign"}
                            intent={Intent.DANGER}
                        />
                    </span>
                }
            </div>
        );
    }
}

LastUpdated.propTypes = {
    dateStr: PropTypes.string,
};