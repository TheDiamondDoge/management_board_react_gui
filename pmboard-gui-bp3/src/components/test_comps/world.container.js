import {connect} from 'react-redux';
import World from './world';
import {testSuccess, testFailure} from "../../actions/test";

function mapStateToProps(state) {
    return {
        test: state.test.test,
        testPassed: state.test.testPassed,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick1: () => dispatch(testSuccess()),
        onClick2: () => dispatch(testFailure()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(World);