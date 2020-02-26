import {connect} from "react-redux";
import {loadRisks, resetState, saveRisk} from "../../../actions/pws/risks-tab";
import Risks from "./risks";
import {withOnMountCall} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        risks: state.pws.risks,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadRisks()),
        resetData: () => dispatch(resetState()),
        saveRisk: (data) => dispatch(saveRisk(data))
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

export default connect(mapStateToProps, mapDispatchToProps)(withOnMountCall(Risks)(executeMethodsConfig));