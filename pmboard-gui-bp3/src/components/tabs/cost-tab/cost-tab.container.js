import {connect} from "react-redux";
import CostTab from "./cost-tab";
import {costLoad, costReset} from "../../../actions/pws/cost-tab";
import {withOnMountCall} from "../../../util/HOCs";

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

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

export default connect(mapStateToProps, mapDispatchToProps)(withOnMountCall(CostTab)(executeMethodsConfig));