import {connect} from "react-redux";
import {loadRisks, resetState, saveRisk} from "../../../actions/pws/risks-tab";
import Risks from "./risks";

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

export default connect(mapStateToProps, mapDispatchToProps)(Risks);