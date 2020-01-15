import {connect} from 'react-redux';
import {loadActions, resetState} from "../../../actions/pws/actions-tab";
import Actions from "./actions";

function mapStateToProps(state) {
    return {
        actions: state.pws.actions,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadActions()),
        resetData: () => dispatch(resetState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions);