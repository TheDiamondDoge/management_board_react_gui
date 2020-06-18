import { connect } from 'react-redux';
import blcTab from "./blc";
import {blcLoad, blcReset, blcCommentsSave, blcIndicatorsSave} from "../../../../../actions/pws/blc-tab";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../../../util/HOCs";
import {addWarningToast} from "../../../../../actions/app/toaster";

function mapStateToProps(state) {
    return {
        blcTab: state.pws.blcTab,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const {projectId} = ownProps.defaults.payload;
    return {
        loadData: () => dispatch(blcLoad(projectId)),
        resetData: () => dispatch(blcReset()),
        saveIndicators: (data) => dispatch(blcIndicatorsSave(projectId, data)),
        saveComments: (data) => dispatch(blcCommentsSave(projectId, data)),
        pushWarningToast: (message) => dispatch(addWarningToast(message))
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withOnMountCall(withPwsTabNameUrlChanger(blcTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);