import {connect} from "react-redux";
import {loadRisks, resetState, saveRisk} from "../../../actions/pws/risks-tab";
import Risks from "./risks";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

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

const ConnectedComponent = withOnMountCall(withPwsTabNameUrlChanger(Risks), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);