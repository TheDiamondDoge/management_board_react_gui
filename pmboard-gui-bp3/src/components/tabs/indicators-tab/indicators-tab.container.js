import {connect} from 'react-redux';
import IndicatorsTab from "./indicators-tab";
import {loadIndicators} from "../../../actions/indicators-tab";

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
        loadData: () => dispatch(loadIndicators())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndicatorsTab);