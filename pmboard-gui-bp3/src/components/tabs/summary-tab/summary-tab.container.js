import { connect } from 'react-redux';
import summaryTab from './summary-tab';
import {loadSummary, resetState} from "../../../actions/summary-tab";

function mapStateToProps(state) {
    return {
        summaryData: state.summaryTab.summaryData,
        loaded: state.summaryTab.loaded,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadSummary()),
        resetData: () => dispatch(resetState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(summaryTab);