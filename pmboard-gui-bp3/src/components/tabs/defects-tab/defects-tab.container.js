import {connect} from 'react-redux';
import DefectsTab from "./defects-tab";
import {loadDefectsChart, resetDefects} from "../../../actions/pws/defects";

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

export default connect(mapStateToProps, mapDispatchToProps)(DefectsTab);