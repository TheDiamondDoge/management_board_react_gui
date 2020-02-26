import { connect } from 'react-redux';
import blcTab from "./blc";
import {blcLoad, blcReset, blcCommentsSave, blcIndicatorsSave} from "../../../actions/pws/blc-tab";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        blcTab: state.pws.blcTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(blcLoad()),
        resetData: () => dispatch(blcReset()),
        saveIndicators: (data) => dispatch(blcIndicatorsSave(data)),
        saveComments: (data) => dispatch(blcCommentsSave(data)),
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withOnMountCall(
    withPwsTabNameUrlChanger(blcTab)
)(executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);