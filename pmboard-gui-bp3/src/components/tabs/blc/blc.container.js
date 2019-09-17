import { connect } from 'react-redux';
import blcTab from "./blc";
import {loadBlc} from "../../../actions/blc-tab";

function mapStateToProps(state) {
    return {
        blcData: state.blcTab.data,
        loaded: state.blcTab.loaded,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadBlc()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(blcTab)