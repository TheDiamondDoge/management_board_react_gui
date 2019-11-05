import React from 'react';
import styles from './timeline.module.css';
import classNames from 'classnames';
import StatusIndicator from "../status-indicator/status-indicator";
import {Icon, Intent} from "@blueprintjs/core";
import PropTypes from 'prop-types';
import {FieldName} from "../field-name/field-name";
import {dateFormatToString, stringToUrlElem} from "../../util/transformFuncs";
import {milestonesCompare} from "../../util/comparators";
import {MilestoneShape} from "../../util/customTypes";

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: this.getCurrentDate(),
        };
    }

    render() {
        const milestones = this.filterMilestones(this.props.milestones);
        const containerClasses = classNames(this.props.className, styles.container);
        return (
            <div className={containerClasses}>
                <table id={"timeline"} className={styles.timeline_table}>
                    <tbody>

                    {this.createMileStatusRow(milestones)}

                    <tr>
                        <td>&nbsp;</td>
                        {
                            milestones.map((milestone, key) => {
                                const url = milestone.meetingMinutes;
                                let content = stringToUrlElem(url, milestone.label);
                                if (content === url) {
                                    content = milestone.label;
                                }
                                return this.createContentCell(content, key)
                            })
                        }
                    </tr>

                    {this.createDecorativeRow(milestones)}
                    {this.createTimelineRow(milestones)}
                    {this.createDecorativeRow(milestones)}

                    <tr><td>&nbsp;</td></tr>
                    <tr>
                        <td className={styles.legend}>
                            <FieldName name={"Committed (Baseline)"}/>
                        </td>
                        {
                            milestones.map((milestone, key) => (
                                this.createContentCell(dateFormatToString(new Date(milestone.actualDate)), key)
                            ))
                        }
                    </tr>

                    <tr><td>&nbsp;</td></tr>

                    <tr>
                        <td className={styles.legend}>
                            <FieldName name={"Actual / Forecast"}/>
                        </td>
                        {
                            milestones.map((milestone, key) => (
                                this.createContentCell(dateFormatToString(new Date(milestone.actualDate)), key)
                            ))
                        }
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    filterMilestones = (milestones) => {
        let result = milestones.filter(milestone => milestone.shown && milestone.actualDate);
        return result.sort(milestonesCompare);
    };

    createCell = (i, pos, marginLeft) => {
        marginLeft = marginLeft || 0.5;
        const timelineIndClasses = classNames(styles.indicator);
        const fullMargin = `calc(${marginLeft * 100}% - 13px)`;
        return (
            <td key={i} className={styles.line}>
                {
                    i === pos
                        ? (
                            <div
                                className={timelineIndClasses}
                                style={{marginLeft: fullMargin}}
                            >
                                <StatusIndicator status={"red"}/>
                            </div>
                        )
                        : ""
                }
            </td>
        )
    };

    createContentCell = (content, key) => (
        <td key={key + "_content"}>
            {this.getDivContainer(content)}
        </td>
    );

    createTimelineRow = (milestones) => {
        const clazz = this;
        const positionObj = this.getCurrentDatePosition(milestones);
        return (
            <>
                {
                    positionObj.first === milestones.length
                        ? rowWithIndicatorRight(milestones)
                        :
                        positionObj.first === positionObj.last
                            ? rowWithIndicatorOnMilestone(milestones)
                            :
                            positionObj.first === -1
                                ? rowWithIndicatorLeft(milestones)
                                : rowIndicatorFloatPosition(milestones)

                }
            </>
        );

        function rowWithIndicatorRight(milestones) {
            return (
                <tr>
                    <td className={styles.line}>&nbsp;</td>
                    {
                        milestones.map((obj, i) => (
                            clazz.createCell(i, positionObj.first - 1, 0.9)
                        ))
                    }
                </tr>
            )
        }

        function rowWithIndicatorLeft(milestones) {
            return (
                <tr>
                    <td className={styles.line}>&nbsp;</td>
                    {
                        milestones.map((obj, i) => (
                            clazz.createCell(i, 0, 0.1)
                        ))
                    }
                </tr>
            )
        }

        function rowWithIndicatorOnMilestone(milestones) {
            return (
                <tr>
                    <td className={styles.line}>&nbsp;</td>
                    {
                        milestones.map((obj, i) => (
                            clazz.createCell(i, positionObj.first)
                        ))
                    }
                </tr>
            )
        }

        function rowIndicatorFloatPosition(milestones) {
            let pos = clazz.calcPositionBetween(positionObj, milestones);
            let milestoneCell;
            if (pos < 0.5) {
                milestoneCell = positionObj.first;
                pos += 0.5;
            } else {
                milestoneCell = positionObj.last;
                pos -= 0.5;
            }
            return (
                <tr>
                    <td className={styles.line}>&nbsp;</td>
                    {
                        milestones.map((obj, i) => (
                            clazz.createCell(i, milestoneCell, pos)
                        ))
                    }
                </tr>
            )
        }
    };

    createDecorativeRow = (milestones) => (
        <tr>
            <td>&nbsp;</td>
            {
                milestones.map((obj, i) => (
                    <td
                        key={i + "_decorative"}
                        className={styles.align_center}
                    >
                        |
                    </td>
                ))
            }
        </tr>
    );

    createMileStatusRow = (milestones) => {
        const iconsStyle = classNames(styles.align_center, styles.min_width);
        return (
            <tr>
                <td>&nbsp;</td>
                {
                    milestones.map((obj, i) => (
                        <td key={i + "_status"} className={iconsStyle}>
                            {this.getMilestoneStatusIcon(obj)}
                        </td>
                    ))
                }
            </tr>
        )
    };

    getMilestoneStatusIcon = (milestone) => {
        if(milestone.completion === 100) {
            return <Icon icon={"tick"} intent={Intent.SUCCESS}/>
        } else if (new Date(milestone.actualDate) < this.state.currentDate) {
            return <Icon icon={"cross"} intent={Intent.DANGER}/>;
        } else {
            return "";
        }
    };

    calcPositionBetween = (positionObj, milestones) => {
        let firstDate = new Date(milestones[positionObj.first].actualDate);
        let lastDate = new Date(milestones[positionObj.last].actualDate);

        return ((this.state.currentDate - firstDate.getTime()) / (lastDate.getTime() - firstDate.getTime()));
    };

    getCurrentDate() {
        let tmp = new Date();
        return tmp.setHours(0, 0, 0, 0);
    };

    getDivContainer = (children) => (
        <div className={styles.align_center}>
            {children}
        </div>
    );

    getCurrentDatePosition = (milestones) => {
        let i = 0;
        for (; i < milestones.length; i++) {
            let currMilestoneDate = new Date(milestones[i].actualDate);
            currMilestoneDate.setHours(0, 0, 0, 0);
            if (this.state.currentDate > currMilestoneDate) {
                continue;
            }

            if (this.state.currentDate === currMilestoneDate.getTime()) {
                return {
                    first: i,
                    last: i,
                };
            }

            if (this.state.currentDate < currMilestoneDate) {
                return {
                    first: i - 1,
                    last: i,
                };
            }
        }
        return {
            first: i,
            last: i
        };
    }
}

Timeline.propTypes = {
    milestones: PropTypes.arrayOf(MilestoneShape).isRequired,
};