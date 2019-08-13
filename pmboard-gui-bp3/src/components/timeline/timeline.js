import React from 'react';
import {MILESTONES} from "./timelineDataObject";
import styles from './timeline.module.css';
import classNames from 'classnames';
import StatusIndicator from "../statusIndicator/statusIndicator";

export default class Timeline extends React.Component {
    state = {
        currentDate: this.getCurrentDate()
    };
    //TODO: br, timeline arrow, styling
    render() {
        console.log("timeline render");
        return (
            <div className={this.props.className} style={{width: '100%', height: "150px"}}>
                <table className={styles.timeline_table}>
                    <tbody>
                    <tr>
                        {
                            MILESTONES.map((milestone) => (
                                this.createContentCell(milestone.label)
                            ))
                        }
                    </tr>

                    {this.createDecorativeRow()}
                    {this.createTimelineRow()}
                    {this.createDecorativeRow()}

                    <tr>
                        {
                            MILESTONES.map((milestone) => (
                                this.createContentCell(milestone.actualDate)
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            MILESTONES.map((milestone) => (
                                this.createContentCell(milestone.actualDate)
                            ))
                        }
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    createCell = (i, pos, marginLeft) => {
        marginLeft = marginLeft || 0.5;
        const timelineIndClasses = classNames(styles.indicator, styles.line);
        const fullMargin = `calc(${marginLeft * 100}% - 10px)`;
        return (
            <td key={i} className={styles.line}>
                {
                    i === pos
                        ? (
                            <div
                                className={timelineIndClasses}
                                style={{marginLeft: fullMargin}}
                            >
                                <StatusIndicator status={"red"} />
                            </div>
                        )
                        : ""
                }
            </td>
        )
    };

    createContentCell = (content) => (
        <td key={content}>
            {this.getDivContainer(content)}
        </td>
    );

    createTimelineRow = () => {
        const clazz = this;
        const positionObj = this.getCurrentDatePosition();
        console.log("position", positionObj);
        return (
            <>
                {
                    positionObj.first === MILESTONES.length
                        ? rowWithIndicatorRight()
                        :
                        positionObj.first === positionObj.last
                            ? rowWithIndicatorOnMilestone()
                            :
                            positionObj.first === -1
                                ? rowWithIndicatorLeft()
                                : rowIndicatorFloatPosition()

                }
            </>
        );

        function rowWithIndicatorRight() {
            return (
                <tr>
                    {
                        MILESTONES.map((obj, i) => (
                            clazz.createCell(i, positionObj.first - 1, 0.9)
                        ))
                    }
                </tr>
            )
        }

        function rowWithIndicatorLeft() {
            return (
                <tr>
                    {
                        MILESTONES.map((obj, i) => (
                            clazz.createCell(i, 0, 0.1)
                        ))
                    }
                </tr>
            )
        }

        function rowWithIndicatorOnMilestone() {
            return (
                <tr>
                    {
                        MILESTONES.map((obj, i) => (
                            clazz.createCell(i, positionObj.first)
                        ))
                    }
                </tr>
            )
        }

        function rowIndicatorFloatPosition() {
            let pos = clazz.calcPositionBetween(positionObj);
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
                    {
                        MILESTONES.map((obj, i) => (
                           clazz.createCell(i, milestoneCell, pos)
                        ))
                    }
                </tr>
            )
        }
    };

    createDecorativeRow = () => (
        <tr>
            {
                MILESTONES.map((obj, i) => (
                    <td
                        key={i}
                        className={styles.align_center}
                    >
                        |
                    </td>
                ))
            }
        </tr>
    );

    calcPositionBetween = (positionObj) => {
        console.log(positionObj);
        let firstDate = new Date(MILESTONES[positionObj.first].actualDate);
        let lastDate = new Date(MILESTONES[positionObj.last].actualDate);

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

    getCurrentDatePosition = () => {
        console.log(this.state.currentDate);
        let i = 0;
        for (; i < MILESTONES.length; i++) {
            let currMilestoneDate = new Date(MILESTONES[i].actualDate);
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