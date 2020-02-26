import { connect } from 'react-redux';
import {loadProjectDefaults, resetProjectDefaults} from "../../../actions/pws/default";
import PWS from "./pws";
import {withOnMountCall} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        defaults: state.pws.defaults
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadProjectDefaults()),
        resetData: () => dispatch(resetProjectDefaults())
    }
}

const conf = {
    onMount: "loadData",
    onUnmount: "resetData",
};

export default connect(mapStateToProps, mapDispatchToProps)(withOnMountCall(PWS, conf));