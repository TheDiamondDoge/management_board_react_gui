import { connect } from 'react-redux';
import summaryTab from './summary-tab';
import {summaryLoad, summaryReset} from "../../../actions/pws/summary-tab";
import {milestonesReset} from "../../../actions/pws/milestones";
import {healthReset} from "../../../actions/pws/health-indicators";
import {exportContribTable, loadContribTable, resetContribTable} from "../../../actions/pws/contrib-table";
import {withPwsOnMountCall, withPwsTabNameUrlChanger} from "../../../util/HOCs";

function mapStateToProps(state) {
    return {
        defaults: state.pws.defaults,
        summaryData: state.pws.summaryTab,
        milestones: state.pws.milestones,
        healthIndicators: state.pws.healthIndicators,
        contribTable: state.pws.contribTable
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: (projectId) => {
            dispatch(summaryLoad(projectId));
            dispatch(loadContribTable(projectId));
        },
        resetData: () => {
            dispatch(summaryReset());
            dispatch(milestonesReset());
            dispatch(healthReset());
            dispatch(resetContribTable());
        },
        onContribExport: (projectId, projectName) => dispatch(exportContribTable(projectId, projectName))
    }
}

const executeMethodsConfig = {
    onMount: "loadData",
    onUnmount: "resetData",
};

const ConnectedComponent = withPwsOnMountCall(withPwsTabNameUrlChanger(summaryTab), executeMethodsConfig);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);