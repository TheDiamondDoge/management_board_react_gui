import {connect} from 'react-redux';
import {loadReport, resetReport} from "../../../actions/pws/report-tab";
import ReportTab from "./report-tab";
import {resetRequirements} from "../../../actions/pws/requirements-tab";
import {loadUserReports, resetUserReports, saveUserReport} from "../../../actions/pws/user-reports";
import {withPwsOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        defaults: state.pws.defaults,
        report: state.pws.reportTab,
        rqs: state.pws.requirementsTab,
        userReports: state.pws.userReports
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: (projectId) => dispatch(loadReport(projectId)),
        resetData: () => {
            dispatch(resetReport());
            dispatch(resetRequirements());
            dispatch(resetUserReports())
        },
        saveData: (projectId, data) => dispatch(saveUserReport(projectId, data)),
        reloadUserReports: (projectId) => dispatch(loadUserReports(projectId))
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withPwsOnMountCall(withPwsTabNameUrlChanger(ReportTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);