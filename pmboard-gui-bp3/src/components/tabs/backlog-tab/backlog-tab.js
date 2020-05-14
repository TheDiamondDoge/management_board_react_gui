import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import TooltipContent from "../../tooltip-content/tooltip-content";
import BacklogDefectsPage from "../backlog-defects-page/backlog-defects-page";
import {BacklogDefectsTypes, ProjectDefaults} from "../../../util/custom-types";
import renderFields from "./fields";
import RenderFieldHelper from "../../../util/render-field-helper";

export default class BacklogTab extends React.Component {
    render() {
        const {loading} = this.props;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const validationParams = this.props.defaults.payload;
            const renderHelper = new RenderFieldHelper(renderFields, validationParams);
            const {payload} = this.props.backlog;
            const {updatedOn, ...data} = payload;
            return (
                <CustomCard>
                    <BacklogDefectsPage
                        data={data}
                        header="Defects backlog (ECMA CRs)"
                        onUpdate={() => alert("Updated")}
                        onCurrentClick={() => alert("Current week")}
                        updatedOn={updatedOn}
                        tooltip={<TooltipContent title={"Tips are"} content={"Here"}/>}
                        blocked={!renderHelper.displayOrNot("controls")}
                    />
                </CustomCard>
            );
        }
    }
}

BacklogTab.propTypes = {
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    backlog: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        payload: BacklogDefectsTypes.isRequired
    })
};