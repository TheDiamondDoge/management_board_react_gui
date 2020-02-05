import { connect } from 'react-redux';
import summaryTab from './summary-tab';
import {summaryLoad, summaryReset} from "../../../actions/pws/summary-tab";
import {milestonesReset} from "../../../actions/pws/milestones";
import {healthReset} from "../../../actions/pws/health-indicators";

function mapStateToProps(state) {
    return {
        summaryData: state.pws.summaryTab,
        milestones: state.pws.milestones,
        healthIndicators: state.pws.healthIndicators,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(summaryLoad("Hi, some tests right here!")),
        resetData: () => {
            dispatch(summaryReset());
            dispatch(milestonesReset());
            dispatch(healthReset())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(summaryTab);