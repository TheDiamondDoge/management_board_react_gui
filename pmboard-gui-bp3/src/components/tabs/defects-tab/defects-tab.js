import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import TooltipContent from "../../tooltip-content/tooltip-content";
import BacklogDefectsPage from "../backlog-defects-page/backlog-defects-page";
import {BacklogDefectsTypes} from "../../../util/custom-types";

export default class DefectsTab extends React.Component {
    render() {
        const {loading} = this.props;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {payload} = this.props.defects;
            const {updatedOn, ...data} = payload;
            return (
                <CustomCard autosize={"x"}>
                    <BacklogDefectsPage
                        data={data}
                        header="New Open Defects (ECMA CRs)"
                        onUpdate={() => alert("Updated")}
                        onCurrentClick={() => alert("Current week")}
                        updatedOn={updatedOn}
                        tooltip={<TooltipContent title={"Tips are"} content={"Here"}/>}
                    />
                </CustomCard>
            );
        }
    }
}

DefectsTab.propTypes = {
    defects: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        payload: BacklogDefectsTypes.isRequired
    })
};