import {connect} from "react-redux";
import CostTab from "./cost-tab";
import {costLoad, costReset} from "../../../actions/pws/cost-tab";

function mapStateToProps(state) {
    return {
        cost: state.pws.costTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(costLoad()),
        resetData: () => dispatch(costReset()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CostTab);