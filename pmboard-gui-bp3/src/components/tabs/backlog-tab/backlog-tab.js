import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import BarChart from "../../bar-chart/bar-chart";
import styles from "./backlog-tab.module.css";
import TooltipContent from "../../tooltip-content/tooltip-content";
import {Button, Intent, Position, Tooltip} from "@blueprintjs/core";
import HelpIcon from "../../help-icon/help-icon";
import UpdatedInfo from "../../updated-info/updated-info";
import FieldValue from "../../field-value/field-value";

export default class BacklogTab extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
    }


    render() {
        const {loading} = this.props;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {payload} = this.props.backlog;
            const {updatedOn} = payload;
            return (
                <CustomCard autosize>
                    <div className={styles.header_container}>
                        <h4 className={styles.center}>
                            Defects backlog (ECMA CRs)
                        </h4>
                        <Tooltip
                            content={<TooltipContent title={"Tips are"} content={"Here"}/>}
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
                        <Button
                            minimal
                            icon={"refresh"}
                            intent={Intent.PRIMARY}
                            text="Update Grid"
                            onClick={() => alert("???")}
                        />
                        <FieldValue useName="Current week"
                                    value="http://google.com"
                                    className={styles.float_right}
                        />
                    </div>
                </CustomCard>
            );
        }
    }
}

BacklogTab.propTypes = {
    loadData: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired,
    backlog: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        payload: PropTypes.object.isRequired
    })
};