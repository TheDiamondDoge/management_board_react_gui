import { connect } from 'react-redux';
import summaryTab from './summary-tab';
import {summaryLoad, summaryReset} from "../../../actions/pws/summary-tab";
import {milestonesReset} from "../../../actions/pws/milestones";
import {healthReset} from "../../../actions/pws/health-indicators";
import {loadContribTable, resetContribTable} from "../../../actions/pws/contrib-table";
import {withOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        summaryData: state.pws.summaryTab,
        milestones: state.pws.milestones,
        healthIndicators: state.pws.healthIndicators,
        contribTable: state.pws.contribTable
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => {
            dispatch(summaryLoad());
            dispatch(loadContribTable());
        },
        resetData: () => {
            dispatch(summaryReset());
            dispatch(milestonesReset());
            dispatch(healthReset());
            dispatch(resetContribTable());
        },
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withOnMountCall(withPwsTabNameUrlChanger(summaryTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);