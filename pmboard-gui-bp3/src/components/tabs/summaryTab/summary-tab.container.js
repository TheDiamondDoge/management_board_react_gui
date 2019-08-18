import { connect } from 'react-redux';
import summaryTab from './summaryTab';
import {loadSummary} from "../../../actions/summaryTab";

function mapStateToProps(state) {
    return {
        summaryData: state.summaryTab.summaryData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadSummary())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(summaryTab);