import {connect} from 'react-redux';
import IndicatorsTab from "./indicators-tab";
import {indicatorsLoad} from "../../../actions/pws/indicators-tab";
import {milestonesReset} from "../../../actions/pws/milestones";
import {
    healthLoad,
    healthReset,
    healthCommentsSave,
    healthIndicatorsSave
} from "../../../actions/pws/health-indicators";
import {indicatorsRqsReset, indicatorsRqsSave, indicatorsRqsLoad} from "../../../actions/pws/indicators-rqs";
import {milestonesKpiReset} from "../../../actions/pws/milestones-kpi";
import {dr4KpiReset} from "../../../actions/pws/dr4-kpi";
import {qualityKpiLoad, qualityKpiReset, qualityKpiSave} from "../../../actions/pws/quality-kpi";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";
import {addWarningToast} from "../../../actions/app/toaster";

function mapStateToProps(state){
    return {
        milestones: state.pws.milestones,
        healthIndicators: state.pws.healthIndicators,
        requirements: state.pws.indicatorsRqs,
        milestonesKpi: state.pws.milestonesKpi,
        dr4Kpi: state.pws.dr4kpi,
        qualityKpi: state.pws.qualityKpi
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const {projectId} = ownProps.defaults.payload;
    return {
        healthIndicatorsSubmit: (data) => dispatch(healthIndicatorsSave(projectId, data)),
        healthCommentsSubmit: (data) => dispatch(healthCommentsSave(projectId, data)),
        healthReload: () => dispatch(healthLoad(projectId)),
        rqsSubmit: (data) => dispatch(indicatorsRqsSave(projectId, data)),
        rqsReload: () => dispatch(indicatorsRqsLoad(projectId)),
        qualitySubmit: (data) => dispatch(qualityKpiSave(projectId, data)),
        qualityReload: () => dispatch(qualityKpiLoad(projectId)),
        loadData: () => dispatch(indicatorsLoad(projectId)),
        resetState: () => {
            dispatch(milestonesReset());
            dispatch(healthReset());
            dispatch(indicatorsRqsReset());
            dispatch(milestonesKpiReset());
            dispatch(dr4KpiReset());
            dispatch(qualityKpiReset());
        },
        pushWarningToast: (message) => dispatch(addWarningToast(message))
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetState",
};

const ConnectedComponent = withOnMountCall(withPwsTabNameUrlChanger(IndicatorsTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);