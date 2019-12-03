import { connect } from 'react-redux';
import blcTab from "./blc";
import {loadBlc, resetState, saveBlcComments, saveBlcIndicators} from "../../../actions/blc-tab";

function mapStateToProps(state) {
    return {
        blcTab: state.pws.blcTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadBlc()),
        resetData: () => dispatch(resetState()),
        saveIndicators: (data) => dispatch(saveBlcIndicators(data)),
        saveComments: (data) => dispatch(saveBlcComments(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(blcTab)