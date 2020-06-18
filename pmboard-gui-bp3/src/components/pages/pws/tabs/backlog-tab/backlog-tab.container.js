import {connect} from "react-redux";
import {loadBacklogChart, resetBacklog} from "../../../../../actions/pws/backlog";
import BacklogTab from "./backlog-tab";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../../../util/HOCs";

function mapStateToProps(state) {
    return {
        backlog: state.pws.backlogTab,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const {projectId} = ownProps.defaults.payload;
    return {
        loadData: () => dispatch(loadBacklogChart(projectId)),
        resetData: () => dispatch(resetBacklog())
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withOnMountCall(withPwsTabNameUrlChanger(BacklogTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);