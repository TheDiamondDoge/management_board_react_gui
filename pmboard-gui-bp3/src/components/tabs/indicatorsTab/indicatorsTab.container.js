import {connect} from 'react-redux';
import IndicatorsTab from "./indicatorsTab";
import {loadIndicators, resetState} from "../../../actions/indicators-tab";

function mapStateToProps(state){

}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => dispatch(loadIndicators())
    }
}

export default connect(()=>({}), mapDispatchToProps)(IndicatorsTab);