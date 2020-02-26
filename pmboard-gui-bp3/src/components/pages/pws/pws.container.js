import { connect } from 'react-redux';
import {loadProjectDefaults, resetProjectDefaults} from "../../../actions/pws/default";
import PWS from "./pws";
import {withPwsOnMountCall} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        defaults: state.pws.defaults
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: (projectId) => dispatch(loadProjectDefaults(projectId)),
        resetData: () => dispatch(resetProjectDefaults())
    }
}

const conf = {
    onUnmount: "resetData",
};

export default connect(mapStateToProps, mapDispatchToProps)(withPwsOnMountCall(PWS, conf));