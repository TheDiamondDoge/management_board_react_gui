import {connect} from 'react-redux';
import {loadReport, resetReport} from "../../../actions/pws/report/report-tab";
import {deleteReportImage, resetReportImages, uploadReportImages} from "../../../actions/pws/report/images";
import ReportTab from "./report-tab";
import {resetRequirements} from "../../../actions/pws/requirements-tab";
import {loadUserReports, resetUserReports, saveUserReport} from "../../../actions/pws/user-reports";
import {withPwsOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";
import {exportPpt} from "../../../actions/pws/ppt-export";
import {milestonesReset} from "../../../actions/pws/milestones";
import {healthReset} from "../../../actions/pws/health-indicators";
import {risksSummaryReset} from "../../../actions/pws/risks/risks-summary";
import {addWarningToast} from "../../../actions/app/toaster";
import {snapshotReset} from "../../../actions/pws/report/snapshots";

function mapStateToProps(state) {
    return {
        defaults: state.pws.defaults,
        report: state.pws.reportTab,
        rqs: state.pws.requirementsTab,
        userReports: state.pws.userReports,
        milestones: state.pws.milestones,
        indicators: state.pws.healthIndicators,
        risks: state.pws.risks.summary,
        pptLoading: state.pws.pptReport.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: (projectId) => dispatch(loadReport(projectId)),
        resetData: () => {
            dispatch(resetReport());
            dispatch(resetReportImages());
            dispatch(snapshotReset());
            dispatch(resetRequirements());
            dispatch(resetUserReports());
            dispatch(milestonesReset());
            dispatch(healthReset());
            dispatch(risksSummaryReset());
        },
        saveData: (projectId, data) => dispatch(saveUserReport(projectId, data)),
        reloadUserReports: (projectId) => dispatch(loadUserReports(projectId)),
        downloadPptReport: (projectId, pptType, snapshotId) => dispatch(exportPpt(projectId, pptType, snapshotId)),
        uploadImages: (files, projectId) => dispatch(uploadReportImages(projectId, files)),
        deleteImage: (filename, projectId) => dispatch(deleteReportImage(projectId, filename)),
        pushWarningToast: (message) => dispatch(addWarningToast(message))
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withPwsOnMountCall(withPwsTabNameUrlChanger(ReportTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);