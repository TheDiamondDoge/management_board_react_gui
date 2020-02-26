import {connect} from 'react-redux';
import {actionsLoad, actionsReset, actionSave, actionDelete} from "../../../actions/pws/actions-tab";
import {loadRiskIds} from "../../../actions/pws/risks-tab";
import Actions from "./actions";
import {withOnMountCall} from "../../../util/HOCs";

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
        loadData: () => {
            dispatch(actionsLoad());
            dispatch(loadRiskIds());
        },
        resetData: () => dispatch(actionsReset()),
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

export default connect(mapStateToProps, mapDispatchToProps)(withOnMountCall(Actions)(executeMethodsConfig));