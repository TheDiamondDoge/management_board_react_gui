import { connect } from 'react-redux';
import InfoTab from './infoTab';
import {editData, loadInfo, resetState} from "../../../actions/info-tab";

function mapStateToProps(state) {
    return {
        general: state.infoTab.general,
        milestones: state.infoTab.milestones,
        urls: state.infoTab.urls,
        validationParams: state.infoTab.validationParams,
        loaded: state.infoTab.loaded,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => (dispatch(loadInfo())),
        resetData: () => (dispatch(resetState())),
        onChangeGeneral: (obj, id) => (dispatch(editData(obj, id)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoTab);