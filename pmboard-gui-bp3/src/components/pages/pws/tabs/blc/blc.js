import React from "react";
import {HTMLTable, Button, Classes, Intent} from "@blueprintjs/core";
import {CustomCard} from "../../../../card/customCard";
import styles from "./blc.module.css";
import classNames from 'classnames';
import BlcRow from "./blcRows/blcRow";

export default class BlcDashboard extends React.Component {
    render() {
        const thClasses = classNames(styles.column_align_center, styles.border_right);
        const thCommentClasses = classNames(styles.column_align_center);
        return (
            <CustomCard>
                <Button intent={Intent.SUCCESS} className={Classes.MINIMAL} icon={"upload"} text={"Publish Dashboard"}/>
                <br/>
                <br/>
                <HTMLTable
                    bordered={true}
                    className={styles.blc_table}
                    striped={true}
                >
                    <colgroup>
                        <col className={styles.role_col}/>
                        <col className={styles.who_col}/>
                        <col className={styles.updated_col}/>
                        <col className={styles.or_col}/>
                        <col className={styles.charter_col}/>
                        <col className={styles.proj_plan_col}/>
                        <col className={styles.tailoring_col}/>
                        <col className={styles.prog_mgr_col}/>
                        <col className={styles.core_col}/>
                        <col className={styles.bp_plan_col}/>
                        <col className={styles.bp_sales}/>
                        <col className={styles.lp_plan}/>
                        <col className={styles.lp_sales}/>
                        <col className={styles.les_learned}/>
                        <col className={styles.risks_col}/>
                        <col className={styles.comment}/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th className={thClasses} rowSpan={2}>Role</th>
                        <th className={thClasses} rowSpan={2}>Who</th>
                        <th className={thClasses} rowSpan={2}>Updated On</th>
                        <th className={thClasses} rowSpan={2}>Opportunity Review</th>
                        <th className={thClasses} rowSpan={2}>Charter</th>
                        <th className={thClasses} rowSpan={2}>Project Plan</th>
                        <th className={thClasses} rowSpan={2}>Tailoring</th>
                        <th className={thClasses} colSpan={2}>Accountability</th>
                        <th className={thClasses} colSpan={2}>Business Plan</th>
                        <th className={thClasses} colSpan={2}>Launch Plan</th>
                        <th className={thClasses} rowSpan={2}>Lessons Learned</th>
                        <th className={thClasses} rowSpan={2}>Risks</th>
                        <th className={thCommentClasses} rowSpan={2}>Comments</th>
                    </tr>
                    <tr>
                        <th className={thClasses}>Program Mgr</th>
                        <th className={thClasses}>Core team members</th>
                        <th className={thClasses}>Plan</th>
                        <th className={thClasses}>Sales Buy-in</th>
                        <th className={thClasses}>Plan</th>
                        <th className={thClasses}>Sales Buy-in</th>
                    </tr>
                    </thead>
                    <tbody>
                    <BlcRow roleName={"Project Manager"}/>
                    <BlcRow roleName={"PMO - Quality"}/>
                    <BlcRow roleName={"Sales"}/>
                    </tbody>
                </HTMLTable>
            </CustomCard>
        )
    }
}