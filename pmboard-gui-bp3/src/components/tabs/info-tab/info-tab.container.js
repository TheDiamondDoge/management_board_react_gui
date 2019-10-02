import { connect } from 'react-redux';
import InfoTab from './info-tab';
import {editGeneralData, editMilestoneData, loadInfo, resetState} from "../../../actions/info-tab";

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
        onChangeGeneral: (obj, id) => (dispatch(editGeneralData(obj, id))),
        onChangeMilestones: (obj, id) => (dispatch(editMilestoneData(obj, id)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoTab);