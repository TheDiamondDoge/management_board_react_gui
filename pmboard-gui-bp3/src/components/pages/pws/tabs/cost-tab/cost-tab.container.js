import {connect} from "react-redux";
import CostTab from "./cost-tab";
import {costGetLastUploaded, costLoad, costReset, costUpload} from "../../../../../actions/pws/cost-tab";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../../../util/HOCs";

function mapStateToProps(state) {
    return {
        cost: state.pws.costTab,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const {projectId} = ownProps.defaults.payload;
    return {
        loadData: () => dispatch(costLoad(projectId)),
        uploadCost: (file) => dispatch(costUpload(projectId, file)),
        getLastUploadedFile: (projectName) => dispatch(costGetLastUploaded(projectId, projectName)),
        resetData: () => dispatch(costReset()),
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withOnMountCall(withPwsTabNameUrlChanger(CostTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);