import {connect} from 'react-redux';
import {actionsLoad, actionsReset, actionSave, actionDelete, actionsExport} from "../../../actions/pws/actions-tab";
import Actions from "./actions";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";
import {loadRiskIds, riskIdsReset} from "../../../actions/pws/risks/risks-related";
import {addWarningToast} from "../../../actions/app/toaster";

function mapStateToProps(state) {
    return {
        actions: state.pws.actions,
        relatedRisks: state.pws.risks.related,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const {projectId} = ownProps.defaults.payload;
    return {
        saveAction: (data) => {
            dispatch(actionSave(projectId, data))
        },
        deleteAction: (uid) => {
            dispatch(actionDelete(projectId, uid))
        },
        exportActions: (projectName) => {
            dispatch(actionsExport(projectId, projectName))
        },
        loadData: () => {
            dispatch(actionsLoad(projectId));
            dispatch(loadRiskIds(projectId));
        },
        resetData: () => {
            dispatch(actionsReset());
            dispatch(riskIdsReset())
        },
        pushWarningToast: (message) => dispatch(addWarningToast(message))
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withOnMountCall(withPwsTabNameUrlChanger(Actions), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);