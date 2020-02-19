import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import moment from "moment";
import styles from "./contributing-open-projects.module.css";
import classNames from "classnames";
import {FieldName} from "../field-name/field-name";

//TODO: this.getMilestonesForOffer(...) - to be done
export default class ContributingOpenProjects extends React.Component {
    render() {
        const {offerName, milestones, projectState} = this.props.offer;
        const {maxDate, minDate} = this.props;

        const max = moment(maxDate);
        const min = moment(minDate);
        const monthsBetween = Math.ceil(max.diff(min, "months", true));

        const {tdForYear, currentMonthIndex} = this.calculateTdsForYear(monthsBetween, min);
        const tds = this.getMilestonesPerMonth(monthsBetween, min, milestones, projectState);
        console.log("TDS", tds);
        const years = Object.keys(tdForYear);

        const products = this.getMilestonesPerMonthForProducts(monthsBetween, min);

        const lastComplTh = classNames(styles.last_compl_col, styles.th_style);
        const yearTh = classNames(styles.year_left_border, styles.th_style);
        return (
            <>
                <HTMLTable
                    bordered
                >
                    <thead>
                    <tr>
                        <th colSpan={2}/>
                        {years.map((year) => (
                            <th key={year}
                                colSpan={tdForYear[year]}
                                className={yearTh}
                            >
                                {<FieldName name={year}/>}
                            </th>
                        ))}
                    </tr>
                    <tr>
                        <th className={styles.th_style}>
                            <FieldName name="Offer"/>
                        </th>
                        <th className={lastComplTh}>
                            <FieldName name="Last completed (Approved DR)"/>
                        </th>
                        {this.getMonthsTds(tds, min, currentMonthIndex)}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><b>{offerName}</b></td>
                        <td className={styles.td_style}>
                            DR1
                        </td>
                        {this.renderMilestonesTds(tds, currentMonthIndex)}
                    </tr>
                    {Object.keys(products).map(prjName =>
                        (
                            <tr key={prjName}>
                                <td className={styles.products_name}>
                                    {prjName}
                                </td>
                                <td className={styles.td_style}>
                                    DR1
                                </td>
                                {this.renderMilestonesTds(products[prjName], currentMonthIndex)}
                            </tr>
                        )
                    )}
                    </tbody>
                </HTMLTable>
            </>
        );
    }

    calculateTdsForYear(monthsBetween, min) {
        let tdForYear = {};
        let currentMonthIndex = -1;
        const dateNow = moment();
        const currentMonth = dateNow.month();
        const currentYear = dateNow.year();
        for (let i = 0; i < monthsBetween; i++) {
            let startDate = min.clone();
            let year = startDate.add(i, "month").year();
            let month = startDate.month();
            if (year in tdForYear) {
                tdForYear[year] += 1;
            } else {
                tdForYear[year] = 1;
            }

            if (month === currentMonth && year === currentYear) {
                currentMonthIndex = i;
            }
        }

        return {tdForYear, currentMonthIndex};
    }

    getMilestonesPerMonth(monthsBetween, min, milestones, projectState) {
        let tds = new Array(monthsBetween).fill(0);
        let prevYear = -1;
        for (let i = 0; i < monthsBetween; i++) {
            const startDate = min.clone();
            const datePlusMonths = startDate.add(i, "month");
            const month = datePlusMonths.month();
            const year = datePlusMonths.year();
            const filteredMils = milestones.filter((milestone) => (
                moment(milestone.actualDate).year() === year && moment(milestone.actualDate).month() === month)
            );

            let needYearBorder = false;
            if (year !== prevYear) {
                needYearBorder = true;
                prevYear = year;
            }

            const isCommitted = projectState.toUpperCase() == "COMMITTED";
            tds[i] = {milestones: filteredMils, needYearBorder, isCommitted}
        }
        return tds;
    }

    getMilestonesPerMonthForProducts(monthsBetween, min) {
        let products = {};
        const contributed = this.props.contributed;
        for (let i = 0; i < contributed.length; i++) {
            products[contributed[i].projectName] = this.getMilestonesPerMonth(monthsBetween, min, contributed[i].milestones, contributed[i].projectState);
        }

        return products;
    }

    getMonthsTds(tds, min, currentMonthIndex) {
        return tds.map((item, index) => {
            const startDate = min.clone();
            const monthLabel = startDate.add(index, "month").format("MMM");
            const year = startDate.year();
            const classes = classNames(
                styles.th_style,
                {[styles.current_month]: currentMonthIndex === index},
                {[styles.year_left_border]: item.needYearBorder}
            );
            return (
                <th key={`${monthLabel}_${year}`}
                    className={classes}
                >
                    <FieldName name={monthLabel}/>
                </th>
            )
        });
    }

    renderMilestonesTds(tds, currentMonthIndex) {
        return tds.map((item, i) => {
            const classes = classNames(
                styles.td_style,
                {[styles.current_month]: currentMonthIndex === i},
                {[styles.year_left_border]: item.needYearBorder}
            );
            const td = item.milestones;
            console.log("AAAAAAAAAAAAAAAA", item);
            if (td.length === 0) {
                return <td key={i} className={classes}/>;
            } else {
                const currentDate = moment();
                return (
                    <td key={i}
                        className={classes}
                    >
                        {td.map(mil => (this.renderMilestoneLabel(mil, item.isCommitted, currentDate)))}
                    </td>
                )
            }
        })
    }

    renderMilestoneLabel(milestone, isCommitted, currentDate) {
        const {completion, actualDate} = milestone;
        console.log("AAAAAAAAAAAAAAAA", milestone);
        //TODO if project committed condition (oO)
        const isLate = currentDate.diff(moment(actualDate)) > 0;
        let classes = "";
        if (isCommitted) {
            classes = classNames(
                {[styles.bkground_grey]: isLate && completion !== 100 && isCommitted},
                styles.label
            )
        } else {
            classes = classNames(
                {[styles.bkground_red]: isLate && completion !== 100},
                styles.label
            );
        }
        return (
            <div key={milestone.label} className={classes}>
                {milestone.label}
            </div>
        )
    }
}