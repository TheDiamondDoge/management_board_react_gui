import { connect } from 'react-redux';
import blcTab from "./blc";
import {blcLoad, blcReset, blcCommentsSave, blcIndicatorsSave} from "../../../actions/pws/blc-tab";
import {withPwsOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        defaults: state.pws.defaults,
        blcTab: state.pws.blcTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: (projectId) => dispatch(blcLoad(projectId)),
        resetData: () => dispatch(blcReset()),
        saveIndicators: (projectId, data) => dispatch(blcIndicatorsSave(projectId, data)),
        saveComments: (projectId, data) => dispatch(blcCommentsSave(projectId, data)),
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withPwsOnMountCall(withPwsTabNameUrlChanger(blcTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);