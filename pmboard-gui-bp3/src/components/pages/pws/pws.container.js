import { connect } from 'react-redux';
import {loadProjectDefaults, resetProjectDefaults} from "../../../actions/pws/default";
import PWS from "./pws";

function mapStateToProps(state) {
    return {
        defaults: state.pws.defaults
    }
}

function mapDispatchToProps(dispatch, x) {
    return {
        loadData: (projectId) => dispatch(loadProjectDefaults(projectId)),
        resetData: () => dispatch(resetProjectDefaults())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PWS);