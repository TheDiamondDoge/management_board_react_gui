import {connect} from 'react-redux';
import {loadRequirements, resetRequirements} from "../../../actions/pws/requirements-tab";
import Requirements from "./requirements-tab";
import {withPwsOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        rqs: state.pws.requirementsTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadRequirements()),
        resetData: () => dispatch(resetRequirements())
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withPwsOnMountCall(withPwsTabNameUrlChanger(Requirements), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);