import { connect } from 'react-redux';
import summaryTab from './summaryTab';
import {loadSummary, resetState} from "../../../actions/summaryTab";

function mapStateToProps(state) {
    console.log("MAPPING STATE", state)
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