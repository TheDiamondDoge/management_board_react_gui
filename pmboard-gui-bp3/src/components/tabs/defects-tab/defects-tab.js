import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import TooltipContent from "../../tooltip-content/tooltip-content";
import BacklogDefectsPage from "../backlog-defects-page/backlog-defects-page";
import {BacklogDefectsTypes, ProjectDefaults} from "../../../util/custom-types";

export default class DefectsTab extends React.Component {
    render() {
        const {loading} = this.props;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {payload} = this.props.defects;
            const {updatedOn, ...data} = payload;
            return (
                <CustomCard>
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
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    defects: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        payload: BacklogDefectsTypes.isRequired
    })
};