import React from 'react';
import PropTypes from 'prop-types';
import BarChart from "../../../../charts/backlog-defects-chart/bar-chart";
import styles from "./backlog-defects-page.module.scss";
import {Button, Intent, Position, Tooltip} from "@blueprintjs/core";
import HelpIcon from "../../../../help-icon/help-icon";
import UpdatedInfo from "../../../../updated-info/updated-info";
import classNames from "classnames";
import {BacklogDefectsTypes} from "../../../../../util/custom-types";
import NoDataFound from "../../../../global-statuses/no-data-found/no-data-found";
import TooltipContent from "../../../../tooltip-content/tooltip-content";

export default class BacklogDefectsPage extends React.Component {
    render() {
        const payload = this.props.data;
        const {updatedOn, header, tooltip} = this.props;
        const isDataExist = this.isDataExists(payload);
        return (
            <div className={styles.card_container}>
                <div className={styles.header_container}>
                    <h4 className={styles.center}>
                        {header}
                    </h4>
                    <Tooltip
                        position={Position.BOTTOM}
                        content={tooltip}
                    >
                        <HelpIcon className={styles.tooltip}/>
                    </Tooltip>
                </div>

                {this.renderChartZone(payload, isDataExist)}

                <UpdatedInfo
                    date={updatedOn}
                    className={styles.updated_block}
                />

                {this.getFooter()}

            </div>
        );
    }

    renderChartZone(payload, isDataExist) {
        if (isDataExist) {
            return (
                <BarChart
                    data={payload}
                    className={styles.chart_container}
                />
            )
        } else {
            const message = "No data found. Update grid or check 'Metrics Scope' value on 'Information' tab";
            return (
                <div className={styles.no_data_container}>
                    <NoDataFound message={message}/>
                </div>
            )
        }
    }

    isDataExists(data) {
        let dataExist = false;
        Object.keys(data).forEach(key => {
            if (data[key] && data[key].length && data[key].length > 0) {
                dataExist = true;
            }
        })

        return dataExist;
    }

    getFooter = (isDataExist) => {
        const {onUpdate, blocked, onCurrentClick} = this.props;
        const currentWeekClasses = classNames(
            {[styles.float_right]: !blocked},
            styles.inline_block
        );

        const uploadLabel = blocked ? "Last week" : "Current week";
        const updateLabel = "Update Grid";
        return (
            <div>
                {
                    blocked ||
                    <div className={styles.inline_block}>
                        <Button
                            minimal
                            icon={"refresh"}
                            intent={Intent.PRIMARY}
                            text={updateLabel}
                            onClick={onUpdate}
                        />
                    </div>
                }
                {isDataExist &&
                <div className={currentWeekClasses}>
                    <Button
                        minimal
                        icon={"download"}
                        intent={Intent.PRIMARY}
                        text={uploadLabel}
                        onClick={onCurrentClick}
                    />
                </div>
                }
            </div>
        );
    }
}

BacklogDefectsPage.propTypes = {
    data: BacklogDefectsTypes,
    header: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onCurrentClick: PropTypes.func.isRequired,
    updatedOn: PropTypes.string,
    tooltip: PropTypes.instanceOf(TooltipContent),
    blocked: PropTypes.bool
};

BacklogDefectsPage.defaultProps = {
    updatedOn: '',
    tooltip: <TooltipContent title={""} content={""}/>,
    blocked: false
};