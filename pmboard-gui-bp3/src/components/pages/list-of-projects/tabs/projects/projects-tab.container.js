import {connect} from 'react-redux';
import {loadProjects, resetProjects} from "../../../../../actions/pws/projects-list";
import ProjectsTab from "./projects-tab";
import {withOnMountCall} from "../../../../../util/HOCs";

function mapStateToProps(state) {
    return {
        projectsList: state.pws.projectsList
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const status = ownProps.workspaceStatus ? ownProps.workspaceStatus : null;
    const isEpm = !!ownProps.epm;
    return {
        loadData: () => dispatch(loadProjects(isEpm, status)),
        resetData: () => dispatch(resetProjects()),
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withOnMountCall(ProjectsTab, executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);