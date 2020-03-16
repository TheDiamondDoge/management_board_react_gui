import {connect} from "react-redux";
import {loadRisks, resetState, saveRisk, setErrorsShowedTrue, uploadRisks} from "../../../actions/pws/risks-tab";
import Risks from "./risks";
import {withPwsOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        defaults: state.pws.defaults,
        risks: state.pws.risks,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: (projectId) => dispatch(loadRisks(projectId)),
        resetData: () => dispatch(resetState()),
        saveRisk: (projectId, data) => dispatch(saveRisk(projectId, data)),
        uploadRisksFile: (projectId, data) => dispatch(uploadRisks(projectId, data)),
        setErrorsShowedTrue: () => dispatch(setErrorsShowedTrue())
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withPwsOnMountCall(withPwsTabNameUrlChanger(Risks), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);