import {connect} from 'react-redux';
import {loadActions, resetState} from "../../../actions/pws/actions-tab";
import {loadRiskIds} from "../../../actions/pws/risks-tab";
import Actions from "./actions";

function mapStateToProps(state) {
    return {
        actions: state.pws.actions,
        relatedRisks: state.pws.risks.riskIDs,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadFilters: () => {
            dispatch(loadRiskIds())
        },
        loadData: () => dispatch(loadActions()),
        resetData: () => dispatch(resetState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions);