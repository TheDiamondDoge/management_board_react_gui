import {connect} from 'react-redux';
import IndicatorsTab from "./indicators-tab";
import {loadIndicators} from "../../../actions/pws/indicators-tab";
import {resetMilestonesState} from "../../../actions/pws/milestones";
import {
    loadHealth,
    resetHealthState,
    saveHealthComments,
    saveHealthIndicators
} from "../../../actions/pws/health-indicators";
import {indicatorsRqsResetState, indicatorsRqsSave, loadIndicatorsRqs} from "../../../actions/pws/indicators-rqs";
import {milestonesKpiResetState} from "../../../actions/pws/milestones-kpi";
import {dr4KpiResetState} from "../../../actions/pws/dr4-kpi";
import {loadQualityKpi, qualityKpiResetState, qualityKpiSave} from "../../../actions/pws/quality-kpi";

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

function mapDispatchToProps(dispatch) {
    return {
        healthIndicatorsSubmit: (data) => dispatch(saveHealthIndicators(data)),
        healthCommentsSubmit: (data) => dispatch(saveHealthComments(data)),
        healthReload: () => dispatch(loadHealth()),
        rqsSubmit: (data) => dispatch(indicatorsRqsSave(data)),
        rqsReload: () => dispatch(loadIndicatorsRqs()),
        qualitySubmit: (data) => dispatch(qualityKpiSave(data)),
        qualityReload: () => dispatch(loadQualityKpi()),
        loadData: () => dispatch(loadIndicators()),
        resetState: () => {
            dispatch(resetMilestonesState());
            dispatch(resetHealthState());
            dispatch(indicatorsRqsResetState());
            dispatch(milestonesKpiResetState());
            dispatch(dr4KpiResetState());
            dispatch(qualityKpiResetState());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndicatorsTab);