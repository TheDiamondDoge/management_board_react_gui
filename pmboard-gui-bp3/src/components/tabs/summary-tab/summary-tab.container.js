import { connect } from 'react-redux';
import summaryTab from './summary-tab';
import {loadSummary, resetSummaryState} from "../../../actions/summary-tab";

function mapStateToProps(state) {
    return {
        summaryData: state.summaryTab.summaryData,
        milestones: state.milestones,
        healthIndicators: state.healthIndicators,
        loaded: state.summaryTab.loaded,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadSummary("Hi, some tests right here!")),
        resetData: () => dispatch(resetSummaryState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(summaryTab);