import { connect } from 'react-redux';
import InfoTab from './info-tab';
import {infoLoad, infoReset, infoSaveData} from "../../../../../actions/pws/info-tab";
import {milestonesLoad, milestonesReset, milestonesSave} from "../../../../../actions/pws/milestones";
import {contribLoad, contribReset} from "../../../../../actions/pws/contrib-list";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../../../util/HOCs";
import {addWarningToast} from "../../../../../actions/app/toaster";

function mapStateToProps(state) {
    return {
        information: state.pws.infoTab,
        milestones: state.pws.milestones,
        contrib: state.pws.contrib,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const {projectId} = ownProps.defaults.payload;
    return {
        saveInfo: (data) => dispatch(infoSaveData(projectId, data)),
        loadData: () => {
            dispatch(infoLoad(projectId));
            dispatch(milestonesLoad(projectId, false));
            dispatch(contribLoad(projectId))
        },
        resetData: () => {
            dispatch(infoReset());
            dispatch(milestonesReset());
            dispatch(contribReset())
        },
        pushWarningToast: (message) => dispatch(addWarningToast(message))
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withOnMountCall(withPwsTabNameUrlChanger(InfoTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);