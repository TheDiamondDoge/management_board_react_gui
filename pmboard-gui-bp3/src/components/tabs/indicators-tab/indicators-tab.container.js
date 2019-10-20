import {connect} from 'react-redux';
import IndicatorsTab from "./indicators-tab";
import {loadIndicators} from "../../../actions/indicators-tab";
import {resetMilestonesState} from "../../../actions/milestones";
import {resetHealthState, saveHealthIndicators} from "../../../actions/health-indicators";
import {indicatorsRqsResetState} from "../../../actions/indicators-rqs";
import {milestonesKpiResetState} from "../../../actions/milestones-kpi";
import {dr4KpiResetState} from "../../../actions/dr4-kpi";
import {qualityKpiResetState} from "../../../actions/quality-kpi";

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