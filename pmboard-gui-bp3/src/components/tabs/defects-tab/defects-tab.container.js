import {connect} from 'react-redux';
import DefectsTab from "./defects-tab";
import {loadDefectsChart, resetDefects} from "../../../actions/pws/defects";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        defects: state.pws.defectsTab,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const {projectId} = ownProps.defaults.payload;
    return {
        loadData: () => dispatch(loadDefectsChart(projectId)),
        resetData: () => dispatch(resetDefects())
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withOnMountCall(withPwsTabNameUrlChanger(DefectsTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);