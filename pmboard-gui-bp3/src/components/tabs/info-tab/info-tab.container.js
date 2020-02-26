import { connect } from 'react-redux';
import InfoTab from './info-tab';
import {infoLoad, infoReset, infoSaveData} from "../../../actions/pws/info-tab";
import {milestonesLoad, milestonesReset, milestonesSave} from "../../../actions/pws/milestones";
import {contribLoad, contribReset} from "../../../actions/pws/contrib-list";
import {withPwsOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        information: state.pws.infoTab,
        milestones: state.pws.milestones,
        contrib: state.pws.contrib,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveInfo: (data) => dispatch(infoSaveData(data)),
        saveMilestones: (date) => dispatch(milestonesSave(date)),
        loadData: () => {
            dispatch(infoLoad());
            dispatch(milestonesLoad());
            dispatch(contribLoad())
        },
        resetData: () => {
            dispatch(infoReset());
            dispatch(milestonesReset());
            dispatch(contribReset())
        },
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withPwsOnMountCall(withPwsTabNameUrlChanger(InfoTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);