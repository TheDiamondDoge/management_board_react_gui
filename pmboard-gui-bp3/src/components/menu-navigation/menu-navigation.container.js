import {connect} from "react-redux";
import {toggleLeftMenuExpanded} from "../../actions/app/app-settings";
import MenuNavigation from "./menu-navigation";

function mapStateToProps(state) {
    return {
        isNavMenuExpanded: state.app.appSettings.isNavMenuExpanded,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleMenuClick: () => dispatch(toggleLeftMenuExpanded())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuNavigation);