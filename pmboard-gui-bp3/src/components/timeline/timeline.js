import React from 'react';
import {MILESTONES} from "./timelineDataObject";
import styles from './timeline.module.css';
import classNames from 'classnames';

export default class Timeline extends React.Component {
    state = {
        currentDate: this.getCurrentDate()
    };
    //TODO: br, timeline arrow, styling
    render() {
        console.log("timeline render");
        return (
            <div className={this.props.className} style={{width: '100%', height: "200px"}}>
                <table className={styles.timeline_table}>
                    <tbody>
                    <tr>
                        {
                            MILESTONES.map((milestone) => (
                                this.createLabelCell(milestone.label)
                            ))
                        }
                    </tr>

                    {this.createTimelineRow()}

                    <tr>
                        {
                            MILESTONES.map((milestone) => (
                                this.createDateCell(milestone.actualDate)
                            ))
                        }
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    createEmptyCell = (i, pos, marginLeft) => {
        marginLeft = marginLeft || 0.5;
        const timelineIndClasses = classNames(styles.indicator, styles.bordered);
        const fullMargin = `calc(${marginLeft * 100}% - 10px)`;
        return (
            <td key={i}>
                {
                    i === pos
                        ? (
                            <div
                                className={timelineIndClasses}
                                style={{marginLeft: fullMargin}}
                            >
                            </div>
                        )
                        : ""
                }
            </td>
        )
    };

    createLabelCell = (label) => (
        <td key={label}>
            {this.getDivContainer(label + "<br/>|")}
        </td>
    );

    createTimelineRow = () => {
        const clazz = this;
        const positionObj = this.getCurrentDatePosition();
        return (
            <>
                {
                    positionObj.first === MILESTONES.length
                        ? rowWithIndicatorRight()
                        :
                        positionObj.first === positionObj.last
                            ? rowWithIndicatorOnMilestone()
                            : rowIndicatorFloatPosition()

                }
            </>
        );

        function rowWithIndicatorRight() {
            return (
                <tr>
                    {
                        MILESTONES.map((obj, i) => (
                            <td key={i}>{clazz.createEmptyCell(i, positionObj.first - 1, 1)}</td>
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
                            <td key={i}>{clazz.createEmptyCell(i, positionObj.first)}</td>
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
                           clazz.createEmptyCell(i, milestoneCell, pos)
                        ))
                    }
                </tr>
            )
        }
    };

    calcPositionBetween = (positionObj) => {
        let firstDate = new Date(MILESTONES[positionObj.first].actualDate);
        let lastDate = new Date(MILESTONES[positionObj.last].actualDate);

        return ((this.state.currentDate - firstDate.getTime()) / (lastDate.getTime() - firstDate.getTime()));
    };

    createDateCell = (content) => (
        <td key={content}>
            {this.getDivContainer(content)}
        </td>
    );

    getCurrentDate() {
        let tmp = new Date();
        return tmp.setHours(0, 0, 0, 0);
    };

    getDivContainer = (children) => (
        <div className={styles.align_center}>
            {
                <br/>
            }
            "|"
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