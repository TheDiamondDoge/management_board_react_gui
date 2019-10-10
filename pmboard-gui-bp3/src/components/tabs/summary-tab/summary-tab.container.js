import { connect } from 'react-redux';
import summaryTab from './summary-tab';
import {loadSummary, resetSummaryState} from "../../../actions/summary-tab";
import {resetMilestonesState} from "../../../actions/milestones";
import {resetHealthState} from "../../../actions/health-indicators";

function mapStateToProps(state) {
    return {
        summaryData: state.summaryTab,
        milestones: state.milestones,
        healthIndicators: state.healthIndicators,
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