import { connect } from 'react-redux';
import InfoTab from './info-tab';
import {loadInfo, resetState, saveInfoData} from "../../../actions/info-tab";
import {loadMilestones, resetMilestonesState, saveMilestones} from "../../../actions/milestones";
import {loadContrib, resetContrib} from "../../../actions/contrib-projects";

function mapStateToProps(state) {
    return {
        information: state.pws.infoTab,
        milestones: state.pws.milestones,
        contrib: state.pws.contrib,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveInfo: (data) => dispatch(saveInfoData(data)),
        saveMilestones: (date) => dispatch(saveMilestones(date)),
        loadData: () => {
            dispatch(loadInfo());
            dispatch(loadMilestones());
            dispatch(loadContrib())
        },
        resetData: () => {
            dispatch(resetState());
            dispatch(resetMilestonesState());
            dispatch(resetContrib())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoTab);