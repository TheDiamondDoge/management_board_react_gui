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
import {withPwsOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state){
    return {
        defaults: state.pws.defaults,
        milestones: state.pws.milestones,
        healthIndicators: state.pws.healthIndicators,
        requirements: state.pws.indicatorsRqs,
        milestonesKpi: state.pws.milestonesKpi,
        dr4Kpi: state.pws.dr4kpi,
        qualityKpi: state.pws.qualityKpi
    }
}

function mapDispatchToProps(dispatch) {
    return {
        healthIndicatorsSubmit: (projectId, data) => dispatch(healthIndicatorsSave(projectId, data)),
        healthCommentsSubmit: (projectId, data) => dispatch(healthCommentsSave(projectId, data)),
        healthReload: (projectId) => dispatch(healthLoad(projectId)),
        rqsSubmit: (projectId, data) => dispatch(indicatorsRqsSave(projectId, data)),
        rqsReload: (projectId) => dispatch(indicatorsRqsLoad(projectId)),
        qualitySubmit: (projectId, data) => dispatch(qualityKpiSave(projectId, data)),
        qualityReload: (projectId) => dispatch(qualityKpiLoad(projectId)),
        loadData: (projectId) => dispatch(indicatorsLoad(projectId)),
        resetState: () => {
            dispatch(milestonesReset());
            dispatch(healthReset());
            dispatch(indicatorsRqsReset());
            dispatch(milestonesKpiReset());
            dispatch(dr4KpiReset());
            dispatch(qualityKpiReset());
        }
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetState",
};

const ConnectedComponent = withPwsOnMountCall(withPwsTabNameUrlChanger(IndicatorsTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);