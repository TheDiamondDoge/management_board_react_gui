import {connect} from "react-redux";
import CostTab from "./cost-tab";
import {costLoad, costReset, costUpload} from "../../../actions/pws/cost-tab";
import {withPwsOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        defaults: state.pws.defaults,
        cost: state.pws.costTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: (projectId) => dispatch(costLoad(projectId)),
        uploadCost: (projectId, file) => dispatch(costUpload(projectId, file)),
        resetData: () => dispatch(costReset()),
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withPwsOnMountCall(withPwsTabNameUrlChanger(CostTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);