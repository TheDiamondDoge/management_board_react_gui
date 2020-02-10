import {connect} from 'react-redux';
import {loadRequirements, resetRequirements} from "../../../actions/pws/requirements-tab";
import Requirements from "./requirements-tab";

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

export default connect(mapStateToProps, mapDispatchToProps)(Requirements);