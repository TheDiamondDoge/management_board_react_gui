import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import TooltipContent from "../../tooltip-content/tooltip-content";
import BacklogDefectsPage from "../backlog-defects-page/backlog-defects-page";
import {BacklogDefectsTypes, ProjectDefaults} from "../../../util/custom-types";
//TODO rename to 'config'
import renderFields from "./fields";
import RenderFieldHelper from "../../../util/render-field-helper";

export default class DefectsTab extends React.Component {
    render() {
        const {loading} = this.props;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {payload} = this.props.defects;
            const validationParams = this.props.defaults.payload;
            const renderHelper = new RenderFieldHelper(renderFields, validationParams);
            const {updatedOn, ...data} = payload;
            const title = "New Open Defects (ECMA CRs)";

            const tooltipTitle = "Tips are";
            const tooltipContent = "Here";

            const isBlocked = !renderHelper.displayOrNot("controls");
            return (
                <CustomCard>
                    <BacklogDefectsPage
                        data={data}
                        header={title}
                        onUpdate={() => alert("Updated")}
                        onCurrentClick={() => alert("Current week")}
                        updatedOn={updatedOn}
                        tooltip={(
                            <TooltipContent
                                title={tooltipTitle}
                                content={tooltipContent}
                            />
                        )}
                        blocked={isBlocked}
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