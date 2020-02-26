import {connect} from "react-redux";
import CostTab from "./cost-tab";
import {costLoad, costReset} from "../../../actions/pws/cost-tab";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

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

const ConnectedComponent = withOnMountCall(withPwsTabNameUrlChanger(CostTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);