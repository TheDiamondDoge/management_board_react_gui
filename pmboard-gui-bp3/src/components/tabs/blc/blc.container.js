import { connect } from 'react-redux';
import blcTab from "./blc";
import {loadBlc, resetState, saveBlc} from "../../../actions/blc-tab";

function mapStateToProps(state) {
    return {
        blcTab: state.pws.blcTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadBlc()),
        resetData: () => dispatch(resetState()),
        saveData: (data, saveType) => dispatch(saveBlc(data, saveType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(blcTab)