import { connect } from 'react-redux';
import summaryTab from './summary-tab';
import {loadSummary, resetSummaryState} from "../../../actions/pws/summary-tab";
import {resetMilestonesState} from "../../../actions/pws/milestones";
import {resetHealthState} from "../../../actions/pws/health-indicators";

function mapStateToProps(state) {
    return {
        summaryData: state.pws.summaryTab,
        milestones: state.pws.milestones,
        healthIndicators: state.pws.healthIndicators,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadSummary("Hi, some tests right here!")),
        resetData: () => {
            dispatch(resetSummaryState());
            dispatch(resetMilestonesState());
            dispatch(resetHealthState())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(summaryTab);