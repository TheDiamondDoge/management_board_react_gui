import React from "react";
import {HTMLTable, Button, Classes, Intent} from "@blueprintjs/core";
import {CustomCard} from "../../card/customCard";
import styles from "./blc.module.css";
import classNames from 'classnames';
import BlcRow from "./blcRows/blcRow";
import EditSaveControls from "../../editSaveContols/editSaveControls";
import {DEFAULT_ROW_VALUES} from "./blcRows/blcRowsDataObject";
import style from "./blcRows/blcRow.module.css";

export default class BlcDashboard extends React.Component {
    state = {
        isPmRow: false,
        isPmoRow: false,
        isSalesRow: false,
        isCommentsEdit: false,
    };

    onClickEdit = (row) => {
        this.setState((prevState) => ({
                [row]: !prevState[row]
            }
        ))
    };

    onClickCommentsEdit = () => {
        this.setState({
            isCommentsEdit: true
        })
    };

    onClickCancel = () => {
        this.setState({
            isPmRow: false,
            isPmoRow: false,
            isSalesRow: false,
            isCommentsEdit: false,
        });
    };

    render() {
        const thClasses = classNames(styles.column_align_center, styles.border_right);
        const thCommentClasses = classNames(styles.column_align_center);
        return (
            <>
                <CustomCard>
                    <Button intent={Intent.SUCCESS}
                            className={Classes.MINIMAL}
                            icon={"upload"}
                            text={"Publish Dashboard"}
                    />
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
                            <th className={thCommentClasses} rowSpan={2}>
                                <div>
                                    <div className={style.inline_block}>
                                        {
                                           !this.state.isPmRow && !this.state.isPmoRow && !this.state.isSalesRow && !this.state.isCommentsEdit &&
                                            <Button
                                                minimal={true}
                                                icon={"edit"}
                                                intent={"primary"}
                                                onClick={this.onClickCommentsEdit}
                                            />
                                        }
                                    </div>
                                    <div className={style.inline_block}>
                                        Comments
                                    </div>
                                </div>
                            </th>
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
                        <BlcRow
                            roleName={"Project Manager"}
                            lastUpdatedBy={"aiksanov"}
                            updatedOn={"2019-08-04 14:57"}
                            rowValues={DEFAULT_ROW_VALUES}
                            onClickEdit={() => (this.onClickEdit("isPmRow"))}
                            isValuesEdit={this.state.isPmRow}
                            isCommentsEdit={this.state.isCommentsEdit}
                            isControlsHidden={this.isInEditMode()}
                        />
                        <BlcRow
                            roleName={"PMO - Quality"}
                            lastUpdatedBy={"dgavrilov"}
                            updatedOn={"2019-08-04 14:45"}
                            rowValues={DEFAULT_ROW_VALUES}
                            onClickEdit={() => (this.onClickEdit("isPmoRow"))}
                            isValuesEdit={this.state.isPmoRow}
                            isCommentsEdit={this.state.isCommentsEdit}
                            isControlsHidden={this.isInEditMode()}
                        />
                        <BlcRow
                            roleName={"Sales"}
                            lastUpdatedBy={"npashinskyi"}
                            updatedOn={"2019-08-04 14:23"}
                            rowValues={DEFAULT_ROW_VALUES}
                            onClickEdit={() => (this.onClickEdit("isSalesRow"))}
                            isValuesEdit={this.state.isSalesRow}
                            isCommentsEdit={this.state.isCommentsEdit}
                            isControlsHidden={this.isInEditMode()}
                        />
                        </tbody>
                    </HTMLTable>
                </CustomCard>
                {
                    (this.state.isPmoRow || this.state.isPmRow || this.state.isSalesRow || this.state.isCommentsEdit)
                        ? <EditSaveControls editMode={true} onClick={this.onClickCancel} />
                        : ""
                }
            </>
        )
    }

    isInEditMode = () => {
        return (this.state.isPmRow || this.state.isPmoRow || this.state.isSalesRow || this.state.isCommentsEdit)
    }
}