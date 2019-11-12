import { connect } from 'react-redux';
import InfoTab from './info-tab';
import {loadInfo, resetState, saveInfoData} from "../../../actions/info-tab";
import {resetMilestonesState, saveMilestones} from "../../../actions/milestones";

function mapStateToProps(state) {
    return {
        information: state.pws.infoTab,
        milestones: state.pws.milestones,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveInfo: (data) => dispatch(saveInfoData(data)),
        saveMilestones: (date) => dispatch(saveMilestones(date)),
        loadData: () => (dispatch(loadInfo())),
        resetData: () => {
            dispatch(resetState());
            dispatch(resetMilestonesState());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoTab);