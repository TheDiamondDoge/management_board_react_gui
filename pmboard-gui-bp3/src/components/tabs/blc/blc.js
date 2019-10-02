import React from "react";
import {HTMLTable, Button, Classes, Intent} from "@blueprintjs/core";
import {CustomCard} from "../../card/custom-card";
import styles from "./blc.module.css";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BlcRow from "../../blc-rows/blcRow";
import EditSaveControls from "../../edit-save-contols/edit-save-controls";
import style from "../../blc-rows/blcRow.module.css";
import {funcWithDelay} from "../../../util/wrappers";

//TODO: Fetch is OK, need to populate
export default class BlcDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPmRow: false,
            isPmoRow: false,
            isSalesRow: false,
            isCommentsEdit: false,
        };
    }

    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
    }

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

    cancelEdit = () => {
        this.setState({
            isPmRow: false,
            isPmoRow: false,
            isSalesRow: false,
            isCommentsEdit: false,
        });
    };

    render() {
        console.log("RENDER BLC");
        const thClasses = classNames(styles.column_align_center, styles.border_right);
        const thCommentClasses = classNames(styles.column_align_center);
        const {loaded} = this.props;

        this.delayedOnChange = funcWithDelay(this.props.onRowValuesChange, 300);

        if (loaded) {
            const {pm, pmo, sales} = this.props;
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
                                roleName={pm.role}
                                lastUpdatedBy={pm.csl}
                                updatedOn={pm.updatedOn}
                                rowValues={pm.indicators}
                                comment={pm.comment}
                                onClickEdit={() => (this.onClickEdit("isPmRow"))}
                                onChange={this.onChange("pm")}
                                isValuesEdit={this.state.isPmRow}
                                isCommentsEdit={this.state.isCommentsEdit}
                                isControlsHidden={this.isInEditMode()}
                            />
                            <BlcRow
                                roleName={pmo.role}
                                lastUpdatedBy={pmo.csl}
                                updatedOn={pmo.updatedOn}
                                rowValues={pmo.indicators}
                                comment={pmo.comment}
                                onClickEdit={() => (this.onClickEdit("isPmoRow"))}
                                onChange={this.onChange("pmo")}
                                isValuesEdit={this.state.isPmoRow}
                                isCommentsEdit={this.state.isCommentsEdit}
                                isControlsHidden={this.isInEditMode()}
                            />
                            <BlcRow
                                roleName={sales.role}
                                lastUpdatedBy={sales.csl}
                                updatedOn={sales.updatedOn}
                                rowValues={sales.indicators}
                                comment={sales.comment}
                                onClickEdit={() => (this.onClickEdit("isSalesRow"))}
                                onChange={this.onChange("sales")}
                                isValuesEdit={this.state.isSalesRow}
                                isCommentsEdit={this.state.isCommentsEdit}
                                isControlsHidden={this.isInEditMode()}
                            />
                            </tbody>
                        </HTMLTable>
                    </CustomCard>
                    {
                        (this.state.isPmoRow || this.state.isPmRow || this.state.isSalesRow || this.state.isCommentsEdit)
                            ? <EditSaveControls editMode={true}
                                                onCancel={() => {
                                                    this.cancelEdit();
                                                    this.props.loadData();
                                                }}
                            />
                            : ""
                    }
                </>
            )
        } else {
            return "";
        }
    }

    isInEditMode = () => {
        return (this.state.isPmRow || this.state.isPmoRow || this.state.isSalesRow || this.state.isCommentsEdit)
    };

    onChange = (propKey) => {
        return (val, key) => {
            this.delayedOnChange(propKey, val, key);
        }
    };
}

BlcDashboard.propTypes = {
    loadData: PropTypes.func,
    resetData: PropTypes.func,
    onRowValuesChange: PropTypes.func,
    pm: PropTypes.object.isRequired,
    pmo: PropTypes.object.isRequired,
    sales: PropTypes.object.isRequired,
    loaded: PropTypes.bool.isRequired,
};