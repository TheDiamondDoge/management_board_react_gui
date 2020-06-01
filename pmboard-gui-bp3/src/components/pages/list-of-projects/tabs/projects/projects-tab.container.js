import {connect} from 'react-redux';
import {loadProjects, resetProjects} from "../../../../../actions/pws/projects-list";
import {WorkspaceStatus} from "../../../../../util/constants";
import ProjectsTab from "./projects-tab";

function mapStateToProps(state) {
    return {
        projectsList: state.pws.projectsList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLoad: () => dispatch(loadProjects(false, WorkspaceStatus.ENABLED)),
        onReset: () => dispatch(resetProjects()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsTab);