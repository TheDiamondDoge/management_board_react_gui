import {connect} from "react-redux";
import {loadBacklogChart, resetBacklog} from "../../../actions/pws/backlog";
import BacklogTab from "./backlog-tab";
import {withPwsOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        defaults: state.pws.defaults,
        backlog: state.pws.backlogTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: (projectId) => dispatch(loadBacklogChart(projectId)),
        resetData: () => dispatch(resetBacklog())
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withPwsOnMountCall(withPwsTabNameUrlChanger(BacklogTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);