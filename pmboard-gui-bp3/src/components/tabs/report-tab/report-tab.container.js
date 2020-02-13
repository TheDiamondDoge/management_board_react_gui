import {connect} from 'react-redux';
import {loadReport, resetReport} from "../../../actions/pws/report-tab";
import ReportTab from "./report-tab";

function mapStateToProps(state) {
    return {
        report: state.pws.reportTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadReport()),
        resetData: () => dispatch(resetReport())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportTab)