import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../../../card/custom-card";
import LoadingSpinner from "../../../../loading-spinner/loading-spinner";
import TooltipContent from "../../../../tooltip-content/tooltip-content";
import BacklogDefectsPage from "../backlog-defects-page/backlog-defects-page";
import {BacklogDefectsTypes, ProjectDefaults} from "../../../../../util/custom-types";
import renderFields from "./fields";
import RenderFieldHelper from "../../../../../util/render-field-helper";

export default class BacklogTab extends React.Component {
    render() {
        const {loading} = this.props.backlog;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const validationParams = this.props.defaults.payload;
            const renderHelper = new RenderFieldHelper(renderFields, validationParams);
            const {payload} = this.props.backlog;
            const {updatedOn, ...data} = payload;

            const title = "Defects backlog (ECMA CRs)";
            const isBlocked = !renderHelper.displayOrNot("controls");
            const help = renderHelper.getHelpObject("title");
            return (
                <CustomCard>
                    <BacklogDefectsPage
                        data={data}
                        header={title}
                        onUpdate={() => alert("Updated")}
                        onCurrentClick={() => alert("Current week")}
                        updatedOn={updatedOn}
                        tooltip={
                            <TooltipContent
                                title={help.title}
                                content={help.content}
                            />
                        }
                        blocked={isBlocked}
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