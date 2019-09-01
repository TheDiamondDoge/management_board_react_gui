import { connect } from 'react-redux';
import InfoTab from './infoTab';
import {loadInfo, resetState} from "../../../actions/infoTab";

function mapStateToProps(state) {
    return {
        infoData: state.infoTab.data,
        loaded: state.infoTab.loaded,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => (dispatch(loadInfo())),
        resetData: () => (dispatch(resetState()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoTab);