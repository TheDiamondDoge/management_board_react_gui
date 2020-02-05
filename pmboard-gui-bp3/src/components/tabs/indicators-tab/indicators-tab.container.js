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
        healthIndicatorsSubmit: (data) => dispatch(healthIndicatorsSave(data)),
        healthCommentsSubmit: (data) => dispatch(healthCommentsSave(data)),
        healthReload: () => dispatch(healthLoad()),
        rqsSubmit: (data) => dispatch(indicatorsRqsSave(data)),
        rqsReload: () => dispatch(indicatorsRqsLoad()),
        qualitySubmit: (data) => dispatch(qualityKpiSave(data)),
        qualityReload: () => dispatch(qualityKpiLoad()),
        loadData: () => dispatch(indicatorsLoad()),
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

export default connect(mapStateToProps, mapDispatchToProps)(IndicatorsTab);