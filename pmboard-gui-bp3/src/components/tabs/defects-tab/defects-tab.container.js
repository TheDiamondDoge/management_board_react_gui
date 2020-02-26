import {connect} from 'react-redux';
import DefectsTab from "./defects-tab";
import {loadDefectsChart, resetDefects} from "../../../actions/pws/defects";
import {withOnMountCall} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        defects: state.pws.defectsTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadDefectsChart()),
        resetData: () => dispatch(resetDefects())
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

export default connect(mapStateToProps, mapDispatchToProps)(withOnMountCall(DefectsTab)(executeMethodsConfig));