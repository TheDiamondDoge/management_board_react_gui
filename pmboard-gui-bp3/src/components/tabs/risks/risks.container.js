import {connect} from "react-redux";
import {loadRisks, resetState} from "../../../actions/risks-tab";
import Risks from "./risks";

function mapStateToProps(state) {
    return {
        risks: state.pws.risks,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadRisks()),
        resetData: () => dispatch(resetState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Risks);