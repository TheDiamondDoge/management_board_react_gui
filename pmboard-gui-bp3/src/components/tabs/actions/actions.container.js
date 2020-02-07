import {connect} from 'react-redux';
import {actionsLoad, actionsReset, actionSave, actionDelete} from "../../../actions/pws/actions-tab";
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
        saveAction: (data) => {
            dispatch(actionSave(data))
        },
        deleteAction: (uid) => {
            dispatch(actionDelete(uid))
        },
        loadFilters: () => {
            dispatch(loadRiskIds())
        },
        loadData: () => dispatch(actionsLoad()),
        resetData: () => dispatch(actionsReset()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions);