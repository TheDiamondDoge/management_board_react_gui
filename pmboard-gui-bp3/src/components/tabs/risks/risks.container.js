import {connect} from "react-redux";
import {
    downloadRisks, getLastUploadedRisks,
    loadRisks,
    resetRisks,
    saveRisk,
    setErrorsShowedTrue,
    uploadRisks
} from "../../../actions/pws/risks/risks-tab";
import Risks from "./risks";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        risks: state.pws.risks.tab,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const {projectId} = ownProps.defaults.payload;
    return {
        loadData: () => dispatch(loadRisks(projectId)),
        resetData: () => dispatch(resetRisks()),
        saveRisk: (data) => dispatch(saveRisk(projectId, data)),
        uploadRisksFile: (data) => dispatch(uploadRisks(projectId, data)),
        downloadRisks: (projectName) => dispatch(downloadRisks(projectId, projectName)),
        getLastUploadedFile: (projectName) => dispatch(getLastUploadedRisks(projectId, projectName)),
        setErrorsShowedTrue: () => dispatch(setErrorsShowedTrue())
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withOnMountCall(withPwsTabNameUrlChanger(Risks), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);