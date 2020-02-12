import React from 'react';
import PropTypes from 'prop-types';
import BarChart from "../../charts/backlog-defects-chart/backlog-defects-chart";
import styles from "./backlog-defects-page.module.css";
import {Button, Intent, Position, Tooltip} from "@blueprintjs/core";
import HelpIcon from "../../help-icon/help-icon";
import UpdatedInfo from "../../updated-info/updated-info";
import classNames from "classnames";
import {BacklogDefectsTypes} from "../../../util/custom-types";

export default class BacklogDefectsPage extends React.Component {
    render() {
        const payload = this.props.data;
        const {updatedOn, header, tooltip, onUpdate, onCurrentClick} = this.props;
        const currentWeekClasses = classNames(styles.float_right, styles.inline_block);
        return (
            <>
                <div className={styles.header_container}>
                    <h4 className={styles.center}>
                        {header}
                    </h4>
                    <Tooltip
                        content={tooltip}
                        position={Position.TOP}
                    >
                        <HelpIcon className={styles.tooltip}/>
                    </Tooltip>
                </div>
                <BarChart data={payload}/>
                <br/>
                <UpdatedInfo date={updatedOn}/>
                <br/>
                <div>
                    <div className={styles.inline_block}>
                        <Button
                            minimal
                            icon={"refresh"}
                            intent={Intent.PRIMARY}
                            text="Update Grid"
                            onClick={onUpdate}
                        />
                    </div>
                    <div className={currentWeekClasses}>
                        <Button
                            minimal
                            icon={"download"}
                            intent={Intent.PRIMARY}
                            text="Current week"
                            onClick={onCurrentClick}
                        />
                    </div>
                </div>
            </>
        );
    }
}

BacklogDefectsPage.propTypes = {
    data: BacklogDefectsTypes,
    header: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onCurrentClick: PropTypes.func.isRequired,
    updatedOn: PropTypes.string,
    tooltip: PropTypes.element,
};