import {connect} from 'react-redux';
import {actionsLoad, actionsReset, actionSave, actionDelete} from "../../../actions/pws/actions-tab";
import Actions from "./actions";
import {withPwsOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";
import {loadRiskIds, riskIdsReset} from "../../../actions/pws/risks/risks-related";

function mapStateToProps(state) {
    return {
        defaults: state.pws.defaults,
        actions: state.pws.actions,
        relatedRisks: state.pws.risks.related,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveAction: (projectId, data) => {
            dispatch(actionSave(projectId, data))
        },
        deleteAction: (projectId, uid) => {
            dispatch(actionDelete(projectId, uid))
        },
        loadData: (projectId) => {
            dispatch(actionsLoad(projectId));
            dispatch(loadRiskIds(projectId));
        },
        resetData: () => {
            dispatch(actionsReset());
            dispatch(riskIdsReset())
        },
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withPwsOnMountCall(withPwsTabNameUrlChanger(Actions), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);