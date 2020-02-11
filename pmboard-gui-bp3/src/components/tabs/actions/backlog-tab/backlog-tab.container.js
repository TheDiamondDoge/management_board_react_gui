import {connect} from "react-redux";
import {loadBacklogChart, resetBacklog} from "../../../../actions/pws/backlog";
import BacklogTab from "./backlog-tab";

function mapStateToProps(state) {
    return {
        backlog: state.pws.backlogTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadBacklogChart()),
        resetData: () => dispatch(resetBacklog())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BacklogTab);