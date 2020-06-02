import {connect} from 'react-redux';
import {loadProjects, resetProjects} from "../../../../../actions/pws/projects-list";
import {WorkspaceStatus} from "../../../../../util/constants";
import ProjectsTab from "./projects-tab";
import {withOnMountCall} from "../../../../../util/HOCs";

function mapStateToProps(state) {
    return {
        projectsList: state.pws.projectsList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadProjects(false, WorkspaceStatus.ENABLED)),
        resetData: () => dispatch(resetProjects()),
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withOnMountCall(ProjectsTab, executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);