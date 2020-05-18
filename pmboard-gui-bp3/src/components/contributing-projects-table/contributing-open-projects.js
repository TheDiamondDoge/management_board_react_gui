import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import moment from "moment";
import styles from "./contributing-open-projects.module.css";
import classNames from "classnames";
import FieldName from "../field-name/field-name";
import {ContribTable} from "../../util/custom-types";
import {dateFormatToString} from "../../util/transform-funcs";
import Legend from "../legend/legend";
import SafeUrl from "../safe-url/safe-url";
import {getProjectUrl} from "../../util/util";
import {ProjectStates} from "../../util/constants";

export default class ContributingOpenProjects extends React.Component {
    render() {
        const {maxDate, minDate, offer, contributed} = this.props;
        const {min, max} = this.getMinMaxDates(minDate, maxDate);
        const monthsBetween = Math.ceil(max.diff(min, "months", true));

        const {tdForYear, currentMonthIndex} = this.calculateTdsForYear(monthsBetween, min);
        const years = Object.keys(tdForYear);

        const monthsHeaderObjs = this.getMonthsHeader(monthsBetween, min);
        const offers = this.getMilestonesPerMonthForProducts(monthsBetween, min, offer);
        const products = this.getMilestonesPerMonthForProducts(monthsBetween, min, contributed);

        const lastComplTh = classNames(styles.last_compl_col, styles.th_style);
        const cols = this.getColsForMonthsColumns(monthsBetween);

        const offerThClasses = classNames(styles.th_style, styles.sticky_first);
        const typeThClasses = classNames(styles.th_style, styles.sticky_third);
        const approvedThClasses = classNames(lastComplTh, styles.sticky_second);
        return (
            <div className={styles.table_container}>
                <div className={styles.overflow_x}>
                    <HTMLTable
                        className={styles.table_class}
                        bordered
                    >
                        <colgroup>
                            <col className={styles.name_col_size}/>
                            <col className={styles.type_size}/>
                            <col className={styles.last_dr_col_size}/>
                            {cols}
                        </colgroup>
                        <thead>
                        <tr>
                            <th
                                colSpan={3}
                                className={styles.sticky_colspan2}
                            />
                            {years.map((year, i) => {
                                const yearThClasses = classNames(
                                    {[styles.year_left_border]: i !== 0},
                                    styles.th_style
                                )
                                return (
                                    <th
                                        key={year}
                                        colSpan={tdForYear[year]}
                                        className={yearThClasses}
                                    >
                                        {<FieldName name={year}/>}
                                    </th>
                                )
                            })}
                        </tr>
                        <tr>
                            <th className={offerThClasses}>
                                <FieldName name="Offer"/>
                            </th>
                            <th className={typeThClasses}>
                                <FieldName name="Type"/>
                            </th>
                            <th className={approvedThClasses}>
                                <FieldName name="Last completed (Approved DR)"/>
                            </th>
                            {this.getMonthsTds(monthsHeaderObjs, min, currentMonthIndex)}
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(offers).map(prjName => {
                            const url = getProjectUrl(offers[prjName].projectId);
                            const projectType = offers[prjName].projectType;
                            const lastApproved = offers[prjName].lastApproved;
                            const milestones = offers[prjName].milestones;

                            const offerNameClasses = classNames(styles.sticky_first, styles.word_wrap);
                            const offerTypeClasses = classNames(styles.td_style, styles.sticky_third, styles.word_wrap);
                            const offerApprovedClasses = classNames(styles.td_style, styles.sticky_second);
                            return (
                                <tr key={prjName}>
                                    <td className={offerNameClasses}>
                                        <b>
                                            <SafeUrl
                                                url={url}
                                                label={prjName}
                                            />
                                        </b>
                                    </td>
                                    <td className={offerTypeClasses}>
                                        {projectType}
                                    </td>
                                    <td className={offerApprovedClasses}>
                                        {lastApproved}
                                    </td>
                                    {this.renderMilestonesTds(milestones, currentMonthIndex)}
                                </tr>
                            )
                        })}
                        {Object.keys(products).map(prjName => {
                            const url = getProjectUrl(products[prjName].projectId);
                            const productType = products[prjName].projectType;
                            const lastApproved = products[prjName].lastApproved;
                            const milestones = products[prjName].milestones;

                            const productNameClasses = classNames(styles.products_name, styles.sticky_first, styles.word_wrap);
                            const productTypeClasses = classNames(styles.td_style, styles.sticky_third, styles.word_wrap);
                            const productApprovedClasses = classNames(styles.td_style, styles.sticky_second);
                            return (
                                <tr key={prjName}>
                                    <td className={productNameClasses}>
                                        <SafeUrl
                                            url={url}
                                            label={prjName}
                                        />
                                    </td>
                                    <td className={productTypeClasses}>
                                        {productType}
                                    </td>
                                    <td className={productApprovedClasses}>
                                        {lastApproved}
                                    </td>
                                    {this.renderMilestonesTds(milestones, currentMonthIndex)}
                                </tr>
                            )
                        })}
                        </tbody>
                    </HTMLTable>
                </div>
                <Legend/>
            </div>
        );
    }

    getColsForMonthsColumns(monthsBetween) {
        return Array(monthsBetween).fill(0).map((x, i) =>
            <col key={i} className={styles.mils_col_size}/>
        )
    }

    getMinMaxDates(minDate, maxDate) {
        return {
            min: getDateIgnoringDay(minDate),
            max: getDateIgnoringDay(maxDate).add(1, "month")
        }

        function getDateIgnoringDay(date) {
            const x = moment(date);
            let year = x.year();
            let month = x.month();
            return moment([year, month, 1]);
        }
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
        const isCommitted = projectState.toUpperCase() === ProjectStates.COMMITTED;
        let prevYear = -1;
        for (let i = 0; i <= monthsBetween; i++) {
            const startDate = min.clone();
            const datePlusMonths = startDate.add(i, "month");
            const month = datePlusMonths.month();
            const year = datePlusMonths.year();
            const filteredMils = milestones.filter((milestone) => {
                const date = milestone.actualDate;
                return (
                    moment(date).year() === year && moment(date).month() === month
                )
            });

            let needYearBorder = false;
            if (year !== prevYear) {
                prevYear = year;
                if (i !== 0) {
                    needYearBorder = true;
                }
            }

            tds[i] = {milestones: filteredMils, needYearBorder, isCommitted}
        }

        return this.removeLastTdIfNoMils(tds);
    }

    removeLastTdIfNoMils(tds) {
        if (tds.length <= 0) return tds;
        if (!tds[tds.length - 1]) return tds;
        if (!tds[tds.length - 1].milestones) return tds;
        if (tds[tds.length - 1].milestones.length !== 0) return tds;

        return tds.slice(0, tds.length - 1);
    }

    getMonthsHeader(monthsBetween, min) {
        const offers = this.props.offer;
        const {milestones, projectState} = offers[Object.keys(offers)[0]];
        return this.getMilestonesPerMonth(monthsBetween, min, milestones, projectState);
    }

    getMilestonesPerMonthForProducts(monthsBetween, min, projectsData) {
        let products = {};
        const projects = projectsData || [];
        for (let i = 0; i < projects.length; i++) {
            const {projectName, projectId, projectType, milestones, projectState, lastApproved} = projects[i];
            const lastApprovedLabel = lastApproved ? lastApproved.label : "";
            products[projectName] = {
                projectId,
                projectType,
                milestones: this.getMilestonesPerMonth(monthsBetween, min, milestones, projectState),
                lastApproved: lastApprovedLabel
            };
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
            if (td.length === 0) {
                return <td key={i} className={classes}/>;
            } else {
                const currentDate = moment();
                return (
                    <td
                        key={i}
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
        const isLate = currentDate.diff(moment(actualDate)) > 0;
        let classes = classNames(
            {[styles.bkground_red]: isLate && completion !== 100},
            {[styles.bkground_grey]: isLate && completion === 100 && isCommitted},
            [styles.word_wrap],
            styles.label
        );

        const dateStr = milestone.actualDate;
        const title = dateFormatToString(new Date(dateStr));
        const key = milestone.label;
        const label = milestone.label;
        return (
            <div
                key={key}
                className={classes}
                title={title}
            >
                {label}
            </div>
        )
    }
}

ContributingOpenProjects.propTypes = {
    ContribTable
};