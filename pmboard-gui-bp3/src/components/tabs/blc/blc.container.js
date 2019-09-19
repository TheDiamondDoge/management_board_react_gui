import { connect } from 'react-redux';
import blcTab from "./blc";
import {editRowValue, loadBlc, resetState} from "../../../actions/blc-tab";

function mapStateToProps(state) {
    return {
        pm: state.blcTab.pm,
        pmo: state.blcTab.pmo,
        sales: state.blcTab.sales,
        loaded: state.blcTab.loaded,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadBlc()),
        resetData: () => dispatch(resetState()),
        onRowValuesChange: (propKey, key, value) => dispatch(editRowValue({propKey, key, value}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(blcTab)